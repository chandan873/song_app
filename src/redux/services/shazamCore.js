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
    getTopCharts: builder.query({query: ()=>'/charts/world'}),
    getSongDetails:builder.query({query:({songid})=>`/tracks/details?track_id=${songid}`}),
    getSongRelated:builder.query({query:({songid})=> `/tracks/related?track_id=${songid}`}),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
 })
    })

    export const{
        useGetTopChartsQuery,useGetSongDetailsQuery,useGetSongRelatedQuery,useGetArtistDetailsQuery,useGetSongsByGenreQuery, useGetSongsBySearchQuery,
    }= shazamCoreApi;