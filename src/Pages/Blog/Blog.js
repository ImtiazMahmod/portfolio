import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Blog = () => {
  const windowWidth = window.screen.width;
  const overflow = windowWidth > 1024 ? "scroll" : "hidden";
  const height = windowWidth > 1024 && "38rem";
  const aos =
    (windowWidth > 1024 && "fade-right") ||
    (windowWidth > 426 ? "fade-right" : "fade-up");
  return (
    <Box
      data-aos={aos}
      id="blog"
      sx={{
        bgcolor: "#31313A",
        borderRadius: "2%",
        height: height,
        overflowY: overflow,
        my: 2,
      }}
    >
      <Typography
        data-aos="fade-on"
        variant="h5"
        sx={{ p: 3, fontWeight: "bold" }}
      >
        <span style={{ color: "#FFB30D" }}>Blog</span>s
      </Typography>
      <Divider />{" "}
      <Typography
        data-aos="fade-up"
        variant="h4"
        sx={{ p: 3, textAlign: "center", color: "gray" }}
      >
        Coming Soon
      </Typography>
    </Box>
  );
};

export default Blog;
