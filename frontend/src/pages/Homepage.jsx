import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import lootieAnimation from "../animate.json";
import axios from "axios";
import StudentInfo from "../components/StudentInfo";
import { toast } from "react-toastify";

const Homepage = () => {
  const [usersInfo, setUsersInfo] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    name: "",
    email: "",
  });

  const loadUserfromdb = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user");
      console.log(response.data);
      setUsersInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUserfromdb();
  }, []);

  async function onRegister() {
    try {
      if (user.userName && user.email && user.name) {

        const response = await axios.post("http://localhost:5000/user", user);
        await toast.success("registration done", {
            position: "top-right",
            autoClose: 1000,
            theme: "colored",
          });
        console.log(response);
        setUser({
            userName:'',
            name:'',
            email:''
        })

      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex">
      {/* first section for form */}

      <div className="w-[40%] h-screen bg-white bordern px-[8%] top-0 sticky">
        <div className=" w-full text-left mt-32">
          <p className="text-2xl font-semibold text-gray-700">
            Student Registration Portal !
          </p>
        </div>

        <div className="mt-10">
          {/* for user fullname */}
          <div className="text-left mt-5">
            <p className="mb-2 text-gray-600 text-[16px] font-semibold">
              Fullname
            </p>
            <input
              value={user.userName}
              onChange={(e) => {
                setUser({ ...user, userName: e.target.value });
              }}
              type="text"
              className="outline-none border w-full border-gray-600 p-2 rounded-md tracking-wide text-black font-semibold focus:ring "
              placeholder="jhon derr"
            />
          </div>

          {/* for user username */}

          <div className="text-left mt-5">
            <p className="mb-2 text-gray-600 text-[16px] font-semibold">
              username
            </p>
            <input
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              type="text"
              className="outline-none border w-full border-gray-600 p-2 rounded-md tracking-wide text-black font-semibold focus:ring"
              placeholder="jhon derr"
            />
          </div>

          {/* for email */}

          <div className="text-left mt-5">
            <p className="mb-2 text-gray-600 text-[16px] font-semibold ">
              email
            </p>
            <input
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              type="text"
              className="outline-none border w-full border-gray-600 p-2 rounded-md tracking-wide text-black font-semibold focus:ring"
              placeholder="jhon derr"
            />
          </div>

          <div>
            <button
              onClick={onRegister}
              className="w-full bg-black rounded-md p-3 mt-9 text-white active:bg-slate-800"
            >
              Add student
            </button>
          </div>
        </div>
      </div>

      {/* second section for user information */}

      <div className="w-[60%] bg-[#F9F9F9] text-gray-700 overflow-y-scroll  px-10 py-5">
        {/* header section */}
        <div className="flex justify-between items-center ">
          <p className="text-[18px] font-semibold">Students Information</p>
          <button
            onClick={loadUserfromdb}
            className="px-4 py-2 rounded-md bg-black text-white active:scale-95"
          >
            refresh
          </button>
        </div>

        <div className="">
          {usersInfo.map((user) => (
            <StudentInfo
            id={user.id}
            fullname={user.userName}
            name={user.name}
            email={user.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
