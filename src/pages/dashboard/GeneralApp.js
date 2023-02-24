import { Box, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ConversationComponent from "../../components/Conversation";
import Chats from "./Chats";

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
      </Box>
    </Stack>
  );
};

export default GeneralApp;
