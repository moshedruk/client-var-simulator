import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  
  


import { DataStatus, userState } from "../../types/redux";
import { Iuser } from "../../types/user";
  
  const initialState: userState = {
    error: null,
    status :DataStatus.IDLE,    
    user: null  
  };
  
  export const fetchuser = createAsyncThunk(
    "user",
    async (user: { username: string; password: string; organization_name:string;location?:string}, thunkApi) => {
      try {
        const res = await fetch("http://localhost:2211/api/users/register", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (res.status != 200) {
          thunkApi.rejectWithValue("Can't login, please try again");
        }
        const data = await res.json();
        console.log(data)
        // thunkApi.fulfillWithValue(data);
        // localStorage.setItem("Authorization", data.token);
        return data;
      } catch (err) {
        thunkApi.rejectWithValue(`Can't login, please try again${err}`);
      }
    }
  );
  export const getuser = createAsyncThunk(
    "updeteuser",
    async (user: { name: string; rocket: string; }, thunkApi) => {
      try {
        const res = await fetch("http://localhost:2211/api/missiles", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (res.status != 200) {
          thunkApi.rejectWithValue("Can't login, please try again");
        }
        const data = await res.json();
        console.log(data)
        // thunkApi.fulfillWithValue(data);
        // localStorage.setItem("Authorization", data.token);
        
        return data;
      } catch (err) {
        thunkApi.rejectWithValue(`Can't login, please try again${err}`);
      }
    }
  );
  
  
  
  
  const usernSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
      builder
        .addCase(fetchuser.pending, (state) => {
          state.status = DataStatus.LOADING;
          state.error = null;          
        })
        .addCase(fetchuser.fulfilled, (state, action) => {
          state.status = DataStatus.SUCCESS;
          state.error = null;
          state.user= action.payload as unknown as Iuser ;
        })
        .addCase(fetchuser.rejected, (state, action) => {
          state.status = DataStatus.FAILED;
          state.error = action.error as string;          
        }).addCase(getuser.fulfilled, (state, action) => {
            state.status = DataStatus.SUCCESS;
            state.error = null;
            state.user = action.payload as unknown as Iuser ;
        })
    },
  });
  
  export default usernSlice;