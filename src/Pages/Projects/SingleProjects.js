import {
  Card,
  CardActions,
  CardContent,
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
import { Link } from "react-router-dom";

const SingleProjects = ({ project, handleOpen }) => {
  //modal

  const { title, img, preview, description1, technologies, id } = project;
  ///anchor style
  const useStyles = makeStyles({
    root: {
      color: "#e0e0e1",

      transition: "color .5s ease",
      "&:hover": {
        color: "#FF9800",
      },
    },
  });
  const { root } = useStyles();
  //screen size
  const windowWidth = window.screen.width;

  const height = windowWidth > 380 ? "28rem" : "33reem";
  console.log(windowWidth);
  console.log(height);
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: "#31313A",
          borderRadius: "10%",
          p: 2,
          height: height,
          mx: "auto",
          my: 1,
        }}
      >
        <img height="150" width="100%" src={img} alt={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#e0e0e1", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
            {" "}
            {technologies.slice(3, 6).map((tech) => (
              <Typography
                variant="subtitle2"
                sx={{
                  mr: 1,
                  mb: 1,
                  color: "#FFB30D",
                  border: "1px solid #FFB30D",
                  textAlign: "center",
                  p: 1,
                }}
              >
                {tech}
              </Typography>
            ))}
            <Typography sx={{ color: "gray", my: 1 }}>
              {description1}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small" sx={{ px: 2 }} color="warning">
            <a className={root} href={preview} target="_blank" rel="noreferrer">
              Preview
            </a>
          </Button>
          <Link to={`/projects/${id}`}>
            {" "}
            <Button
              onClick={handleOpen}
              sx={{
                px: 2,
                color: "#e0e0e1",
                textDecoration: "underline",
                "&:hover": {
                  color: "#FF9800",
                  textDecoration: "underline",
                },
              }}
              size="small"
            >
              Explore
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleProjects;
