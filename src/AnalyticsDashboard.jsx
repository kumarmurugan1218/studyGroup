import { useState,useEffect } from "react";

const AnalyticsDashboard = ({storedDetails}) => {
    let [participents,setParticipants]=useState(0);
    let [avg,setAvg]=useState(0);

    useEffect(()=>{
      let c=0;
       let number= storedDetails.map((d)=>d.count)
      number.forEach((n)=>{
       c+= n;
       setParticipants(c); 
       })
       let average=c==0?0:c/storedDetails.length;
       setAvg(average.toFixed(1));
    },[storedDetails])
  return (
   <section className=''>
       <h2>Analytics Deshboard</h2> 
       <div>Total Groups : <span>{storedDetails.length}</span></div>
       <div>Total Participants : <span>{participents}</span> </div>
       <div>group avg :  <span>{avg}</span> </div>
    </section>
  )
}

export default AnalyticsDashboard
