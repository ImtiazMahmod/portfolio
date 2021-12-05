import { Divider, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SendIcon from "@mui/icons-material/Send";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { saveAs } from "file-saver";
import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Typewriter from "typewriter-effect";

const Me = () => {
  const windowWidth = window.screen.width;
  const aos =
    (windowWidth > 1024 && "fade-right") ||
    (windowWidth > 426 ? "fade-left" : "fade-up");
  ///anchor style
  const useStyles = makeStyles({
    root: {
      transition: "all .5s ease",
      "&:hover": {
        color: "#FF9800",
        transform: "scale(1.1)",
      },
    },
  });
  const { root } = useStyles();
  const height = windowWidth > 1024 && "38rem";
  ///handleContact
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };
  const saveCV = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1z31qIjlfdsqoDvJLwKIOnURYfJlPU5Qg"
    );
  };

  return (
    <Box
      data-aos={aos}
      sx={{
        bgcolor: "#31313A",
        textAlign: "center",
        borderRadius: "2%",
      }}
    >
      <Box
        style={{
          background: "url(./images/bg-1.png)",
          width: "100%",
          height: "20rem",
          backgroundSize: "cover",
          borderRadius: "2%",
        }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "flex-end",
        }}
      >
        {" "}
        <img
          data-aos="fade-on"
          style={{ borderRadius: "50%", border: "2px solid gray" }}
          src="https://i.ibb.co/82CVWx0/hero.png"
          height="150"
          width="150"
          alt=""
        />
      </Box>
      <Box data-aos="fade-up" sx={{ mt: 3 }}>
        <Typography variant="h4">Imtiaz Mahmod Misbah</Typography>

        <Box sx={{ color: "#FF9800" }}>
          {" "}
          <Typewriter
            options={{
              strings: ["Web Developer", "MERN Stack Developer"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </Box>
        <Box sx={{ mb: 10 }}>
          {" "}
          <a
            href="http://linkedin.com/in/imtiazmahmod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              className={root}
              sx={{ mx: 1, color: "gray", mt: 2 }}
            />
          </a>
          <a
            href="http://github.com/imtiazmahmod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className={root} sx={{ mx: 1, color: "gray" }} />
          </a>
          <a
            href="http://twitter.com/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className={root} sx={{ mx: 1, color: "gray" }} />
          </a>
          <a
            href="https://imtiaz-mahmod.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon className={root} sx={{ mx: 1, color: "gray" }} />
          </a>
        </Box>
      </Box>
      <Divider color={grey[700]} />
      <Box data-aos="flip-left" sx={{ display: "flex", borderTop: "1px " }}>
        <Button
          className={root}
          onClick={saveCV}
          sx={{
            p: 3,
            color: "#e0e0e1",
            // "&:hover": { color: "#FF9800" },
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          DOWNLOAD CV{" "}
          <CloudDownloadIcon
            sx={{
              mx: 1,
            }}
          />
        </Button>
        {height ? (
          <Button
            className={root}
            onClick={handleContact}
            sx={{
              p: 3,
              color: "#e0e0e1",
              // "&:hover": { color: "#FF9800" },
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            CONTACT ME{" "}
            <SendIcon
              sx={{
                mx: 1,
              }}
            />
          </Button>
        ) : (
          <Button
            data-aos="flip-left"
            href="#contact"
            sx={{
              p: 3,
              color: "#e0e0e1",
              "&:hover": { color: "#FF9800" },
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            CONTACT ME{" "}
            <SendIcon
              sx={{
                mx: 1,
              }}
            />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Me;
