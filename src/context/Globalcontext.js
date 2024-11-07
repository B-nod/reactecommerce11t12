import React,{createContext} from 'react'

export const Global = createContext()

const student = {
    name: "Hari Shrestha",
    course: "Front end with react"
}

export const Globalcontext = (props) => {
  return (
    <Global.Provider value={student}>
          {props.children}
    </Global.Provider>
  )
}
