import { useState,useEffect } from "react";

const AnalyticsDashboard = ({storedDetails}) => {
    let [participents,setParticipants]=useState(0);
    let [avg,setAvg]=useState(0);

    useEffect(()=>{
      let totalParticipents=0;
       let number= storedDetails.map((d)=>d.count)
      number.forEach((n)=>{
       totalParticipents+= n;
       setParticipants(totalParticipents); 
       })
       let average=totalParticipents==0?0:totalParticipents/storedDetails.length;
       setAvg(average.toFixed(1));
    },[storedDetails])

  return (
   <section className=''>
      <h2>Analytics Deshboard</h2> 
      <div>
        <strong> Total Groups :</strong> {storedDetails.length}
      </div>

      <div>
        <strong>Total Participants :</strong> {participents}
      </div>

      <div>
        <strong> group avg : </strong> {avg}
      </div>
  </section>
  )
}

export default AnalyticsDashboard
