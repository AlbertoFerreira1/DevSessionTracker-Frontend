import { Box, Typography } from "@mui/material";
import { LoginInput } from "../components/LoginInput";

type LoginScreenProps = {
  onLoginSuccess: () => void;
};

export const LoginScreen = ({ onLoginSuccess }: LoginScreenProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="h3">Dev Session Tracker</Typography>
        <Typography variant="body1" sx={{ marginTop: "-15px" }}>
          Keep track of what you are coding and learning!
        </Typography>

        <LoginInput onLoginSuccess={onLoginSuccess} />
      </Box>
    </Box>
  );
};