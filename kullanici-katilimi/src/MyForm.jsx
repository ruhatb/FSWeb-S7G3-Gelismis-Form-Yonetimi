
import React, { useState } from "react";

const MyForm = (props) => {


  const dataForm = {
    name: "Kullanıcı Adı",
    mail: "kullanici@mail.com",

    terms: true
  };

  const [data, setData] = useState(dataForm);

  const handleChange = (e) => {

    const { name, value, checked, type } = e.target;

    setData((yeniData) => ({ ...yeniData, [name]: type === 'checkbox' ? checked : value }));
  };


  /*
   const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(data); 
*/


  return (



    <div className="orm">

      <form >

        <div>
          <label htmlFor="html ">
            Name:
            <input type="text" name="name" value={data.name} onChange={handleChange} />
          </label>

        </div>

        <div>

          <label htmlFor="mail">
            Mail:
            <input type="text" name="mail" value={data.mail} onChange={handleChange} />
          </label>

        </div>




        <div>

          <label htmlFor="html">
            Terms:
            <input type="checkbox" name="terms" checked={data.terms} onChange={handleChange} />
          </label>

        </div>
           <button type="submit" > Kayıt </button>
      </form>



    </div>


  );


}


export default MyForm;