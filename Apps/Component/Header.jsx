import React from 'react';
import { connect } from 'react-redux';
import { removeUserData } from '../Redux/action';
import "react-native-gesture-handler";
import { View, Text, TouchableOpacity ,Picker} from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
  SimpleLineIcons
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { Home,About,Blogs,Course,Contacts,SignUp,Login,MyCourses } from "../Route";

const Header = ({ userData, removeUserData }) => {

  const handleLogout = () => {
    removeUserData();
  };


  const Drawer = createDrawerNavigator();
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
                  {/* <TouchableOpacity onPress={handleLogout}><Text>LOg out</Text></TouchableOpacity> */}
                </View>
                <DrawerItemList {...props} />
                {userData &&
                <View style={{marginTop:5,borderTopWidth:2, borderBlockColor:"#fff",alignItems:'center'}}>
                <TouchableOpacity onPress={handleLogout} style={{ padding: 10,flexDirection:'row', alignItems:'center' }}>
                <SimpleLineIcons name="logout" size={20} color="white" style={{marginRight:10}} /><Text style={{ color: 'white', marginVertical:4, fontSize:16,fontWeight:'bold'}}>Logout </Text>
                </TouchableOpacity>
                </View>}
              {!userData &&
                <Drawer.Screen
                  name="Join Now"
                  options={{
                    drawerLabel: 'SignUp / Log In',
                    title: 'Join Now',
                    drawerIcon: () => (
                      <Entypo name="login" size={25} color="#808080" />
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
            backgroundColor: "blueviolet",
            width: 230
          },
          headerStyle: {
            height:50,
            backgroundColor: "blueviolet",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
          drawerLabelStyle: {
            color: "white"
          },

          headerRight: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
            marginRight:15,
            }}>
            {/* <TouchableOpacity
            > */}
             <Text style={{
                 fontWeight: "bold",
                 fontSize: 16,
                 color:'white', 
                fontStyle:'italic',
             }}>Tune Tutor</Text>
            {/* </TouchableOpacity> */}
          </View>
          ),
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <FontAwesome name="home" size={25} color="#808080" />
            )
          }}
          component={Home}
        />
          <Drawer.Screen
          name="About"
          options={{
            drawerLabel: "About",
            title: "About Us",
            drawerIcon: () => (
              <MaterialIcons name="details" size={25} color="#808080" />
            )
          }}
          component={About}
        />
        <Drawer.Screen
          name="Blogs"
          options={{
            drawerLabel: "Blogs",
            title: "Blogs",
            drawerIcon: () => (
              <FontAwesome5 name="blogger-b" size={25} color="#808080" />
            )
          }}
          component={Blogs}
        />
        <Drawer.Screen
          name="Course"
          options={{
            drawerLabel: "Course",
            title: "Course",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={25} color="#808080" />
            )
          }}
          component={Course}
        />
        {userData &&    <Drawer.Screen
          name="MyCourses"
          options={{
            drawerLabel: "My Courses",
            title: "MyCourses",
            drawerIcon: () => (
              <FontAwesome name="list" size={25} color="#808080" />
            )
          }}
          component={MyCourses}
        />}
        <Drawer.Screen
          name="Contacts"
          options={{
            drawerLabel: "Contact",
            title: "Contact",
            drawerIcon: () => (
              <MaterialIcons name="contacts" size={25} color="#808080" />
            )
          }}
          component={Contacts}
        /> 
        {!userData && 
        <Drawer.Screen
          name="Join Now"
          options={{
            drawerLabel: "SignUp / Log In",
            title: "Join Now",
            drawerIcon: () => (
              <Entypo name="login" size={25} color="#808080" />
            )
          }}
          component={Login}
        /> 
           }
           {/* {userData &&   <TouchableOpacity onPress={handleLogout}><Text>LOg out</Text></TouchableOpacity>     
        } */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);





