import {useState} from 'react'

const GroupList = ({storedDetails,setStoredDetails}) => {
     const [search, setSearch] = useState('');
  return (
   
    <section className='w-full'>
        <h2>Study Groups</h2>
          <input type="text" className=''  onChange={(e) =>
              setSearch(e.target.value)} />
              <div className='py-3 px-5'>
              {storedDetails.filter((detail) =>
                      detail.name.toLowerCase().includes(search.toLowerCase())
                  ).map((detail)=>(
                      <div className='flex flex-col border-b py-2 px-3 ' key={detail.id}>
                          <div>Subject : {detail.name} <span>{detail.count}/{detail.number}</span></div>
                          <div>Time : {detail.time}</div>
                          <div className='flex gap-x-4 '> Tags :
                               {detail.tags.map((tag,i)=>(<div key={i} className='bg-gray-300 px-4 py-1 tags'> {tag}</div>))}
                          </div>
                          <div>Level : {detail.level}</div>
                       
                      {detail.count==0?<button className='join'  onClick={()=>{ 
                         setStoredDetails(prev =>
                        prev.map(group =>
                          group.id === detail.id && group.count < group.number
                            ? { ...group, count: group.count + 1 }
                            : group
                        )
                      );}}>Join</button>:<button className='leave' onClick={()=>{ 
                         setStoredDetails(prev =>
                        prev.map(group =>
                          group.id === detail.id && group.count < group.number
                            ? { ...group, count: group.count - 1 }
                            : group
                        )
                      );}}>leave</button>}
                    </div>
                  ))}
              </div>
    </section>
  )
}

export default GroupList
