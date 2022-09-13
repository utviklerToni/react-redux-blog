import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import PostsList from './PostsList';

const PostList = (props) => {
   console.log(props, 'post list app');

   useEffect(() => {
      // const loadedPosts = async () => {
      //    const res = await props.fetchPosts();
      // };
      // loadedPosts();
      props.fetchPosts();
   }, []);

   return (
      <div>
         <h1>PostList</h1>
         <PostsList props={props} />
      </div>
   );
};

const mapStateToProps = (state) => {
   return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
