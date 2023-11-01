import React from "react";
import "@/Styles/contact.css";
import { Button, TextField } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import MapIcon from "@mui/icons-material/Map";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Contact = ({ onContact }) => {
  return (
    <div className="contact-page" id="contact">
      <div className="narrow-contant">
        <div className="row">
          <div className="heading">
            <span>GET IN TOUCH</span>
            <h3>CONTACT</h3>
          </div>
        </div>

        <div className="row">
          <div className="contact-container">
            <div className="contact-detail">
              <div className="web margin-bottom">
                <div className="icon">
                  <AlternateEmailTwoToneIcon fontSize="large" />
                </div>
                <div className="inline">
                  <span className="info">shivam99singh33@gmail.com</span>
                </div>
                <div className="inline"></div>
              </div>
              <div className="location margin-bottom">
                <div className="icon">
                  <MapIcon fontSize="large" />
                </div>
                <span className="span">
                  Khora Colony, Sector 62A, Ghaziabad
                </span>

                <div className="inline">
                  <div className="inline"></div>
                </div>
              </div>
              <div className="phoneNumber margin-bottom">
                <div className="icon">
                  <PhoneAndroidIcon fontSize="large" />
                </div>
                <div className="inline">
                  <div className="inline">
                    <span ref={onContact} className="info">
                      +91 991 140 7533
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <form action={"/"} className="massage-container">
              <TextField
                className="input"
                id="outlined-required"
                label="Name"
                variant="outlined"
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />

              <TextField
                className="input"
                id="outlined-basic"
                label="Subject"
                variant="outlined"
              />

              <textarea
                name=""
                id=""
                cols="50"
                rows="10"
                placeholder="Massage"
              ></textarea>
              <div className="btn">
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                  <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                  </Button>
                </Stack>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
