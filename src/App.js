import { useState } from "react";
import "./App.css";

function App() {

 const [foamData , setData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  country:"India",
  streetAddress:"",
  city:"",
  state:"",
  postalCode:"",
  Comment:false,
  candidates:false,
  offer:false,
  pustNotification:""
 })
 function changeHandler(event){
    const{name,value,checked,type} = event.target
    setData((prevData) => ({...prevData,[name]:type === "checkbox" ? checked : value}))
 }
 
 function submitHandler(event){
  event.preventDefault();

  console.log("finally printing the foam data")
  console.log(foamData)
 }

  return (
    <div className="flex flex-col items-center mt-2 w-[800px] mx-auto">
      <form onSubmit={submitHandler} className="w-full">
      <label htmlFor="firstName" className="font-bold text-xl">First name </label>
      <br/>
      <input
       type="text"
       id="firstName"
       name="firstName"
       placeholder="mohd"
       value={FormData.firstName}
       onChange={changeHandler}
       className=" w-full p-2 rounded-md border-2 border-gray-600 border-opacity-60 ">

       </input>
        
        <br/><br/>

        <label htmlFor="lastName" className="font-bold text-xl">Last name</label>
        
        <br/>

        <input 
        type="text"
        id="lastName"
        name="lastName"
        placeholder="khizar"
        value={FormData.lastName}
        onChange={changeHandler}
        className="w-full p-2 rounded-md border-2 border-gray-600 border-opacity-60 "></input>

        
        <br/><br/>

        <label htmlFor="email" className="font-bold text-xl">Email</label>

        <br/>

        <input 
        type="email"
        id="email"
        name="email"
        placeholder="abc@gmail.com"
        value={FormData.email}
        onChange={changeHandler}
        className="w-full p-2 rounded-md border-2 border-gray-600 border-opacity-60 "></input>

        <br/>
        <br/>

        <label htmlFor="country" className="font-bold text-xl">Country</label>
        <br/>
        <select
        id="country"
        name="country"
        value={FormData.country}
        placeholder="Select Your Country"
        onChange={changeHandler}
        className="w-full p-2 rounded-md border-2 border-gray-600 border-opacity-60 ">
          <option value="India" >India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>
        <br/>
        <br/>
       

        <label htmlFor="streetAddress" className="font-bold text-xl">Street Adress</label>
        
        <br/>

        <input 
        type="text"
        id="streetAddress"
        name="streetAddress"
        placeholder="B-25C"
        value={FormData.streetAddress}
        onChange={changeHandler}
        className="w-full p-2 rounded-md border-2 border-gray-600 border-opacity-60 "></input>
        <br/>
        <br/>
       

        <label htmlFor="city" className="font-bold text-xl">City</label>
        
        <br/>

        <input 
        type="text"
        id="city"
        name="city"
        placeholder="New Delhi"
        value={FormData.city}
        onChange={changeHandler}
        className="w-full p-2 rounded-md border-2 border-gray-600 border-opacity-60 "></input>
        <br/>
        <br/>
       

        <label htmlFor="state" className="font-bold text-xl">State</label>
        
        <br/>

        <input 
        type="text"
        id="state"
        name="state"
        placeholder="Delhi"
        value={FormData.state}
        onChange={changeHandler}
        className="w-full p-2 rounded-md border-2 border-gray-600 border-opacity-60 "></input>
        <br/>
        <br/>
       

        <label htmlFor="postalCode" className="font-bold text-xl">Postal Code</label>
        
        <br/>

        <input 
        type="text"
        id="postalCode"
        name="postalCode"
        placeholder="110092"
        value={FormData.postalCode}
        onChange={changeHandler}
        className="  w-full p-2 rounded-md border-2 border-gray-600 border-opacity-60 "></input>
        <br/>
        <br/>
        <firldset>
          <legend className="font-bold text-xl">By Email</legend>
        </firldset>
        <br/>
        
        <div className="flex">
        <input
        id="Comment"
        name="Comment"
        type="checkbox"
        checked={FormData.Comment}
        onChange={changeHandler}
        className="w-4 h-4 mx-2"></input>
      
        <div>
          <label htmlFor="Comment" className="font-bold text-xl">Comment</label>
          <p>Get notified when someone post a comment on a posting.</p>
        </div>
        
        </div>
        <br/>
        <div className="flex">
        <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={FormData.candidates}
        onChange={changeHandler}></input>
      
        <div>
          <label htmlFor="candidates" className="font-bold text-xl">Candidtaes</label>
          <p>Get notified when a candidates applies for a job.</p>
        </div>
        
        </div>
        <br/>
        <div className="flex">
        <input
        id="offer"
        name="offer"
        type="checkbox"
        checked={FormData.offer}
        onChange={changeHandler}></input>
      
        <div>
          <label htmlFor="offer" className="font-bold text-xl">Offers</label>
          <p>Get notified when a candidtaes accepts or rejects an offer.</p>
        </div>
        
        </div>
        <br/>
        <fieldset>
          <legend className="font-bold text-xl mb-1">Pust Notification</legend>
          <p className="mb-4">These are delivered via SMS to your mobile phonr.</p>

          <input 
        type="radio"
        id="pushEverything"
        name="pustNotification"
        value="Everything"
        onChange={changeHandler}
        className="mb-4"
        ></input>
        <label htmlFor="pushEverything" className="font-bold text-xl">Everything</label>
        <br/>

        <input 
        type="radio"
        id="pushEmail"
        name="pustNotification"
        value="Same as email"
        onChange={changeHandler}
        className="mb-4"
        ></input>
        <label htmlFor="pushEmail" className="font-bold text-xl ">Same as Email</label>
        <br/>

        <input 
        type="radio"
        id="pustNoting"
        name="pustNotification"
        value="No Push Notificataion"
        onChange={changeHandler}
        className="mb-4"
        ></input>
        <label htmlFor="pustNoting" className="font-bold text-xl ">No Push Notification</label>

        </fieldset>
        <br/>
        <button className="bg-blue-500 text-white rounded-md font-bold py-2 px-4">Save</button>

      </form>
    </div>
  );
}

export default App;
