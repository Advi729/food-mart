import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../../assets/imgs/man.png';
import { useState } from 'react';
import { uploadProfileImage } from '../../slices/userSlice';

const Profile = () => {
  const currentUser = useSelector((store) => store.user.user);
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
          Authorization: `Bearer ${userLocal.accessToken}`,
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
      <div className="ml-7 mb-4 min-w-0 flex justify-center">
        <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          User Profile
        </h3>
      </div>

      <div className="flex justify-center">
        <div className="w-full mb-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="mt-4 flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              alt="Posts"
              width="200px"
              height="200px"
              src={image ? URL.createObjectURL(image) : avatar}
            ></img>

            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {currentUser?.firstname} {currentUser?.lastname}
            </h5>
            {/* <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
            <div className="flex mt-4 space-x-3 md:mt-6">
              {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> */}
              <input
                type="file"
                onChange={(e) => setImage(e?.target.files[0])}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              />
            </div>
            <button
              onClick={handleSubmitImage}
              className="mt-3 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Upload Photo
            </button>

            <dl className="py-5 max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  First Name
                </dt>
                <dd className="text-lg font-semibold">
                  {currentUser?.firstname}
                </dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Last Name
                </dt>
                <dd className="text-lg font-semibold">
                  {currentUser?.lastname}
                </dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  E-mail
                </dt>
                <dd className="text-lg font-semibold">{currentUser?.email}</dd>
              </div>
              <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Phone number
                </dt>
                <dd className="text-lg font-semibold">{currentUser?.phone}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
