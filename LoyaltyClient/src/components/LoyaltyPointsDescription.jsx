import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import { useAppData } from "../contexts/AppContext";
import LoyaltySummaryTable from "./LoyaltySummaryTable";

export default function LoyaltyPointsDescription() {
  const [loyaltySummary, setLoyaltySummary] = useState([]);

  const { details, setShowDescriptionTable } = useAppData();
  console.log("user Details", details);

  async function fetchLoyaltyDetails() {
    console.log("Alaram turing!");
    try {
      const response = await api.get(
        `/get/points/user?name=${details.user}&date=${details.date}`
      );
      console.log(response.data.data);
      setLoyaltySummary(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchLoyaltyDetails();
  }, [details]);

  // console.log(details)
  //{details.user}{details.date}
  return (
    <div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          setShowDescriptionTable(false);
        }}
      >
        X
      </button>
      <h5>Showing results for {details.user}</h5>
      <LoyaltySummaryTable data={loyaltySummary} />
    </div>
  );
}
