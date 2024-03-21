import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import{getusersAllNotes} from '../apis/course.api';
import axios from 'axios';
import CourseCard from './Enrolled_course_cards';


const MyCourses = ({ userData }) => {
  const [loaders,setLoaders]=useState(false);
  const [CourseData, setCourseData] = useState([]); 
  useEffect(() => {
      getcoursedata();
    }, []);

      
    const getcoursedata = async () => {
        try {
          let courselist = await axios.get("https://course-app-server.onrender.com/tunetutor/courses");
          setCourseData(courselist.data);
          // console.log(courselist.data);
        } catch (error) {
          console.log(error);
        }
      };
  const [usersCourseData, setUsersCourseData] = useState([]); 
  useEffect(() => {
      getuserscoursedata();
    }, []);

    const getuserscoursedata = async () => {
        try {
          let courselist = await getusersAllNotes(userData._id);
          setUsersCourseData(courselist.data.result);
        } catch (error) {
          console.log(error);
        }
      };

      const [enrolledCourses,setEnrolledCourses]=useState([]);
useEffect(()=>{
  setLoaders(true);
  const userEnrolledCourses = CourseData.filter(course => usersCourseData.some(userCourse => userCourse.product_id == course._id));
  setEnrolledCourses(userEnrolledCourses);
  setLoaders(false);
}, [CourseData, usersCourseData]);
    

      // console.log(userEnrolledCourses);

  return (
    <View>
      <Text>{enrolledCourses.length ? <CourseCard productData={enrolledCourses}/>: <Text>You have Not Enrolled of these Courses</Text>}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(MyCourses);
