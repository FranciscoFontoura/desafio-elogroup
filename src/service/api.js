const axios = require('axios');

export async function getLists() {

  let res = await axios.post('https://run.mocky.io/v3/30eb0c8f-d788-444c-81d6-9e9f2ad721c3')
  
  return res;

}

export async function postLists(data) {

  const params = { 
    id: 10 , 
    content: data.name}
  
    console.log(params);

  await axios.post('http://localhost:4000/board', params);

  console.log(data);

}
