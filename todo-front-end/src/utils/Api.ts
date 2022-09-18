import axios from "axios";

const Api = axios.create({
  baseURL: `http://localhost:3333/api`,
  timeout: (60 * 1000)
})

export default Api

// export const API_URL = 'http://localhost:3333/api';

// export const TODO_GET = () => {
//   return {
//     url: API_URL + '/tb_todos',
//     options: {
//       method: 'GET',
//       cache: 'no-store',
//     }
//   }
// }
