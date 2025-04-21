import { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isLoading: true,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log("Auth event:", event); // Debugging
        console.log("Current session in onAuthStateChange:", currentSession); // Debugging

        if (event === "SIGNED_OUT") {
          setSession(null);
          setUser(null);
          toast.success("Signed out successfully");
        } else if (currentSession?.user) {
          setSession(currentSession);
          setUser(currentSession.user);
        }

        setIsLoading(false);
      }
    );

    // Fetch the current session on component mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session);
        setUser(session.user);
        console.log("Session state after fetching session:", session);
        console.log("User state after fetching session:", session?.user);
      } else {
        console.log("No session found during initialization.");
      }
      setIsLoading(false);
    });

    // Cleanup the subscription on component unmount
    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      setUser(null);
      toast.success("Signed out successfully");
    } catch (error) {
      console.error("Error during sign-out:", error);
      toast.error("Failed to sign out. Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ session, user, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};