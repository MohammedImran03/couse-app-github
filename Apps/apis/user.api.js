import axios from 'axios';

export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post('https://course-app-server.onrender.com/tunetutor/users/user-Sign-In', frmData);
        resolve(res.data);
        if (res.data.success === true) {
          resolve(res.data);
        }
        console.log(res);
      } catch (error) {
        reject(error);
      }
    });
  };

  export const userRegistration = (values) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post('https://course-app-server.onrender.com/tunetutor/users/addnewuser', values);
        resolve(res.data);
        if (res.data.success === true) {
          resolve(res.data);
        }
      } catch (error) {
        reject(error);
      }
    });
  };