import { useDispatch, useSelector } from "react-redux";
import avatar from '../../../assets/imgs/man.png';
import { useState } from "react";
import { uploadProfileImage } from "../../slices/userSlice";


const Profile = () => {
    const currentUser = useSelector(store => store.user.user);
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const handleSubmitImage = async () => {
        console.log('image: ', image);
      
        const userLocal = JSON.parse(localStorage.getItem('user'));
      
        console.log('usertoken: ', userLocal.accessToken);
        console.log('formData: ', image);
      
        const id = currentUser._id;
      
        const formData = new FormData();
        formData.append('fileToUpload', image);
        formData.append('userId', id);
      
        try {
          const response = await fetch('http://localhost:3000/api/user/upload', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
            //   'x-access-token': userLocal.accessToken,
            'Content-type': 'application/json',
            'Authorization': `Bearer ${userLocal.accessToken}`,
            },
            
          });
      
          const result = await response.json();
          if (result.status) {
            dispatch(uploadProfileImage(image));
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        {/* <img src={avatar} alt="Admin"
                            className="rounded-circle" width="150"/> */}
                        <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : avatar }></img>
                        <br />
                        <input type="file" onChange={(e) => setImage(e?.target.files[0])} />
                        <br />
                        <button onClick={handleSubmitImage} className="uploadBtn">upload and Submit</button>
                        <div className="mt-3">
                            <h4>{currentUser?.firstname} {currentUser?.lastname}</h4>

                        </div>
                    </div>
                </div>
            </div>
            <br/>
        
                <div className="card mb-3">
                    <div className="card-header">
                    <h5 className="mb-0">Account Details </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">First Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {currentUser?.firstname}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Last Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {currentUser?.lastname}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {currentUser?.email}
                            </div>
                        </div>
                        <hr/>
                        
                        
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Phone number</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {currentUser?.phone}
                            </div>
                        </div>
                        <hr/>
                        
                        
                    </div>
                </div>
        </>
    );
};

export default Profile;