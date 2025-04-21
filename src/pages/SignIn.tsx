import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const waitForSession = async (maxRetries = 5, delay = 500): Promise<boolean> => {
    let retries = 0;
    while (retries < maxRetries) {
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData?.session?.user) {
            return true; // Session stabilized
        }
        await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before retrying
        retries++;
    }
    return false; // Session did not stabilize
};

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        console.log("Sign-in attempt with:", { email, password });

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error("Sign-in error details:", error);
                throw error;
            }

            if (data.user) {
                console.log("User after successful sign-in:", data.user);
                toast.success("Login successful!");

                // Wait for session to stabilize
                const sessionStabilized = await waitForSession();
                if (sessionStabilized) {
                    navigate("/dashboard");
                } else {
                    console.error("Session did not stabilize after login.");
                    toast.error("Unable to verify session. Please try again.");
                }
            }
        } catch (error: any) {
            console.error("Authentication process failed:", error);
            toast.error(error.message || "Unexpected error occurred during sign-in.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
                <div className="container-custom max-w-md">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="pl-10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="pl-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading} type="submit">
                            {isLoading ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default SignIn;