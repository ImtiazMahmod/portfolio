import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import BookIcon from "@mui/icons-material/Book";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navigation() {
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
        <Link style={{ textDecoration: "none" }} to="/">
          <Button>
            <Box
              sx={{
                color: "#e0e0e1",
                transition: "color .2s ease",
                "&:hover": { color: "#FF9800" },
                p: 2,
              }}
            >
              <HomeIcon fontSize="medium" />{" "}
              <Typography variant="subtitle2">HOME</Typography>
            </Box>
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          bgcolor: "#31313A",
          textAlign: "center",
          borderBottom: "1px solid gray",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/about">
          <Button>
            <Box
              sx={{
                color: "#e0e0e1",
                transition: "color .2s ease",
                "&:hover": { color: "#FF9800" },
                p: 2,
              }}
            >
              <PersonIcon fontSize="medium" />
              <Typography variant="subtitle2">ABOUT</Typography>
            </Box>
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          bgcolor: "#31313A",
          textAlign: "center",
          borderBottom: "1px solid gray",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="projects">
          <Button>
            <Box
              sx={{
                color: "#e0e0e1",
                transition: "color .2s ease",
                "&:hover": { color: "#FF9800" },
                p: 2,
              }}
            >
              <WebAssetIcon fontSize="medium" />{" "}
              <Typography variant="subtitle2">Projects</Typography>
            </Box>
          </Button>
        </Link>
      </Box>

      <Box
        sx={{
          bgcolor: "#31313A",
          textAlign: "center",
          borderBottom: "1px solid gray",
        }}
      >
        <Link to="contact" style={{ textDecoration: "none" }}>
          <Button>
            <Box
              sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h5">
                @
              </Typography>
              <Typography variant="subtitle2">CONTACT</Typography>
            </Box>
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          bgcolor: "#31313A",
          textAlign: "center",
          borderBottom: "1px solid gray",
          borderRadius: "0 0 5% 5% ",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/blog">
          {" "}
          <Button>
            <Box
              sx={{ color: "#e0e0e1", "&:hover": { color: "#FF9800" }, p: 2 }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h5">
                <BookIcon />
              </Typography>
              <Typography variant="subtitle2">BLOG</Typography>
            </Box>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
