import axios from 'axios';

export const UserPayment = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post('https://course-app-server.onrender.com/payments/intents', frmData);
        resolve(res);
        // if (res.data.success === true) {
        //   resolve(res.data);
        // }
        // console.log(res);
      } catch (error) {
        // console.log(error);
        reject(error);
      }
    });
  };