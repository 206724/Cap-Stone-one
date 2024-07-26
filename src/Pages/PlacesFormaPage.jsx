import React, { useEffect } from "react"
import axios from "axios"; 
import { useState } from "react";
import AccountNav from "./AccountNav";
import PhotoUploader from "../PhotoUploader";
import Perks from "./Perks"; 
import { useNavigate, useParams } from "react-router-dom";


export default function PlacesFormPage(){
  const {id} =useParams();
  console.log({id});
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhoto] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  useEffect(() => {
  if(!id) {
    return;
  }
  axios.get('/places/'+id) .then(response => {
const{data} =response
        setTitle(data.title);
        setAddress(data.address);
        setAddedPhoto(data.addedPhotos);
        setDescription(data.description);
        setPerks(data.perks);
        setExtraInfo(data.extraInfo);
        setCheckIn(data.checkIn);
        setCheckOut(data.checkout);
        setMaxGuests(data.maxGuests);
  })
  },[id])

  const navigate = useNavigate();
  
  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addNewPlace(ev){
    ev.preventDefault();
   await axios.post('/places',{
      title,address,addedPhotos,
      description,perks,extraInfo,
      checkIn,checkout,maxGuests

  });
//   setRedirect(true)
// }
// if(redirect) {
//   return <Navigate to ={'/account/places'} />
// }

navigate("/account/places");


  }
  
    return(
     
        <div>
          <AccountNav  />
          <form onSubmit={addNewPlace}>
            {preInput("Title", " title for your place.should be short and catchy as advertisment" )}
            <input type="text" value={title} onChange={(ev) => setTitle(ev.target.value)} placeholder="title,for example: My lovely apt"></input>
            {preInput("Address", "Adress to this place")}
            <input type="text" value={address} onChange={(ev) => setAddress(ev.target.value)}  placeholder="address" />

            {preInput("Photos", "")}

            <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhoto} />

            {preInput("Description", "description of the place")}

            <textarea value={description} onChange={(ev) => setDescription(ev.target.value)} />

            {preInput("Perks", "Select all the perks of your place")}

            <div className="grid mt-2 gap-2 grid-cols-2 md:gird-cols-3 lg:grid-cols-6 ">

            <Perks selected={perks} onChange={setPerks} />

             </div>

                   {preInput("Extra Info", "House rules,etc")}

                   <textarea  value={extraInfo} onChange={(ev) => setExtraInfo(ev.target.value)} />

                  {preInput( "Check in@out times,max guests", 
                   "add check in and out times, remember to have some time window for cleaning the room between guests " )}

            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1 ">Check in time</h3>
                <input type="text" value={checkIn} onChange={(ev) => setCheckIn(ev.target.value)} placeholder="14" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 ">Check Out time</h3>
                <input type="text" value={checkout} onChange={(ev) => setCheckOut(ev.target.value)} placeholder="11" />
              </div>
             <div>
                <h3 className="mt-2 -mb-1 ">Max number of Guests</h3>
                <input type="number" value={maxGuests} onChange={(ev) => setMaxGuests(ev.target.value)} />
             </div>

              <button className="primary my-4">Save</button>
            </div>
          </form>
        </div>
       
    )
}

