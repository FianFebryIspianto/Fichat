import React from "react";
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import { TxtMessage, TimeLine, MediaMessage } from "./MsgTypees";

function Message() {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMessage el={el} />;
                case "doc":
                  // doc
                  break;
                case "link":
                  // link
                  break;
                case "reply":
                  // reply
                  break;
                default:
                  return <TxtMessage el={el} />;
              }
              //
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}

export default Message;
