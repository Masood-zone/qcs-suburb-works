import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import Spinner from "../../../components/spinner";

function NewCity() {
  const [cityData, setCityData] = useState({
    cityName: "",
    suburb: ""
  });
  const { cityName, suburb } = cityData;
  const SuburbSelector = () => {
    const data = [
      {
        id: 1,
        suburb: "Northridge"
      },
      {
        id: 2,
        suburb: "Morningstar"
      },
      {
        id: 3,
        suburb: "Pond"
      },
      {
        id: 4,
        suburb: "Schmedeman"
      },
      {
        id: 5,
        suburb: "Jenna"
      },
      {
        id: 6,
        suburb: "Declaration"
      },
      {
        id: 7,
        suburb: "Arapahoe"
      },
      {
        id: 8,
        suburb: "Nova"
      },
      {
        id: 9,
        suburb: "Onsgard"
      },
      {
        id: 10,
        suburb: "Atwood"
      }
    ];
    return (
      <select
        value={suburb}
        onChange={(e) => setCityData({ ...cityData, suburb: e.target.value })}
        className="border-2 border-neutral-300 py-2 rounded-md"
      >
        <option value="">Select a Suburb</option>
        {data.map((suburb) => {
          return (
            <>
              <option key={suburb.id} value={suburb.suburb}>
                {suburb.suburb}
              </option>
            </>
          );
        })}
      </select>
    );
  };
  const handleChange = (e) => {
    setCityData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };
  const onAddNewTable = () => {
    console.log(cityData);
  };
  return (
    <div className="flex flex-col max-w-md h-lg mx-auto shadow-xl rounded-md mt-5 overflow-hidden">
      <div className="bg-blue-500 text-white w-full py-0 px-5">
        <h1 className="text-2xl font-medium">Add a City</h1>
      </div>
      <form className="w-full px-5 flex flex-col justify-start">
        <div className="my-3">
          <label htmlFor="cityName" className="flex flex-col">
            City Name:
            <input
              type="text"
              id="cityName"
              name="cityName"
              className="px-2 py-2 bg-blue-200 rounded-md my-5"
              value={cityName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="my-1">
          <label htmlFor="cityName" className="flex flex-col">
            Suburb:
            <SuburbSelector />
          </label>
        </div>
        <button
          type="button"
          className="bg-blue-600 text-white py-2 rounded-md disabled:bg-blue-400 text-lg my-3"
          disabled={!cityName}
          onClick={() => onAddNewTable()}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default NewCity;
