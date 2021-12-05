import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import AppBar from "@mui/material/AppBar";
import BookIcon from "@mui/icons-material/Book";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";

export default function NavigationSmall() {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Box
          sx={{
            bgcolor: "#31313A",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          {" "}
          <Button
            href="#"
            sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              <HomeIcon fontSize="medium" />
            </Typography>
            {/* <Typography variant="subtitle2">HOME</Typography> */}
          </Button>
        </Box>
        <Box
          sx={{
            bgcolor: "#31313A",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          <Button
            href="#about"
            sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              <PersonIcon fontSize="medium" />
            </Typography>
            {/* <Typography variant="subtitle2">ABOUT</Typography> */}
          </Button>
        </Box>
        <Box
          sx={{
            bgcolor: "#31313A",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          <Button
            href="#projects"
            sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              <WebAssetIcon fontSize="medium" />
            </Typography>
            {/* <Typography variant="subtitle2" sx={{ color: "#E0E0E1" }}>
          PROJECTS
        </Typography> */}
          </Button>
        </Box>

        <Box
          sx={{
            bgcolor: "#31313A",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          <Button
            href="#contact"
            sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              <AlternateEmailIcon />
            </Typography>
            {/* <Typography variant="subtitle2">CONTACT</Typography> */}
          </Button>
        </Box>
        <Box
          sx={{
            bgcolor: "#31313A",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          <Button
            href="#blog"
            sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              <BookIcon />
            </Typography>
            {/* <Typography variant="subtitle2">CONTACT</Typography> */}
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}
