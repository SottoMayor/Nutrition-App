import { configureStore, createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name:'posts',
    initialState: {posts: [], loaded: false},
    reducers:{
        addPosts(state, data){
            state.posts = data.payload
        },
        loadedHandler(state){
            state.loaded = true;
        }
    }
})
export const postsActions = postsSlice.actions;

const store = configureStore({
    reducer: postsSlice.reducer
})

export default store;