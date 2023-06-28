import React from "react";
import "./Navbar.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { UilBlogger } from "@iconscout/react-unicons";
import { UilClipboardNotes } from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="titl">Intern Brand</div>
      </div>
      <div className="center">
        <div className="options">
          <TextSnippetIcon className="icons"/>
          <span>Browse Listing</span>
        </div>
        <div className="options">
          <UilClipboardNotes className="icons"/>
          <span>Application Listing</span>
        </div>
        <div className="options">
          <UilBlogger className="icons"/>
          <span>Blog</span>
        </div>
        <div className="options">
          <ContactSupportIcon className="icons" /> <span>Contact Us</span>
        </div>
      </div>
      <div className="right">
        <div className="options">
          <NotificationsIcon style={{fontSize:"30px"}}/>
        </div>
        <div className="profile">
          <img
            src="https://www.realmenrealstyle.com/wp-content/uploads/2021/07/5-10.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
