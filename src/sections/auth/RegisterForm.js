import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Eye, EyeSlash, Stack } from "phosphor-react";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRegisterMutation } from "../../features/Api/LoginAPi";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthRegisterForm() {
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.token);
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [register, { isLoading, error }] = useRegisterMutation();
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (input.email === "" || input.password === "" || input.name === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in the required fields",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      const result = await register(input).unwrap();
      if (result) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Register Success, ${result.name} ! `,
          showConfirmButton: false,
          timer: 1500,
        });
        setInput({
          email: "",
          name: "",
          password: "",
        });
        navigate("/auth/login");
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
        id="name"
        label="Name"
        name="name"
        onChange={handleChange}
        fullWidth
        value={input.name}
      />
      <TextField
        required
        id="email"
        label="Email"
        name="email"
        value={input.email}
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
        value={input.password}
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
        Register
      </LoadingButton>
    </>
  );
}
