import { useState } from "react";

const CreateGroup = ({storedDetails,setStoredDetails}) => {
  
    const participantslist=[2,3,4,5,6];
    const timeSlots = ["08:00 AM - 09:00 AM","09:00 AM - 10:00 AM","10:00 AM - 11:00 AM","11:00 AM - 12:00 PM","12:00 PM - 01:00 PM","01:00 PM - 02:00 PM","02:00 PM - 03:00 PM","03:00 PM - 04:00 PM","04:00 PM - 05:00 PM","05:00 PM - 06:00 PM"]; 
    const levels=['Easy',"Medium","Hard"];
    const [details,setDetails]=useState({name:"",number:2,tags:"",time:"08:00 AM - 09:00 AM",level:"Easy"});

    const HandleChange=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }

    const AddDetails=(e)=>{
      e.preventDefault();
      if (details.name.trim() === "" ||details.tags.trim() === "" )
      {
          alert("Please fill all fields before submitting.");
          return;
        } 
            const newgroup={
                ...details,
                id:Date.now(),
                tags:details.tags.split(','),
                count:0
            }
            setStoredDetails([...storedDetails,newgroup])
            setDetails({name:"",number:2,tags:"",time:"08:00 AM - 09:00 AM",level:"Easy"})
          }

  return (
     <section className=''>
            <h2 className=''>Create Study Group</h2>  
            <form action="#" className='flex flex-col gap-y-4 px-5'>
              <div className='grid'>
                <label htmlFor="subject">subject :</label>
                <input type="text" placeholder='Subject' id='subject'  value={details.name}  required onChange={HandleChange}  name='name'/>  
              </div>

              <div className='grid'>
                <label htmlFor="participants">Max participants :</label>
                <select   id="participants"  value={details.number}  required  onChange={HandleChange} >
                  {participantslist.map((p,i)=><option key={i} value={p}>{p}</option>)}
                </select>
              </div>
                
              <div className='grid'>
                  <label htmlFor="tags">tags (comma -separated) :</label>
                  <input type="text" placeholder='Tags (Comma Separated)'   id='tags' value={details.tags} required onChange={HandleChange} name='tags' />
                </div>
               <div className='grid'>
                  <label htmlFor="timeslot">time slot :</label>
                  <select  id='timeslot' value={details.time} className="border p-2 rounded w-full" onChange={HandleChange} name='time'>
                    {timeSlots.map((t,i)=>(<option key={i} value={t}>{t}</option>))}
                  </select>
              </div>

              <div className='grid'>
                <label htmlFor="difficulty">difficulty :</label>
                <select name="level" id="difficulty"   value={details.level} required onChange={HandleChange} >
                 {levels.map((l,i)=>(<option key={i} value={l}>{l}</option>))}
                </select>
              </div>

              <button className='create'onClick={AddDetails}>create</button>
            </form>    
    </section>
  )
}

export default CreateGroup
