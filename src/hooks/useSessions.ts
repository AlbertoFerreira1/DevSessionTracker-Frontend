
import { useState, useCallback, useEffect } from "react";
import * as SessionApi from "../services/sessionApi";
import type { SessionData } from "../models/Sessions";

export const useSessions = () => {
  const [data, setData] = useState<SessionData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const items = await SessionApi.fetchUserSessions();
      setData(items.data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Error fetching the Api",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  return {data,loading,error, refetch: loadData};
  
};
