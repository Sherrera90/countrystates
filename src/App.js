import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function App() {
  const [posts, setPosts] = useState([]);
  // const [selectedState, setSelectedState] = useState([]);

  useEffect(() => {
    axios.get('https://xc-countries-api.fly.dev/api/countries/')
      .then(response => {
        console.log(response.data)
        setPosts(response.data);
        // setSelectedState(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
      const options ={
        name:name,
        id:id,
        code:code
      };
  }, []);

      const handleChange = (event) => {
        console.log('stephanie', event, event.target.value);
        setPosts(event.target.value);
        // setSelectedState(event.target.value);
      };

  return(

    <div>
      <h1> Country and states</h1>
      <button onClick={(e) => handleChange(e)}
      type ='button'> Click for Data</button>
      {setPosts.name && setPosts.map(name =>{
        return <p>{name}</p>
      })}
    </div>

  //   <div>
  //       <label>
  //     <h1>Country and States</h1>
  //       </label>
  //      <select value ={setPosts} onChange ={handleChange}>
  //       <option key={''}>
  //       </option>
  //       </select>
  //   </div>
  );

}











 
//   const [newOption, setNewOption] = useState('Virginia');

//   const handleChange = (event) => {
//     console.log('stephanie', event, event.target.value);
//     setNewOption(event.target.value);
//   };

//   return (
//     <div>
//       <label>
//         <h1> Where Do You Live? </h1>
//         </label>
//       <select value={newOption} onChange ={handleChange}>
//         <option>
//           Georgia
//         </option>
//         <option>
//           Virginia
//         </option>
//         <option>
//           California
//         </option>
//       </select>
    
//        <div>
//         <p> I live in {newOption} </p>
//       </div>
//     </div>
//  );
// }

// export default App;

