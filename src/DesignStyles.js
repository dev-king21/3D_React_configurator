import * as React from 'react';
import {styleImage} from './config/config';
import ImageList from '@mui/material/ImageList';

export default function DesignStyles() {

    const selected = (selected_url) => {
        styleImage.forEach((item) => {
            if (item.url === selected_url) {
                document.getElementById(item.url).style.opacity = 1.0;
                document.getElementById(item.url).style.border = "2px solid green";
            }
            else {
                document.getElementById(item.url).style.border = "0px";
            }
        })
    }

    return (
        <div className="content-main">
            <ImageList variant="woven" cols={2} gap={15}>
            {styleImage.map((item) => (
                <label for={item.title}>
                    <img
                        src={item.url} 
                        alt={item.url}
                        id={item.url}
                        className = "styleImage"
                        onClick = {(ev)=> {ev.preventDefault(); ev.stopPropagation(); selected(item.url)}}
                    />
                    {item.title}
                    <div className="moreInfo"><u>More Info</u></div>
                </label>
            ))}
            </ImageList>
        </div>
    );
}

