
import './App.css';

import MyForm from './MyForm';
import { useState } from 'react';


function App() {

  const [veri , setVeri] = useState([]);

  const veriEkle = (data) => {
    
    setVeri([...veri, data]); };


 






  return (
    <div className='App'>

      <MyForm onSubmit={veriEkle} />



 
      <ul>

        {veri.map((data, i) =>  ( 
        
                            <li key={i}>
                                 Name: {data.name} , 
                                 Email: {data.mail},
                                 Terms: {data.terms ? 'Kabul Edildi' : 'Kabul Edilmedi'}
                            </li>
        ))};


      </ul>
 

     
    </div>
  );
}

export default App;
