import { configureStore, createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name:'posts',
    initialState: {posts: []},
    reducers:{
        addPosts(state, payload){
            state.posts = payload
        }
    }
})
export const postsActions = postsSlice.actions;

const store = configureStore({
    reducer: postsSlice.reducer
})

export default store;