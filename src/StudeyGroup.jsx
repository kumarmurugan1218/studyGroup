import  {  useState } from 'react'
import AnalyticsDashboard from './AnalyticsDashboard';
import GroupList from './GroupList';
import CreateGroup from './CreateGroup';

const StudeyGroup = () => {
    const [storedDetails,setStoredDetails]=useState([]);    
  


  return (
    <>
    <h1 className=''>Study Group Scheduler</h1>
    <CreateGroup storedDetails={storedDetails} setStoredDetails={setStoredDetails}/>
    <GroupList storedDetails={storedDetails} setStoredDetails={setStoredDetails} />
    <AnalyticsDashboard  storedDetails={storedDetails}  />
    </>
  )
}

export default StudeyGroup
