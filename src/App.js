import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [currentCountry, setCurrentCountry] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://xc-countries-api.fly.dev/api/countries/')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleChange = (event) => {
    console.log('stephanie', event, event.target.value);
    setCurrentCountry(event.target.value);
  };
  return (
    <div>
      <label>
        <h1> Where Do You Live? </h1>
      </label>
      <select onChange={handleChange}>
        {countries.map((country) => {
          return <option>{country.name}</option>;
        })}
      </select>

      <div>
        <p> I live in {currentCountry} </p>
      </div>
    </div>
  );
}

export default App;

  //   <div>
  //       <label>
  //     <h1>Country and States</h1>
  //       </label>
  //      <select value ={setPosts} onChange ={handleChange}>
  //       <option key={''}>
  //       </option>
  //       </select>
  //   </div>











 
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

