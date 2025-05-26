import { useEffect, useState } from "react";
import CONSTANTS from "@/constants";
import GENERIC_CONSTANTS from "@/constants/generic.constants";
import { SessionData } from "@/types/auth.types";
export default function useSession() {
    const [session, setSession] = useState<SessionData | null>(null);
    const [loading, setLoading] = useState(true);
    const APP_URL = (process.env.APP_URL ||
        process.env.NEXT_PUBLIC_APP_URL) as string;
        useEffect(() => {
        const fetchSession = async () => {
            try {
                let response = await fetch(
                    CONSTANTS.GENERIC.AUTH.SESSION_PATH
                );
               
                if (response.ok) {
                    const session = (await response.json()) as SessionData;
                    setSession(session);
                }
                if (
                    response.status ===
                    GENERIC_CONSTANTS.HTTP.STATUS.UNAUTHORIZED
                ) {
                    window.location.href =
                        APP_URL + GENERIC_CONSTANTS.AUTH.SIGN_OUT_PATH;
                }
            }finally{
                setLoading(false);
            }
        }
        fetchSession();
    },[])
    return { session, loading };
}