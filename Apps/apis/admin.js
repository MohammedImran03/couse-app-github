import axios from 'axios';

export const createnewCoursedetails = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.post('https://course-app-server.onrender.com/tunetutor/create-newcoursedetails', frmData);
        console.log(result);
        resolve(result.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

