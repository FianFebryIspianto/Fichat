import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Eye, EyeSlash, Stack } from "phosphor-react";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import Swal from "sweetalert2";
import { useLoginMutation } from "../../features/Api/LoginAPi";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../features/Slice/AuthSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AuthLoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);

  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [login, { isLoading, error }] = useLoginMutation();
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // check if input email or input password "" Swal
      if (input.email === "" || input.password === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in the email and password fields",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      const result = await login(input).unwrap();
      // console.log(result);
      if (result?.token) {
        localStorage.setItem("token", result.token);
        dispatch(setAccessToken(result.token));
        navigate("/app");
      }
      if (error) {
        throw error;
      }
    } catch (error) {
      if (error?.status) {
        Swal.fire({
          icon: "error",
          title: `${error.status}`,
          text: `${error.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <>
      <TextField
        required
        id="email"
        label="Email"
        name="email"
        onChange={handleChange}
        fullWidth
      />
      <TextField
        required
        id="password"
        label="Password"
        name="password"
        fullWidth
        onChange={handleChange}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        loading={isLoading}
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Login
      </LoadingButton>
    </>
  );
}
