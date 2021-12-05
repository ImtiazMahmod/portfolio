import { Button, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import TodayIcon from "@mui/icons-material/Today";
import { makeStyles } from "@mui/styles";
import AOS from "aos";

const SingleProjectDetails = ({ project }) => {
  ///anchor style
  const useStyles = makeStyles({
    root: {
      color: "#e0e0e1",
      transition: "all .5s ease",
      "&:hover": {
        color: "#FF9800",
        transform: "scale(1.1)",
      },
    },
  });
  const { root } = useStyles();
  const {
    title,
    img,
    preview,
    technologies,
    clientSide,
    img1,
    img2,
    description1,
    description2,
    duration,
    serverSide,
  } = project[0];

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <Box data-aos="fade-up">
      <Typography
        data-aos="fade-on"
        sx={{ p: 3, fontWeight: "bold" }}
        variant="h5"
      >
        <span style={{ color: "#FFB30D" }}>Project</span> Explore
      </Typography>
      <Divider />
      <Box sx={{ p: 3 }}>
        <Typography data-aos="fade-on" sx={{ fontWeight: "bold" }} variant="h4">
          {title}
        </Typography>

        <Typography
          sx={{ my: 3, display: "flex" }}
          variant="subtitle2"
          color={grey[500]}
        >
          <TodayIcon sx={{ mr: 1 }} /> {duration}
        </Typography>
        <img data-aos="zoom-in-up" src={img} width="100%" alt={title} />
        <Typography
          data-aos="fade-right"
          sx={{ my: 3 }}
          variant="subtitle2"
          color={grey[500]}
        >
          {description1}
        </Typography>
        <img data-aos="zoom-in-up" src={img1} width="100%" alt={title} />
        <Typography
          data-aos="fade-left"
          sx={{ my: 3 }}
          variant="subtitle2"
          color={grey[500]}
        >
          {description2}
        </Typography>
        <img data-aos="zoom-in-up" src={img2} width="100%" alt={title} />
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Button sx={{ m: 1, px: 2 }} size="small" color="warning">
            <a href={preview} className={root} target="_blank" rel="noreferrer">
              Preview
            </a>
          </Button>
          <Button sx={{ m: 1, px: 2 }} size="small" color="warning">
            <a
              href={clientSide}
              className={root}
              target="_blank"
              rel="noreferrer"
            >
              Client-Side
            </a>
          </Button>
          {serverSide && (
            <Button size="small" sx={{ m: 1, px: 2 }} color="warning">
              <a
                href={serverSide}
                className={root}
                target="_blank"
                rel="noreferrer"
              >
                Server-Side
              </a>
            </Button>
          )}
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        {" "}
        <Typography sx={{ fontWeight: "bold", pb: 3 }} variant="h5">
          Technology
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", flexWrap: "wrap", my: 3 }}>
          {" "}
          {technologies.map((tech) => (
            <Typography
              data-aos="fade-on"
              variant="subtitle2"
              sx={{
                color: "#FFB30D",
                border: "1px solid #FFB30D",
                textAlign: "center",
                p: 1,
                m: 1,
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProjectDetails;
