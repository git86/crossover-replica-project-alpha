import { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
  createAdminUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isLoading: true,
  signOut: async () => {},
  createAdminUser: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, currentSession) => {
      console.log("Auth event:", event); // Debugging
      console.log("Current session:", currentSession); // Debugging
  
      if (event === "SIGNED_OUT") {
          setSession(null);
          setUser(null);
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("currentUser");
          toast.success("Signed out successfully");
      } else if (currentSession?.user) {
          setSession(currentSession);
          setUser(currentSession.user);
          localStorage.setItem("isLoggedIn", "true");
      }
  
      setIsLoading(false);
  });
    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", userId)
            .single();

        if (error) {
            throw error; // Throw error to handle it below
        }

        if (data) {
            // Store user data in localStorage for Dashboard access
            localStorage.setItem(
                "currentUser",
                JSON.stringify({
                    id: userId,
                    ...data,
                })
            );
            console.log("User profile fetched successfully:", data); // Debugging
        }
    } catch (error: any) {
        console.error("Error fetching user profile:", error.message || error);

        // Optional: Show a fallback notification
        toast.error("Unable to load user profile. Please contact support.");
    }
};

  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    toast.success("Signed out successfully");
  };

  const createAdminUser = async () => {
    try {
      setIsLoading(true);

      // Create admin user if it doesn't exist
      const { data, error } = await supabase.auth.signUp({
        email: "admin@ussagency.com",
        password: "admin123",
        options: {
          data: {
            full_name: "USS AGENCY Admin",
            role: "admin"
          }
        }
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        // After creating user, make sure they have admin role in profiles
        const { error: profileError } = await supabase
          .from("profiles")
          .upsert(
            {
              id: data.user.id,
              full_name: "USS AGENCY Admin",
              email: "admin@ussagency.com",
              role: "admin"
            },
            { onConflict: "id" }
          );

        if (profileError) throw profileError;

        toast.success(
          "Admin account created successfully: admin@ussagency.com / admin123"
        );
      }
    } catch (error: any) {
      console.error("Error creating admin:", error);

      // If the error is that the user already exists, just show a different message
      if (error.message?.includes("already registered")) {
        toast.info(
          "Admin account already exists: admin@ussagency.com / admin123"
        );
      } else {
        toast.error(error.message || "Failed to create admin account");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ session, user, isLoading, signOut, createAdminUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};