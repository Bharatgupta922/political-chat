import React, { useState } from 'react'
import "./TweetBox.css";
import {Avatar , Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage , setTweetMessage] = useState("");
    
    const [tweetImage , setTweetImage] = useState("");
    
    const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
        displayName : "Bharat gupta",
        username : 'bharat556565',
        verified : true,
        text : tweetMessage,
        image:tweetImage,
        avatar : "https://media-exp3.licdn.com/dms/image/C5603AQEmXHoadPhHxQ/profile-displayphoto-shrink_400_400/0/1589861662318?e=1631145600&v=beta&t=9xsi1nGPL7hqnZoZubzAF53GOua3o23YUoTWCtdDT4M"
    });
    setTweetImage("");
    setTweetMessage("");
    };

    return (
        <div className = "tweetBox">
            <form >
                <div className="tweetBox__input">
                <Avatar src = "https://media-exp3.licdn.com/dms/image/C5603AQEmXHoadPhHxQ/profile-displayphoto-shrink_400_400/0/1589861662318?e=1631145600&v=beta&t=9xsi1nGPL7hqnZoZubzAF53GOua3o23YUoTWCtdDT4M" />
                <input type="text" onChange = {e => setTweetMessage(e.target.value)} value = {tweetMessage} placeholder = "What's Happning?" />
                </div>
                <input className = "tweetBox__imageInput" type="text" value = {tweetImage} onChange = {e => setTweetImage(e.target.value)} placeholder = "Enter Image Url" />
                <Button className = "tweetBox__tweetButton" onClick={sendTweet} type = "submit">Tweet</Button>
            </form>
        </div>
    )
}
export default TweetBox;
