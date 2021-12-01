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

const Me = () => {
  const windowWidth = window.screen.width;

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
          style={{ borderRadius: "50%", border: "2px solid gray" }}
          src="https://i.ibb.co/82CVWx0/hero.png"
          height="150"
          width="150"
          alt=""
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4">Imtiaz Mahmod Misbah</Typography>
        <Typography color="#FF9800">Web Developer</Typography>
        <Box sx={{ mb: 10 }}>
          {" "}
          <LinkedInIcon sx={{ mx: 1, color: "gray", mt: 2 }} />
          <GitHubIcon sx={{ mx: 1, color: "gray" }} />
          <TwitterIcon sx={{ mx: 1, color: "gray" }} />
          <LanguageIcon sx={{ mx: 1, color: "gray" }} />
        </Box>
        <Divider color={grey[700]} />
        <Box sx={{ display: "flex", borderTop: "1px " }}>
          <Button
            onClick={saveCV}
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
            DOWNLOAD CV{" "}
            <CloudDownloadIcon
              sx={{
                mx: 1,
              }}
            />
          </Button>
          {height ? (
            <Button
              onClick={handleContact}
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
          ) : (
            <Button
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
    </Box>
  );
};

export default Me;
