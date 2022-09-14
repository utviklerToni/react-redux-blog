import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../../actions';

const UserHeader = (props) => {
   const { user } = props;

   if (!user) {
      return null;
   }

   return (
      <div>
         <h1>{user.name}</h1>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(UserHeader);
