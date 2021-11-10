import axios from 'axios'
import React,{useState,useContext,useEffect} from 'react'

const table={
    sports:21,
    history:23,
    politics:24
}

const API_ENDPOINT=`https://opentdb.com/api.php?`

const url='';

const tempUrl="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"

const AppContext=React.createContext()

const AppProvider=({children})=>{
    const [waiting,setWaiting]=useState(true);
    const [loading,setLoading]=useState(false);
    const [question,setQuestion]=useState([]);
    const [index,setIndex]=useState(0);
    const [correct,setCorrect]=useState(0);
    const [error,setError]=useState(false);
    const [isModalopen,setIsModalOpen]=useState(false)

    return (
        <AppContext.Provider 
            value={{waiting,loading,question,index,error,correct,isModalopen}}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}