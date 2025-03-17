import axios from "axios";

const baseurl = "https://a90b05cb-e593-4a77-a500-82b909c678f2.mock.pstmn.io/";

try {
  const response = await axios.post(`${baseurl}/cities`,{
    "title": "New York",
  },{
    headers:{}
  });

  const statusCode = response.status;
  const data = response.data;
  console.log("Status Code: ", statusCode);
  console.log("Data: ", data);
}
catch (e) {
  console.log("Error: ", e);
}

// const data={
//   "name": "New York",
//   "country": "US",
//   "capital": false,
//   "location": {
//     "lat": 40.73061,
//     "lng": -73.935242
//   }
// }

// const jsonString = JSON.stringify(data);
// console.log(jsonString);

// const d= `{"name":"Jhon","age":30}`;
// const parsedObj = JSON.parse(d);
// console.log(parsedObj);