import {useState} from 'react'

const GroupList = ({storedDetails,setStoredDetails}) => {

     const [search, setSearch] = useState('');
     
     function spotsBtn(detail){
        if(detail.count===0){
              setStoredDetails(prev =>
                    prev.map(group =>
                      group.id === detail.id && group.count < group.number
                        ? { ...group, count: group.count + 1 }
                        : group
                    )
                  );
        }
        else{
            setStoredDetails(prev =>
                    prev.map(group =>
                      group.id === detail.id && group.count < group.number
                        ? { ...group, count: group.count - 1 }
                        : group
                    )
                  );
             }
     
     }
  return (
   
    <section className='w-full '>
        <h2>Study Groups</h2>
          <input type="text" className=''  onChange={(e) =>
              setSearch(e.target.value)} />


          {storedDetails.filter((detail) =>
                detail.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((detail)=>(
                  <div className='flex flex-col border-b gap-y-3 py-2 px-3 ' key={detail.id}>
                    <div className='flex gap-x-5'>
                      <div> 
                         <strong>Subject : </strong> {detail.name}
                      </div>
                      <div className=' bg-gray-500 px-2 rounded text-white'>
                         {detail.count}/{detail.number}
                      </div>
                    </div>

                    <div>
                        <strong>time : </strong>{detail.time}
                    </div>

                    <div className='flex gap-x-4 '> 
                        <strong>tags : </strong>
                         {detail.tags.map((tag,i)=>(<span key={i} className='bg-gray-300 px-4  rounded text-[25px] '> {tag}</span>))}
                    </div>

                    <div>
                         <strong>level : </strong>{detail.level}
                    </div>
                
                    {detail.count===0?
                      (<button className='join'  onClick={()=>{ spotsBtn(detail)}}>Join</button>
                    ):(
                      <button className='leave' onClick={()=>{ spotsBtn(detail)}}>leave</button>)
                    }
                </div>
              ))}
    </section>
  )
}

export default GroupList
