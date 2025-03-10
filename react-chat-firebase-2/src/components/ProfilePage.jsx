import React, { useState } from 'react';

import { getApp } from "firebase/app";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; 
import { updateProfile } from 'firebase/auth'
import { getDatabase, ref as dbRef, set as firebaseSet} from 'firebase/database';

export default function ProfilePage(props) {
  const { currentUser } = props;
  //convenience
  const displayName = currentUser.userName;

  const [imageFile, setImageFile] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(currentUser.userImg) //initial URL

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = async (event) => {
    console.log("Uploading", imageFile);

    //upload the image
    const storage = getStorage(getApp(), "gs://info340-media.firebasestorage.app")
    const imageRef = storageRef(storage, "demo/userImages/"+currentUser.uid+".png");
    await uploadBytes(imageRef, imageFile);
    const publicURL = await getDownloadURL(imageRef);

    // const reader = new FileReader(); 
    // reader.onload = function (e) { 
    //    //get the read file (read as dataURL and get its url 
    //    const dataUrl = e.currentTarget.result 
    
    //    //you can put this data url into the firebase db 
    //    //firebaseSet(imgRef, dataUrl) 
    //    console.log(dataUrl);
    // } 
    
    // //call this function to read the file (and trigger the above callback)
    // reader.readAsDataURL(imageFile) //initiate the reader

    await updateProfile(currentUser, {photoURL: publicURL})
    console.log("done");
    //firebaseSet(imageUrlRef, publicURL )
    const imageDbRef = dbRef(getDatabase(), 'favoriteImageUrl')
    firebaseSet(imageDbRef, publicURL);

  }

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <p className="mb-2"><img src={imageUrl} alt="user avatar preview"/></p>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}