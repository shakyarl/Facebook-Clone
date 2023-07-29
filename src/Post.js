import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUpOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';

function Post({ profilePic, image, username, timestamp, message }) {

    const getDate = (seconds,nanoseconds) => {
        let ts = (seconds + nanoseconds / 1000000000) * 1000;
        return new Date(ts).toDateString();
    }
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic}
                    className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{ getDate(timestamp.seconds, timestamp.nanoseconds) }</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>
                    {message}
                </p>
            </div> 
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpOutlined />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post