import React from 'react'
import { useAppSelector } from '../../redux/store';
import '../../css/realtimedataatackt.css'
import { loction_attackt } from '../../enum/enumloctin';

export default function Realtimedataatackt() {
  const { myOrg } = useAppSelector((state) => state.organizition);
  console.log(myOrg)
  return (
    <div className='main-atackt'>
        organizition : {myOrg?.name}
        <div className='disply'>
          <div className='disply-informtion-missiles'>
            <select >
              <option value={loction_attackt.Center}>{loction_attackt.Center}</option>
              <option value={loction_attackt.North}>{loction_attackt.North}</option>
              <option value={loction_attackt.South}>{loction_attackt.South}</option>
              <option value={loction_attackt.WestBank}>{loction_attackt.WestBank}</option>              
            </select>
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
