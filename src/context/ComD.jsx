import React,{useContext} from 'react'
import { Global } from './Globalcontext'

const ComD = () => {
  const data = useContext(Global)
  console.log(data)
  return (
    <>
    {/* <h1>The programming langauge we are learning is {data}</h1> */}
    <h1>The student name is {data.name}</h1>
    <h1>Course enrolled was {data.course}</h1>

    
    </>
  )
}

export default ComD