import React from "react";
import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      <div className="w-1/2 m-auto mt-10 p-5">
        <h1 className="text-3xl font-semibold text-red-400 mb-2">User</h1>
        <div className="flex flex-col mt-5 items-left w-fit text-center">
          <Link className="p-3 bg-red-300 text-xl m-2 transition duration-400 hover:bg-red-500 rounded-lg" to='/user/john'>John</Link>
          <Link className="p-3 bg-red-300 text-xl m-2 transition duration-400 hover:bg-red-500 rounded-lg" to='/user/jack'>Jack</Link>
          <Link className="p-3 bg-red-300 text-xl m-2 transition duration-400 hover:bg-red-500 rounded-lg" to='/user/jimmy'>Jimmy</Link>
        </div>
      </div>
    </div>
  );
}

export default User;
