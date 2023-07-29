import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { db } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';

function Feed() {
  const [posts, setPosts] = useState([]);
  const postsCol = collection(db, 'posts');
  let postList = [];

  useEffect(() => {
    getPosts();
    // getPosts().then((data) => {
    //   setPosts(data);
    //   console.log(posts);
    // }).catch(error => {
    //   console.log(error);
    // })
  }, [])

  const getPosts = async () => {
    const postSnapShot = await getDocs(postsCol);
    setPosts(postSnapShot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    console.log(posts);
    // return postList;
  }

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      
      {posts.map(post => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      
      <Post
        profilePic='https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg'
        message='OMG it actually does work!'
        timestamp='This is the timestamp'
        username='Rahul Shakya'
        image='https://images.theconversation.com/files/135250/original/image-20160824-30216-zdyfu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
      />
    </div>
  )
}

export default Feed