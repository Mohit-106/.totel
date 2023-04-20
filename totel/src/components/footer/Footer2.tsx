import React from "react";

export const Footer2 = () => {
  return (
    <div className="grid py-4 grid-col-2">
      <div className="">
        <div className="grid grid-cols-2 p-4 bg-white rounded-md">
            <div>
                <p>1% of the industry</p>
            </div>
            <div>
                
            </div>
        </div>
      </div>
       <div>
       <form className="">
        <p>Subscribe to our newsletter</p>
        <div className="grid grid-cols-2 p-4 bg-white rounded-md">
          <input
            type="text"
            className="block w-full px-4 py-2 leading-normal border-gray-300 rounded-md appearance-none focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter your Email here"
          />
          <button
            type="submit"
            className="px-4 py-2 ml-2 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};
