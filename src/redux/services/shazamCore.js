import {createApi,fetchBaseQuery}from '@reduxjs/toolkit/query/react'





    export const shazamCoreApi= createApi({
        reducerPath:'shazamCoreApi' ,
        baseQuery:fetchBaseQuery({baseUrl:'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key', '8c48f84185msh3f8b8a7e746f6f1p1b6a24jsnc73357fb6268');

        return headers;
    },
    
    }),
 endpoints: (builder)=>({
    getTopCharts: builder.query({query: ()=>'/charts/world'})
 })
    })

    export const{
        useGetTopChartsQuery,
    }= shazamCoreApi;