import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import api from "../api";
import { useAppData } from "../contexts/AppContext";
export default function Dropdown() {
  // const { setDetails } = useContext(AppCOntext);
  const { setDetails } = useAppData();

  const handleDateChange = (event) => {
    console.log("Steve Jobs", event.target.value);
    setDetails((state) => {
      return {
        ...state,
        date: event.target.value,
      };
    });
  };
  const [dates, setDates] = useState([]);
  const fetchDates = async () => {
    try {
      const response = await api.get("/get/date");
      console.log(response.data);
      setDates(response.data.dates);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchDates();
  }, []);
  return (
    <div className="alert alert-warning ">
      <select name="" id="" onChange={handleDateChange}>
        <option value="Total">Total</option>

        {dates.map((element) => {
          return (
            <option value={element}>
              {moment(element).format("MMM Do YY")}
            </option>
          );
        })}
      </select>
    </div>
  );
}
