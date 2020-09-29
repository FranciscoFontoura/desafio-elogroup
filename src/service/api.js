const axios = require('axios');

export async function getLists() {

  let res = await axios.post('https://run.mocky.io/v3/30eb0c8f-d788-444c-81d6-9e9f2ad721c3')
  console.log(res.data);
  return res;

}

export async function postLists(data) {
  
  await axios.post('http://localhost:4000/board/', data);

  console.log(data);

}
