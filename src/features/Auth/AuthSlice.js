import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get user from local sy=torage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user:user ? user: null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

// register user
export const register = createAsyncThunk('auth/register',
async(user, thunkAPI)=>{
    try{
        const API_URL = 'http://localhost:5000/api/users'
        //register user
        const response = await axios.post(API_URL, user)
        if(response.data) {
            localStorage.setItem('user',JSON.stringify(response.data))
        }
        return response.data
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
}
)

export const login = createAsyncThunk('auth/login',
async(user, thunkAPI)=>{
    try{
        const API_URL = 'http://localhost:5000/api/users/'
        //register user
        const response = await axios.post(API_URL + 'login', user)
        if(response.data) {
            localStorage.setItem('user',JSON.stringify(response.data))
        }
        return response.data
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
}
)

export const logout  = createAsyncThunk('auth/logout', async(thunkAPI)=>{
    //logout user
    try{
       localStorage.removeItem('user')
    }catch(error){

        return thunkAPI.rejectWithValue('Logout Unsuccessful')
    }
})


export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }

    },
    extraReducers:(builder) => {
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
       
        })
        .addCase(register.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(login.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
       
        })
        .addCase(login.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(logout.fulfilled, (state)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer