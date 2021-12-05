import { Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

const About = () => {
  const windowWidth = window.screen.width;
  const overflow = windowWidth > 1024 ? "scroll" : "hidden";
  const height = windowWidth > 1024 && "38rem";
  console.log(windowWidth);
  console.log(overflow, height);
  const aos =
    (windowWidth > 1024 && "fade-right") ||
    (windowWidth > 426 ? "fade-right" : "fade-up");
  return (
    <Box
      data-aos={aos}
      id="about"
      sx={{
        bgcolor: "#31313A",
        borderRadius: "2%",
        height: height,
        overflowY: overflow,
        my: 2,
      }}
    >
      <Typography data-aos="fade-on" variant="h6" sx={{ p: 3 }}>
        <span style={{ color: "#FFB30D" }}>About </span>
        Me
      </Typography>
      <Divider />
      <Typography data-aos="fade-up" sx={{ p: 3 }}>
        Hey! I'm Imtiaz Mahmod Misbah. Web Developer from Bangladesh. I have
        rich experience in both front end and back end development. I love to
        talk with you about our unique.
      </Typography>
      <Box data-aos="fade-up" sx={{ px: 3, color: "#A2A2A6" }}>
        <Typography>
          {" "}
          <span style={{ color: "#e0e0e1" }}>E-mail </span> | @gmail.com
        </Typography>
        <Typography>
          {" "}
          <span style={{ color: "#e0e0e1" }}>Residence </span> | Bangladesh
        </Typography>
        <Typography>
          {" "}
          <span style={{ color: "#e0e0e1" }}>Address</span> | Cox's
          Bazar,Bangaldesh
        </Typography>

        <Typography>
          {" "}
          <span style={{ color: "#e0e0e1" }}>Freelance </span> | Available
        </Typography>
      </Box>
      <Box data-aos="fade-up" sx={{ my: 5 }}>
        {" "}
        <Typography variant="h6" sx={{ p: 3 }}>
          Qoute
        </Typography>
        <Divider color={grey[700]} />
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              px: 2,
              color: "#A2A2A6",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            "
          </Typography>

          <Typography
            data-aos="fade-right"
            sx={{ color: "#A2A2A6", textAlign: "center" }}
          >
            The best preparation for tomorrow is doing your best today.Fear
            keeps us focused on the past or worried about the future. If we can
            acknowledge our fear, we can realize that right now we are okay.
            Right now, today, we are still alive, and our bodies are working
            marvelously. Our eyes can still see the beautiful sky. Our ears can
            still hear the voices of our loved ones.
          </Typography>
        </Box>
        <Box data-aos="zoom-in" sx={{ textAlign: "center", py: 4 }}>
          <img
            style={{ borderRadius: "50%", border: "2px solid gray" }}
            src="https://i.ibb.co/82CVWx0/hero.png"
            height="80"
            width="80"
            alt=""
          />
          <Typography>Imtiaz Mahmod Misbah</Typography>
          <Typography color="gray">Web Developer</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
