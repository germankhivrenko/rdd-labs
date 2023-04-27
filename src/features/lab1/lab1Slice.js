import md5 from 'md5'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
}

export const lab1Slice = createSlice({
    name: 'lab1',
    initialState,
    reducers: {
        register: (state, action) => {
            const {username, password} = action.payload
            
            state.users.push({
                username,
                passwordHash: md5(password),
            })
        }
    }
})

export const selectUsers = (state) => state.lab1.users

export const { register } = lab1Slice.actions

export default lab1Slice.reducer
