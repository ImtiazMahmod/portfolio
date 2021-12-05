import { Divider, TextField, Typography, Button, Toolbar } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Contact = () => {
  const windowWidth = window.screen.width;
  const overflow = windowWidth > 1024 ? "scroll" : "hidden";
  const height = windowWidth > 1024 && "38rem";

  //input field style
  const MuiTextField = styled(TextField)({
    "& .MuiInputBase-input": {
      color: "#e0e0e1",
    },
    "& label": {
      color: "gray",
    },
    "& label.Mui-focused": {
      color: "#e0e0e1",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "gray",
    },
    "& .MuiInput-underline-hover": {
      borderBottomColor: "#e0e0e1",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FF9800",
    },
    "& .MuiOutlinedInput-root": {
      //   "& fieldset": {
      //     borderColor: "gray",
      //   },
      //   "&:hover fieldset": {
      //     borderColor: "gray",
      //     borderBottomColor: "gray",
      //   },
      //   "&.Mui-focused fieldset": {
      //     borderColor: "#e0e0e1",
      //   },
    },
    "&:hover": {
      borderBottomColor: "#e0e0e1",
    },
  });

  const form = useRef();
  ///handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lt17chc",
        "template_q30yzug",
        form.current,
        "user_OwivAPdhOSZStwKjITaV1"
      )
      .then(
        (result) => {
          if (result.text) {
            alert("we got your message");
            e.target.reset();
          }
        },
        (error) => {
          if (error.text) {
            alert("please try again later");
            e.target.reset();
          }
        }
      );
  };

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
  const aos =
    (windowWidth > 1024 && "fade-right") ||
    (windowWidth > 426 ? "fade-left" : "fade-up");
  return (
    <Box
      data-aos={aos}
      id="contact"
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
        <span style={{ color: "#FFB30D" }}>Get </span>
        in Touch
      </Typography>
      <Divider />
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          color: "#A2A2A6",
        }}
      >
        <Box>
          <Typography>
            {" "}
            <span style={{ color: "#e0e0e1" }}>E-mail </span> | @gmail.com
          </Typography>
          <Typography>
            {" "}
            <span style={{ color: "#e0e0e1" }}>Residence </span> | Bangladesh
          </Typography>
        </Box>
        <Box>
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
      </Box>
      <Typography variant="h6" sx={{ p: 3 }}>
        Contact form
      </Typography>
      <Divider /> */}
      <form data-aos="fade-up" ref={form} onSubmit={handleSubmit}>
        <Box sx={{ mx: "auto" }}>
          {" "}
          <MuiTextField
            id="standard-basic"
            label="Full Name"
            name="name"
            type="text"
            required
            sx={{ width: "75%", m: 2 }}
            variant="standard"
          />{" "}
          <br />
          <MuiTextField
            id="standard-basic"
            label="Email"
            name="email"
            type="email"
            required
            sx={{ width: "75%", m: 2 }}
            variant="standard"
          />{" "}
          <br />
          <MuiTextField
            name="message"
            id="standard-basic"
            label="Your Message"
            required
            multiline
            rows="5"
            sx={{ width: "75%", m: 2 }}
            variant="standard"
          />
        </Box>
        <Button className={root} type="submit" sx={{ m: 2 }}>
          {" "}
          SEND MESSAGE <DoubleArrowIcon />
        </Button>
      </form>
      <Toolbar />
    </Box>
  );
};

export default Contact;
