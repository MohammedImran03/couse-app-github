import axios from 'axios';

export const createnewCounselling = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.post('https://course-app-server.onrender.com/tunetutor/new-course', frmData);
        console.log(result);
        resolve(result.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  export const getallCounsellings = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get('https://course-app-server.onrender.com/tunetutor/counselling/allcousellings');
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };