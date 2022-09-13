import React from 'react';
import './style.css';
import UserHeader from './UserHeader';

const PostsList = (props) => {
   console.log(props, 'post list');

   return (
      <ul>
         {props.props.posts.map((singlePost) => (
            <li key={singlePost.id} className='singlePost'>
               <h2>{singlePost.title}</h2>
               <br />
               <p>{singlePost.body}</p>
               <h4>{singlePost.author}</h4>

               <UserHeader userId={singlePost.userId} />
            </li>
         ))}
      </ul>
   );
};

export default PostsList;
