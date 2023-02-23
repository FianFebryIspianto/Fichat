import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Nav_Setting } from "../../data";
import { Gear, MoonStars, Sun } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";

const DashboardLayout = () => {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [themeMode, setThemeMode] = useState("light");
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Stack direction={"row"}>
        <Box
          sx={{
            height: "100vh",
            width: 100,

            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack
            py={3}
            alignItems={"center"}
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            <Stack alignItems={"center"} spacing={4}>
              <Box
                sx={{
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                  backgroundColor: theme.palette.primary.main,
                }}
                p={1}
              >
                <img src={Logo} alt="Tawk" />
              </Box>
              <Stack
                sx={{ width: "max-content" }}
                direction="column"
                alignItems={"center"}
                spacing={3}
              >
                {Nav_Buttons.map((el) => {
                  return el.index === selected ? (
                    <Box
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                      p={1}
                    >
                      <IconButton
                        onClick={() => {}}
                        sx={{ width: "max-content", color: "#ffffff" }}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => {
                        setSelected(el.index);
                      }}
                      sx={{
                        width: "max-content",
                        color:
                          theme.palette.mode === "light"
                            ? "#080707"
                            : theme.palette.text.primary,
                      }}
                    >
                      {el.icon}
                    </IconButton>
                  );
                })}
                <Divider sx={{ width: 48 }} />
                {Nav_Setting.map((el) => {
                  return el.index === selected ? (
                    <Box
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                      p={1}
                    >
                      <IconButton
                        onClick={() => {
                          // dispatch(UpdateTab(el.index));
                        }}
                        sx={{ width: "max-content", color: "#ffffff" }}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => {
                        setSelected(el.index);

                        // dispatch(UpdateTab(el.index));
                      }}
                      sx={{
                        width: "max-content",
                        color:
                          theme.palette.mode === "light"
                            ? "#080707"
                            : theme.palette.text.primary,
                      }}
                    >
                      {el.icon}
                    </IconButton>
                  );
                })}
              </Stack>
            </Stack>
            <Stack spacing={4} alignItems="center">
              {themeMode === "light" ? (
                <IconButton
                  onClick={() => {
                    onToggleMode();
                    setThemeMode("dark");
                  }}
                >
                  <MoonStars size={40} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    onToggleMode();
                    setThemeMode("light");
                  }}
                >
                  <Sun size={40} />
                </IconButton>
              )}
              <Avatar src={faker.image.avatar()} />
            </Stack>
          </Stack>
        </Box>
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
