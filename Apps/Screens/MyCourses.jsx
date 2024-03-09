import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const MyCourses = ({ userData }) => {
  return (
    <View>
      <Text>Welcome, {userData ? userData._id : 'Guest'}</Text>
      <Text>My Courses</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(MyCourses);
