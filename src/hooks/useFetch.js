//this is a custom hook file for fetching an API

import { useState,useEffect } from "react";
import { fetchDataFromAPI } from "../utils/api";


import React from 'react'

const useFetch = (url) => {

    const[loading,setLoding] = useState(null);
    const[data,setData]=useState(null);
    const[error,setError]=useState(null);

    useEffect(()=>{
        setLoding("loading.... ... .. .");
        setData(null);
        setError(null);

        fetchDataFromAPI(url)
        .then((res)=>{
            setLoding(false);
            setData(res);
        })
        .catch((error)=>{
            setLoding(false);
            setError("something went wrong")
        })

        // new url call again useEffect
    },[url])


  return (
    {data,loading,error}
  )
}

export default useFetch;