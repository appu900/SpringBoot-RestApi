import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const UpdatePage = () => {
  const naviagte = useNavigate();
  const data = useSelector((state) => state.update);
  const requestedUser = data[data.length - 1];
  const id = requestedUser.id;

  // console.log(requestedUser);
  // console.log(requestedUser.id);
  // console.log(data);

  const [userData, setUserData] = useState({
    userName: requestedUser.userName,
    name: requestedUser.name,
    email: requestedUser.email,
  });

  const onSubmit = async () => {
    try {
      // console.log(userData);
      const response = await axios.put("http://localhost:5000/user/" + id,userData);
      console.log(response);
      toast.success("userData update done", {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
      });
      naviagte("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4 bg-white  justify-center w-[200px] ml-5 mt-4">
        <span
          onClick={(e) => naviagte("/")}
          className="mt-1 hover:scale-110 cursor-pointer "
        >
          <ion-icon name="arrow-back"></ion-icon>
        </span>
        <p>Back to admin page</p>
      </div>

      {/* form  sectionn for update page  */}

      <div className="w-full h-[500px]  flex justify-center">
        <div className="w-[360px] bg-white">
          {/* fullname update section */}
          <div className="text-left mt-24">
            <p className="mb-2 text-gray-600 text-[16px] font-semibold">
              Fullname
            </p>
            <input
              value={userData.userName}
              onChange={(e) => {
                setUserData({ ...userData, userName: e.target.value });
              }}
              type="text"
              className="outline-none border w-full border-gray-600 p-2 rounded-md tracking-wide text-black font-semibold focus:ring "
            />
          </div>

          {/* user name update section */}

          <div className="text-left mt-5">
            <p className="mb-2 text-gray-600 text-[16px] font-semibold">
              Username
            </p>
            <input
              value={userData.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
              type="text"
              className="outline-none border w-full border-gray-600 p-2 rounded-md tracking-wide text-black font-semibold focus:ring "
            />
          </div>

          <div className="text-left mt-5">
            <p className="mb-2 text-gray-600 text-[16px] font-semibold">
              email
            </p>
            <input
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              type="text"
              className="outline-none border w-full border-gray-600 p-2 rounded-md tracking-wide text-black font-semibold focus:ring "
            />
          </div>

          <button
            onClick={onSubmit}
            className="w-full bg-black rounded-md p-3 mt-9 text-white active:bg-slate-800"
          >
            Update Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
