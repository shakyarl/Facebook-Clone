import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { db } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';

function Feed() {
  let [posts, setPosts] = useState([]);
  const postsCol = collection(db, 'posts');
  let postList = [];

  useEffect(() => {
    getPosts().then((data) => {
      postList = data;
      console.log(data);
      console.log(postList);
      setPosts(data);
      console.log(posts);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  const getPosts = async () => {
    const postSnapShot = await getDocs(postsCol);
    const postList = postSnapShot.docs.map(doc => doc.data());
    return postList;
  }

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      
      {}

      {/* {posts.map(post => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      )) } */}
      <Post
        profilePic='https://scontent.fluk1-1.fna.fbcdn.net/v/t1.18169-9/14522821_587175708153167_6354002634555991139_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cpBTIp97jT0AX9pQBrm&_nc_oc=AQl5l6uGXKQz9AMYI15Wanya7XhvecTnmE44xsjTSpTR-MV94Eq-UtiprtpjJ9Hjvf5h_Q53XHPvzs3wgYp9HVBp&_nc_ht=scontent.fluk1-1.fna&oh=00_AT8CQnIuND3OjJ9jkxC21phX9ogNnzRsQW2h9IxG7_aRRw&oe=6379EB27'
        message='OMG it actually does work!'
        timestamp='This is the timestamp'
        username='Rahul Shakya'
        image='https://images.theconversation.com/files/135250/original/image-20160824-30216-zdyfu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
      />
      <Post
        profilePic='https://scontent.fluk1-1.fna.fbcdn.net/v/t1.18169-9/14522821_587175708153167_6354002634555991139_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cpBTIp97jT0AX9pQBrm&_nc_oc=AQl5l6uGXKQz9AMYI15Wanya7XhvecTnmE44xsjTSpTR-MV94Eq-UtiprtpjJ9Hjvf5h_Q53XHPvzs3wgYp9HVBp&_nc_ht=scontent.fluk1-1.fna&oh=00_AT8CQnIuND3OjJ9jkxC21phX9ogNnzRsQW2h9IxG7_aRRw&oe=6379EB27'
        message='OMG it really does!'
        timestamp='This is the new timestamp'
        username='Rahul Shakya'
        image='https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/309037611_434412132123157_9090134691965249742_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iw7jJhXJZO8AX-Gyyko&_nc_ht=scontent.fosu2-1.fna&oh=00_AT8BhawKwi1NfZd3df7Om6cJhDghTF_TGrzeE8FbIZnb4Q&oe=6359171E'
      />
      <Post
        profilePic='https://scontent.fluk1-1.fna.fbcdn.net/v/t1.18169-9/14522821_587175708153167_6354002634555991139_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cpBTIp97jT0AX9pQBrm&_nc_oc=AQl5l6uGXKQz9AMYI15Wanya7XhvecTnmE44xsjTSpTR-MV94Eq-UtiprtpjJ9Hjvf5h_Q53XHPvzs3wgYp9HVBp&_nc_ht=scontent.fluk1-1.fna&oh=00_AT8CQnIuND3OjJ9jkxC21phX9ogNnzRsQW2h9IxG7_aRRw&oe=6379EB27'
        message='This message should only contain message and not images'
        timestamp='This is the n timestamp'
        username='Rahul Shakya'
      />


    </div>
  )
}

export default Feed