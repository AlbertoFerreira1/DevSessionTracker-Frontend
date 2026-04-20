import {
  Alert,
  Box,
  Button,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import "./LoginInput.css";
import { useState } from "react";
import type { LoginDTO } from "../models/Users";

type LoginInputProps = {
  onLoginSuccess: () => void;
};

export const LoginInput = ({ onLoginSuccess }: LoginInputProps) => {
  const [data, setData] = useState<LoginDTO>({
    username: "",
    password: "",
  });

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState<"success" | "error">(
    "success",
  );

  const usernameError = data.username.length > 0 && data.username.length < 5;
  const passwordError = data.password.length > 0 && data.password.length < 5;

  const handleCloseSnackbar = () => {
    setSnackOpen(false);
  };

  const login = async () => {
    if (usernameError || passwordError || !data.username || !data.password) {
      setSnackSeverity("error");
      setSnackMessage("Please fill the form correctly");
      setSnackOpen(true);
      return;
    }

    try {
      const result = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await result.json();

      if (!result.ok) {
        setSnackSeverity("error");
        setSnackMessage(responseData?.message || "Login failed");
        setSnackOpen(true);
        return;
      }
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("username", responseData.username);
      setSnackSeverity("success");
      setSnackMessage(responseData?.message || "Login successful");
      setSnackOpen(true);
      setTimeout(() => {
        onLoginSuccess();
      }, 2000);
    } catch (error) {
      setSnackSeverity("error");
      setSnackMessage(error instanceof Error ? error.message : "Error");
      setSnackOpen(true);
    }
  };

  return (
    <Box className="input-card">
      <TextField
        label="Username"
        type="text"
        required
        value={data.username}
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            username: e.target.value,
          }))
        }
        error={usernameError}
        helperText={
          usernameError ? "Username must have at least 5 characters" : ""
        }
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
      />

      <TextField
        label="Password"
        type="password"
        required
        value={data.password}
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            password: e.target.value,
          }))
        }
        error={passwordError}
        helperText={
          passwordError ? "Password must have at least 5 characters" : ""
        }
        sx={{
          marginTop: "1.5rem",
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      <Button
        className="login-button"
        variant="contained"
        color="primary"
        onClick={login}
      >
        Login
      </Button>
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
