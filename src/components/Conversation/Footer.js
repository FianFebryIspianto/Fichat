import React from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  useTheme,
} from "@mui/material";

import { LinkSimple, PaperPlane, Smiley } from "phosphor-react";
import StyledInput from "../StyledInput";
function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#ffff"
            : theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
      p={2}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <StyledInput
          fullWidth
          placeholder="Write a Message..."
          variant="filled"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Smiley />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ height: "100%", width: "100%" }}
          >
            <IconButton>
              <PaperPlane color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
