import type { SessionData } from "../../models/Sessions";
import { getTheMonth, getMotivationMessage } from "../../utils/util";

export const SessionTracker = ({ data }: { data: SessionData[] }) => {
  console.log(data);

  const TotalMinutesInSession = data?.reduce(
    (acc, session) => acc + session.duration_minutes,
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
            You studied {TotalMinutesInSession} minutes this month of{" "}
            {getTheMonth()}
          </p>
          <p>
            {getMotivationMessage(TotalMinutesInSession)}
          </p>
        </div>
      )}
    </>
  );
};
