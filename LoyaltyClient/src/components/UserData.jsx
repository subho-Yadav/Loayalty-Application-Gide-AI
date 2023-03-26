import React, { useContext } from "react";

import UserTable from "./UserTable";
import  { useAppData } from "../contexts/AppContext";
import LoyaltyPointsDescription from "./LoyaltyPointsDescription";

export default function UserData() {
  const appData = useAppData();
  // console.log({appData})
  const { users, showDescriptionTable } = appData;
  // showDescriptionTable,setShowDescriptionTable

  return (
    <div>
      <h1>Top 3 users according to Loyalty points</h1>
      {users.length > 0 ? (
        <UserTable users={users} />
      ) : (
        <h3 className="alert alert-danger">No records found!</h3>
      )}
      {showDescriptionTable && <LoyaltyPointsDescription />}
    </div>
  );
}
