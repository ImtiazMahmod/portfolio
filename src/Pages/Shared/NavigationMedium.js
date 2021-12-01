import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import BookIcon from "@mui/icons-material/Book";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";

export default function NavigationMedium() {
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Box
        sx={{
          bgcolor: "#31313A",
          textAlign: "center",
          borderBottom: "1px solid gray",
          borderRadius: "5% 5% 0 0",
        }}
      >
        {" "}
        <Button href="#">
          <Box sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}>
            <HomeIcon fontSize="medium" />{" "}
            <Typography variant="subtitle2">HOME</Typography>
          </Box>
        </Button>
      </Box>
      <Box
        sx={{
          bgcolor: "#31313A",
          textAlign: "center",
          borderBottom: "1px solid gray",
        }}
      >
        <Button href="#about">
          <Box sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}>
            <PersonIcon fontSize="medium" />
            <Typography variant="subtitle2">ABOUT</Typography>
          </Box>
        </Button>
      </Box>
      <Box
        sx={{
          bgcolor: "#31313A",
          textAlign: "center",
          borderBottom: "1px solid gray",
        }}
      >
        {" "}
        <Button href="#projects">
          <Box sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}>
            <WebAssetIcon fontSize="medium" />{" "}
            <Typography variant="subtitle2">Projects</Typography>
          </Box>
        </Button>
      </Box>

      <Box
        sx={{
          bgcolor: "#31313A",
          textAlign: "center",
          borderBottom: "1px solid gray",
        }}
      >
        <Button href="#contact">
          <Box sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              @
            </Typography>
            <Typography variant="subtitle2">CONTACT</Typography>
          </Box>
        </Button>
      </Box>
      <Box
        sx={{
          bgcolor: "#31313A",
          textAlign: "center",
          borderBottom: "1px solid gray",
          borderRadius: "0 0 5% 5% ",
        }}
      >
        <Button href="#blog">
          <Box sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              <BookIcon />
            </Typography>
            <Typography variant="subtitle2">BLOG</Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
