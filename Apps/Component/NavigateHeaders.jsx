import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import CustomDrawer from './CustomDrawer';

const NavigateHeaders = ({ userData }) => {
  // Check if user is admin
  const isAdmin = userData && userData.email === 'admin@gmail.com';

  return (
    <>
      {isAdmin ? <CustomDrawer /> : <Header />}
    </>
  );
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(NavigateHeaders);
