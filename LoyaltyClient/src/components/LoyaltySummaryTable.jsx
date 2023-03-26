import React from 'react'

export default function LoyaltySummaryTable({data}) {
    console.log(data)
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Activity</th>
      <th scope="col">Total Loyalty Points</th>
    </tr>
  </thead>
  <tbody>
    {/* Object { user_name: "Sonu", activity: "user_quick_profi", total_loyalty_ponts: 50 } */}
    
    {
         data.length>0 ? data.map(({activity,total_loyalty_ponts},index)=>{
            return     <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{activity}</td>
            <td>{total_loyalty_ponts}</td>
          </tr>
      
        }):
       <tr>No records found!</tr>
    }
  </tbody>
</table>
    </div>
  )
}
