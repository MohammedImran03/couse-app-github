import Home from "./Screens/Home";
import Blogs from "./Screens/Blogs";
import Course from "./Screens/Course";
import Contacts from "./Screens/Contacts";
import About from "./Screens/About";
import { createStackNavigator } from '@react-navigation/stack';
import OtherPage from "./Screens/otherpage";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
const Stack = createStackNavigator();

const OtherPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OtherPage" component={OtherPage} />
      {/* Add other screens if needed */}
    </Stack.Navigator>
  );
};
export {Home,About,Blogs,Course,Contacts,OtherPageStack,SignUp,Login};