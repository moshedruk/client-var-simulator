import { createSlice } from "@reduxjs/toolkit"
import { eventState } from "../../types/redux"


const initialState:eventState ={
    _id: null,
    nameattack: null,
    location: null,
    namerocket: null,
    time: null,
    status: "launched",
  } 
  
  const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
      timer(state) {
        state.time =  -1
      },
      
    },
  })
  
  export const {timer } = eventSlice.actions
  export default eventSlice