import React from 'react';
import {create} from 'zustand';


const countStore = (set)=>({
    count: 0,
    increment: ()=> {
        set((state)=>({count: state.count+1}))
    },
    decrement: ()=> set((state)=>({count:state.count-1}))
})

const useCountStore = create(countStore);

export default useCountStore;
