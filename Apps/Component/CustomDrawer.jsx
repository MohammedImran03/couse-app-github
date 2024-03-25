import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeUserData } from '../Redux/action';
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5,FontAwesome, Entypo, SimpleLineIcons,Foundation,AntDesign,MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import {Login } from "../Route";
import { Picker } from '@react-native-picker/picker';
import Dashboard from '../Admin/Dashboard';
import Add_Course from '../Admin/Add_Course';
import Add_Videos from '../Admin/Add_Videos';
import All_Courses from '../Admin/All_Courses';
import CourseEnrollments from '../Admin/CourseEnrollment';
import CourseCounselling from '../Admin/CourseCounselling';
import CourseEnrollment from '../Admin/CourseEnrollment';

const CustomHeader = ({ userData, removeUserData }) => {

  const handleLogout = () => {
    removeUserData();
  };

  const [selectedScreen, setSelectedScreen] = useState('Dashboard');

  const Drawer = createDrawerNavigator();

  const coursesScreens = [
    { label: 'Dashboard', value: 'Dashboard' },
    { label: 'Add Course', value: 'Add_Course' },
  ];

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 120,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 2
                  }}
                >
                  <FontAwesome5 name="user-alt" size={35} color="white" />
                  <Text
                    style={{
                      fontSize: 20,
                      marginVertical: 5,
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >{userData ? `${userData.name}` : 'Welcome!'}</Text>
                </View>
                <DrawerItemList {...props} />
                {/* <View style={{ backgroundColor: "rgb(119,136,153)" }}>
                  <Picker
                    selectedValue={selectedScreen}
                    style={{ color: 'white', backgroundColor: "rgb(119,136,153)" }}
                    onValueChange={(itemValue) => {
                      setSelectedScreen(itemValue);
                      props.navigation.navigate(itemValue);
                    }}
                  >
                    {coursesScreens.map((screen, index) => (
                      <Picker.Item key={index} label={screen.label} value={screen.value} />
                    ))}
                  </Picker>
                </View> */}
                {userData &&
                  <View style={{ marginTop: 5, borderTopWidth: 2, borderBlockColor: "#fff", alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleLogout} style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                      <SimpleLineIcons name="logout" size={20} color="white" style={{ marginRight: 10 }} />
                      <Text style={{ color: 'white', marginVertical: 4, fontSize: 16, fontWeight: 'bold' }}>Logout </Text>
                    </TouchableOpacity>
                  </View>}
                {!userData &&
                  <Drawer.Screen
                    name="Join Now"
                    options={{
                      drawerLabel: 'SignUp / Log In',
                      title: 'Join Now',
                      drawerIcon: () => (
                        <Entypo name="login" size={25} color="black" />
                      ),
                    }}
                    component={Login}
                  />
                }
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "rgb(119,136,153)",
            width: 230
          },
          headerStyle: {
            height: 50,
            backgroundColor: "rgb(119,136,153)",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
          drawerLabelStyle: {
            color: "white"
          }
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          options={{
            drawerLabel: "Dash Board",
            title: "Dashboard",
            drawerIcon: () => (
              <FontAwesome name="home" size={25} color="black" />
            )
          }}
          component={Dashboard}
        />
           <Drawer.Screen
          name="Add Course"
          options={{
            drawerLabel: "Add Course",
            title: "Add new Course",
            drawerIcon: () => (
              <Entypo name="add-to-list" size={25} color="black" />
            )
          }}
          component={Add_Course}
        />
        <Drawer.Screen
          name="Add Videos"
          options={{
            drawerLabel: "Add Videos",
            title: "Add Course Video",
            drawerIcon: () => (
              <Foundation name="folder-add" size={25} color="black" />
            )
          }}
          component={Add_Videos}
        />
         <Drawer.Screen
          name="All Courses"
          options={{
            drawerLabel: "All Courses",
            title: "All Courses",
            drawerIcon: () => (
              <MaterialCommunityIcons name="format-list-checkbox" size={25} color="black" />
            )
          }}
          component={All_Courses}
        />
              <Drawer.Screen
          name="CourseCounselling"
          options={{
            drawerLabel: "Counselling",
            title: "CourseCounselling",
            drawerIcon: () => (
              <MaterialCommunityIcons name="account-box-multiple-outline" size={25} color="black" />
            )
          }}
          component={CourseCounselling}
        />
         <Drawer.Screen
          name="CourseEnrollment"
          options={{
            drawerLabel: "Enrollments",
            title: "Course Enrollment",
            drawerIcon: () => (
              <AntDesign name="database" size={25} color="black" />
            )
          }}
          component={CourseEnrollment}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});

const mapDispatchToProps = {
  removeUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
