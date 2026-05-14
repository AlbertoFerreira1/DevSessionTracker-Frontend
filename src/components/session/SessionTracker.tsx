import type { SessionData } from "../../models/Sessions";
import { getTheMonth, getMotivationMessage } from "../../utils/util";

export const SessionTracker = ({ data }: { data: SessionData[] | null }) => {
  const totalMinutesInSession = (data ?? []).reduce(
    (acc, session) => acc + (session.duration_minutes ?? 0),
    0,
  );

  return (
    <>
      {!data?.length && (
        <div>
          <p>No Session Data Available</p>
        </div>
      )}

      {!!data?.length && (
        <div>
          <p>
            You studied {totalMinutesInSession} minutes this month of{" "}
            {getTheMonth()}
          </p>
          <p>{getMotivationMessage(totalMinutesInSession)}</p>
        </div>
      )}
    </>
  );
};