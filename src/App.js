import React from 'react'
import Loading from './components/Loading'
import SetupForm from './components/SetupForm'
import Modal from './components/Modal'
import { useGlobalContext } from "./components/context/Context"

const App = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext
  
  if(waiting){
    return <SetupForm/>
  }
  if(loading){
    return <Loading/>
  }
  return <main>quiz test</main>
}

export default App
