
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CONSTANTS from '../../constants';
import axios from 'axios';
import * as FormData  from 'form-data'

export default async function handler (req, res) {


  const {id,Status,Contact_Number}=req.body
  const {BASE_URL}=CONSTANTS
  const data={"Status":Status,"Contact_Number":Contact_Number}
  
const data1=JSON.stringify(data)
let result={'status':'succeed'}
console.log(data);
axios.put(`http://localhost:8000/person/${id}/status/`,
req.body, {
            headers: {
              'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'

            }
          }
        ).then(function () {
          console.log('SUCCESS!!');
        })
        .catch(function (error) {
          console.log('FAILURE!!',data1);
          result={'status':error}
        });
            
//const result=await response.json()
//// try {
//  const result_data= fetch(`http://localhost:8000/person/${id}/status/`,
//  Mehod
//           JSON.stringify( data),
         
//         ).then(async function (out_data) {
//           result={'status':out_data};
//           const rs=await out_data.json()
//           console.log('SUCCESS!!',rs);
//         })
//         .catch(function (error) {
//           console.log('FAILURE!!');
//           result={'error':error}
//         });
   
// } catch (error) {
//   console.log(error)
//   result={'error':error}
// }
res.status(200).json(JSON.stringify(result))
}
