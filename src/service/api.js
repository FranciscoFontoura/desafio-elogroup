const axios = require('axios');

export async function getLists() {

  let res = await axios.get('http://localhost:4000/board/')
  
  return res;

}

export async function postLists(data) {

  const params = { 
    id: "next id" , 
    content: data.name}

  await axios.post('http://localhost:4000/board/1/cards', params);

}
