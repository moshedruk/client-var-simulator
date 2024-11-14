import React from 'react'
import { useAppSelector } from '../../redux/store';

export default function Realtimedatadefensive() {
  const { myOrg } = useAppSelector((state) => state.organizition);
  return (<div className='main-atackt'>
    organizition : {myOrg?.name}
    <div className='disply'>
      <div className='disply-informtion-missiles'>        
        {myOrg?.resources.map(resource =>{
          return (
            <div className='myMissiles'>
               <button>{resource.name}</button>*
               <button>{resource.amount}</button>
            </div>
          )
        })}
        <button>🚪</button>
      </div>
      <div className='table-ataackt'>
        dfdf
      </div>
    </div>
</div>
    
  )
}
