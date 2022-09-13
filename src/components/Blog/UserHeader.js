import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

const UserHeader = (props) => {
   console.log(props, 'user header');

   useEffect(() => {
      props.fetchUser(props.userId);
   }, []);

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

export default connect(mapStateToProps, { fetchUser })(UserHeader);
