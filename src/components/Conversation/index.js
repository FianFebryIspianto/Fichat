import { Stack } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import { Box } from "@mui/material";
import Header from "./Header";
import Message from "./Message";

function ConversationComponent() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat header */}
      <Header />
      {/*msg  */}
      <Box
        width={"100%"}
        sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
      >
        <Message />
      </Box>

      {/*chatfooter  */}
      <Footer />
    </Stack>
  );
}

export default ConversationComponent;
