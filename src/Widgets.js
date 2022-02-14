import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
        <div className="widgets__input">
            <SearchIcon className = "widgets__searchIcon" />
            <input type="text" placeholder = "Search Twitter" />

        </div>
        <div className="widgets__widgetContainer">
            <h2>What's Happening </h2>
            <TwitterTweetEmbed tweetId = {"1409409772357525505"} />
            <TwitterTimelineEmbed options = {{height : 400}} sourceType = "profile" screenName = "bharat53516559" />
            <TwitterShareButton url = {"https://www.facebook.com/profile.php?id=100011508069380"} options = {{text: "#reactjs is awesome" , via : "bharat53516559"}} />
                
        </div>
        </div>
    );
}


export default Widgets;