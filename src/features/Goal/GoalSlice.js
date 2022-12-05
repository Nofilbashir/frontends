import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    goals : {
        RevenueGraph:[['Date',"Revenue"],["2020-11-01",0,0]],
        NoOfRidesGraph:[['Date',"No of Rides"],["2020-11-01",0]],
        LocationAndRevenue:[['Location',"Total Revenue"],["2020-11-01",0]],
        LocationAndRides:[["ID","No of Rides","Total Distance","Location","Revenue"],["Dra",0,0,"DRAMMEN",0]],
        PeakDays: [["Day","No of Rides"],["Sunday",0]["Saturday",0],["Monday",0],["Tuesday",0],["Wednesday",0],["Thursday",0],["Saturday",0]],
        Co2Saved:[["Date","CO2 Saved"],["2020-11-01",0]],
        FuelAndTreesGraph:[["Date","CO2 Saved", "Trees Relaxed"],["2020-11-01",0,0]],
        ACC_data:{ totalCost: 0, totalRides: 0, totalDistance: 0,Num_of_users: 0, totaCo2Saved:0,totalFuelSaved:0,totalTreesRelaxed:0 }
    },
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:'',
}



// create new goal
export const createGoal = createAsyncThunk('goals/create', async(goalData, thunkAPI)=>{

    try{
        const API_URL = 'http://localhost:5000/api/goals/'
        const token =await thunkAPI.getState().auth.user.token
        const config = {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
        const response = await axios.post(API_URL, goalData, config)
   
        return response.data

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})


// Get User Goals
export const getGoals = createAsyncThunk('goals/getAll', async(_, thunkAPI)=>{

    try{
        const API_URL = 'http://localhost:5000/api/goals/'
        const token = thunkAPI.getState().auth.user.token
        const config = {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
        const response = await axios.get(API_URL, config)
   
        return response.data

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})



// Get Demo Data
export const getDemoData = createAsyncThunk('goals/demoData', async(_, thunkAPI)=>{

    try{
        const API_URL = 'http://localhost:5000/api/goals/demo'
        // const token = thunkAPI.getState().auth.user.token
        // const config = {
        //     headers:{
        //         Authorization:`Bearer ${token}`
        //     }
        // }
        // const response = await axios.get(API_URL, config)
        const response = await axios.get(API_URL)
        console.log("respon",response)
        return response.data

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})




//delete Goal
export const deleteGoal = createAsyncThunk('goals/deleteGoal', async(goalId, thunkAPI)=>{

    try{
        const API_URL = 'http://localhost:5000/api/goals/'+ goalId
        const token = thunkAPI.getState().auth.user.token
        const config = {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
        const response = await axios.delete(API_URL,config)
   
        return response.data

    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})
















export const goalSlice = createSlice({
    name:'goal',
    initialState,
    reducers:{
        reset: (state)=> initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createGoal.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createGoal.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.goals.push(action.payload)
        })
        .addCase(createGoal.rejected, (state, action)=>{
            state.isLoading = false
            state.isError=true
            state.message = action.payload
        })


        .addCase(getGoals.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getGoals.fulfilled, (state, action)=>{
            state.isSuccess = true
            state.goals = action.payload
            state.isLoading = false
        })
        .addCase(getGoals.rejected, (state, action)=>{
            state.isLoading = false
            state.isError=true
            state.message = action.payload
        })

        .addCase(deleteGoal.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(deleteGoal.fulfilled, (state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.goals=state.goals.filter((goal)=>goal._id!== action.payload._id)
        })
        .addCase(deleteGoal.rejected, (state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            
        })

        .addCase(getDemoData.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getDemoData.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.goals = action.payload
        })
        .addCase(getDemoData.rejected, (state, action)=>{
            state.isLoading = false
            state.isError=true
            state.message = action.payload
        })
    }
})


export const {reset} = goalSlice.actions
export default goalSlice.reducer