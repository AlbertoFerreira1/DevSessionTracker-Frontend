import { Box, Card, CardContent, Typography } from "@mui/material";
import "./Dashboard.css";
import { SessionOverview } from "../components/session/SessionOverview";

export const Dashboard = () => {
  return (
    <Box className="dashboard-card">
      <Card
        sx={{ backgroundColor: "#000E2F", color: "white", minWidth: "60%" }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ padding: "5px", fontVariant: "small-caps" }}
        >
          Overview of Your last Sessions
        </Typography>

        <CardContent>
          <SessionOverview></SessionOverview>
        </CardContent>
      </Card>
    </Box>
  );
};
