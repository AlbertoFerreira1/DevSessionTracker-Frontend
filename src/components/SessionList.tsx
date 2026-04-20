import { useSessions } from "../hooks/useSessions";

export const SessionList = () => {
  const { data, loading, error } = useSessions();

  return <p>{data}</p>;
};
