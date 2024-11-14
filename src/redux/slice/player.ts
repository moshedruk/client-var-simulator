import { createSlice } from "@reduxjs/toolkit";
import { playerState, playerStatus } from "../../types/redux";



const initialState:playerState ={
    position: null
  } 
  
  const positionPlayerSlice = createSlice({
    name: 'positionplayer',
    initialState,
    reducers: {
      incattackt(state) {
        state.position =playerStatus.attack
      },
      decprotection(state) {
        state.position =playerStatus.protection
      },      
    },
  })
  
  export const { incattackt, decprotection } = positionPlayerSlice.actions
  export default positionPlayerSlice