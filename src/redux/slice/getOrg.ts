import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  
  

import { Iorganizition } from "../../types/organizition";
import { DataStatus, orgState } from "../../types/redux";
  
  const initialState: orgState = {
    status: DataStatus.IDLE,
    error: null,    
    org: [],
    myOrg: null,
  };
  
  export const fetchgetOrganizition = createAsyncThunk(
    "get/organizition",
    async (org: { position: string|null; }, thunkApi) => {
      try {
        const res = await fetch("http://localhost:2211/api/Organiztions", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(org),
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
  export const fetchgetOrganizitionbyID = createAsyncThunk(
    "get/organizition/id",
    async (org: { name: string; }, thunkApi) => {
      try {
        const res = await fetch("http://localhost:2211/api/Organiztions/id", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(org),
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
  
  
  
  const organizitionSlice = createSlice({
    name: "organizition",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<orgState>) => {
      builder
        .addCase(fetchgetOrganizition.pending, (state) => {
          state.status = DataStatus.LOADING;
          state.error = null;          
        })
        .addCase(fetchgetOrganizition.fulfilled, (state, action) => {
          state.status = DataStatus.SUCCESS;
          state.error = null;
          state.org = action.payload as unknown as Iorganizition[];
        })
        .addCase(fetchgetOrganizition.rejected, (state, action) => {
          state.status = DataStatus.FAILED;
          state.error = action.error as string;
          state.org = [];
        }).addCase(fetchgetOrganizitionbyID.fulfilled, (state, action) => {
            state.status = DataStatus.SUCCESS;
            state.error = null;
            state.myOrg = action.payload as unknown as Iorganizition;
        })
    },
  });
  
  export default organizitionSlice;