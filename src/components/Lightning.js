import * as React from "react";
import { ligthningStyles } from "../utils/constant";
import ImageList from "@mui/material/ImageList";

export default function Lightning() {
  const selected = (selected_url) => {
    ligthningStyles.forEach((item) => {
      if (item.url === selected_url) {
        document.getElementById(item.url).style.opacity = 1.0;
        document.getElementById(item.url).style.border = "5px solid #31d84a";
      } else {
        document.getElementById(item.url).style.border = "0px";
        document.getElementById(item.url).style.opacity = 0.7;
      }
    });
  };

  return (
    <div className="content-main">
      <ImageList variant="woven" cols={2} gap={15}>
        {ligthningStyles.map((item) => (
          <label for={item.title}>
            <img
              src={item.url}
              alt={item.url}
              id={item.url}
              className="styleImage"
              onClick={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                selected(item.url);
              }}
            />
            {item.title}
            <div className="moreInfo">
              <u>More Info</u>
            </div>
          </label>
        ))}
      </ImageList>
    </div>
  );
}
