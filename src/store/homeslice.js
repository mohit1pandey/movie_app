// create a slice to setup redux store
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    url:{},
    genres:{}
}

const homeSlice= createSlice({
    name:'counter',
    initialState:initialState,

    reducers :{


        getAPIconfiguration: (state,action)=>{
            // immer is working under the hood
            state.url=action.payload;
        },

        getGeneres: (state,action)=>{
            state.genres= action.payload;
        }
    }

}   
)


export default homeSlice.reducer;
export const {getAPIconfiguration,getGeneres} = homeSlice.actions;