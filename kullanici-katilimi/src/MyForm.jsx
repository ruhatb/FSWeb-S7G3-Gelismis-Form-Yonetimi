
import React, { useState } from "react";

const MyForm = () => {


  const dataForm = {
    name: "",
    mail: "",

    terms: false,
  };

  const [data, setData] = useState(dataForm);

  const handleChange = (e) => {

    const { name, value, checked, type } = e.target;

    setData((yeniData) => ({ ...yeniData, [name]: type === 'checkbox' ? checked : value }));
  };


  
   const handleSubmit = (e) => {
    e.preventDefault(); 
    onData(data); };



  return (



   

      <form id="forum" onSubmit={handleSubmit}>

        <div>
          <label >
            Name:
            <input type="text" name="name" value={data.name} onChange={handleChange} />
          </label>

        </div>

        <div>

          <label >
            Mail:
            <input type="text" name="mail" value={data.mail} onChange={handleChange} />
          </label>

        </div>




        <div>

          <label >
            Terms:
            <input type="checkbox" name="terms" checked={data.terms} onChange={handleChange} />
          </label>

        </div>
           <button type="submit" > Kayıt </button>
      </form>





  );


}



export default MyForm;