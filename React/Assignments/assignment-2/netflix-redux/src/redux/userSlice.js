import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:'user',
    initialState: {
        name: '',
        email: '',
        pass: ''
    },
    reducers: {
        addUser: (state, action) => {           
            return {
                name: action.payload.name,
                email: action.payload.email,
                pass: action.payload.pass
            };
        },
        removeUser: (state, action) => {
            return {
                name: '',
                email: '',
                pass: ''
            }
        }
    },
})

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;