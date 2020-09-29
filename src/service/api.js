const axios = require('axios');

export async function getLists() {

  let res = await axios.get('http://localhost:4000/board/')
  
  return res;

}

export async function postLists(data) {

  const params = { 
    id: 10 , 
    content: data.name}

  await axios.post('http://localhost:4000/board', params);

}
