import { Box, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ConversationComponent from "../../components/Conversation";
import Chats from "./Chats";
import NoChat from "../../assets/Illustration/NoChat";
import { Link } from "react-router-dom";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 410px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f0f4fa"
              : theme.palette.background.default,
        }}
      >
        <ConversationComponent />
        {/* if no chat */}
        {/* <Stack
          spacing={2}
          sx={{ height: "100%", width: "100%" }}
          alignItems="center"
          justifyContent={"center"}
        >
          <NoChat />
          <Typography variant="subtitle2">
            Select a conversation or start a{" "}
            <Link
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
              to="/"
            >
              new one
            </Link>
          </Typography>
        </Stack> */}
      </Box>
    </Stack>
  );
};

export default GeneralApp;
