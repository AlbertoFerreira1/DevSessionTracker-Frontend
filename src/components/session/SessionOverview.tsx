import "./SessionOverview.css";
import Grid from "@mui/material/Grid";
import { SessionTracker } from "./SessionTracker";
import { useMonthlySessions } from "../../hooks/useMonthlySessions";

export const SessionOverview = () => {
  const { data } = useMonthlySessions();

  return (
    <>
      <Grid container spacing={2} className="session-overview-cont">
        <Grid size={6}>
          <SessionTracker data={data}></SessionTracker>
        </Grid>
      </Grid>
    </>
  );
};
