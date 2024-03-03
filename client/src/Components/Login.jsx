import * as React from "react";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "../Redux/action";
import { Navigate, useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Login() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(GoogleLogin());
    window.open("http://localhost:6005/auth/google/callback", "_self");
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleClick}
        >
          Sign In
        </Button>
      </Container>
    </ThemeProvider>
  );
}
