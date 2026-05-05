import type { SessionData } from "../models/Sessions";
import { useCallback, useState,useEffect } from "react";
import { fetchMonthlySession } from "../services/sessionApi";

export const useMonthlySessions = () => {
  const [data, setData] = useState<SessionData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

const loadData = useCallback(async () => {
  try {
    setLoading(true);
    setError(null);
    const items = await fetchMonthlySession();
    console.log(items.result);
    setData(items.result);
  } catch (error) {
    setError(error instanceof Error ? error.message : "Error fetching the Api");
  } finally {
    setLoading(false);
  }
}, []);


useEffect(() => {
  loadData();
}, [loadData]); 


return { data, loading, error, refetch: loadData };
}