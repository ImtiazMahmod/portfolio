import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Blog = () => {
  const windowWidth = window.screen.width;
  const overflow = windowWidth > 1024 ? "scroll" : "hidden";
  const height = windowWidth > 1024 && "38rem";
  return (
    <Box
      id="blog"
      sx={{
        bgcolor: "#31313A",
        borderRadius: "2%",
        height: height,
        overflowY: overflow,
        my: 2,
      }}
    >
      <Typography variant="h6" sx={{ p: 3 }}>
        Blog
      </Typography>
      <Divider />{" "}
      <Typography
        variant="h4"
        sx={{ p: 3, textAlign: "center", color: "gray" }}
      >
        Coming Soon
      </Typography>
    </Box>
  );
};

export default Blog;
