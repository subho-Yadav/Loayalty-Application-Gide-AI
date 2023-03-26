import React from "react";
import  { useAppData } from "../contexts/AppContext";
import { useContext } from "react";
export default function UserTable({ users }) {
  const { setShowDescriptionTable, setDetails } = useAppData();
  function handleClick(index) {
    console.log(users[index]);
    setShowDescriptionTable(true);
    setDetails((state) => {
      return {
        ...state,
        user: users[index].user_name,
      };
    });
  }
  // console.log("users",users)
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Id </th>
            <th scope="col">User Name</th>
            <th scope="col">Loyalty Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ user_name, total_loyalty_ponts, user_id }, index) => {
            return (
              <tr
                key={index}
                onClick={() => handleClick(index)}
                style={{ cursor: "pointer" }}
              >
                <th scope="row">{index + 1}</th>
                <td>{user_id}</td>
                <td>{user_name}</td>
                <td>{total_loyalty_ponts}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
