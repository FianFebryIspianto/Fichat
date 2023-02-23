import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ConversationComponent from "../../components/Conversation";
import Chats from "./Chats";

const GeneralApp = () => {
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor: "black",
        }}
      >
        <ConversationComponent />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
