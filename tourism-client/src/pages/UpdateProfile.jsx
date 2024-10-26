import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { user, createUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.username;
    const photoUrl = data.photoUrl;
    const password = data.password;
    updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photoUrl})
      .then((result) => {
        toast.success("Updated successfully!");
        navigate('/profile');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="px-10 py-10">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center">Update</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Username
            </label>
            <input
              type="text"
              defaultValue={user.displayName}
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="photourl" className="block ">
              Photo URL
            </label>
            <input
              type="text"
              defaultValue={user.photoURL}
              name="photoUrl"
              id="photoUrl"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              {...register("photoUrl", { required: true })}
            />
            {errors.photoUrl && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 font-bold">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
