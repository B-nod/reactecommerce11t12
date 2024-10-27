import React from 'react'

export const Third = () => {
  return (
    <>
    <table>
        <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        </tr>
        <tr>
            <td>Hello</td>
            <td>world</td>
            <td>hello@gmail.com</td>
        </tr>
       
    </table>
    </>
  )
}

export const Test=()=>{
    return (
        <>
        <form action="">

           <label htmlFor="fname">First Name</label>
           <input type="text" name='fname' id='fname' placeholder='Enter your first name' />
        </form>
        </>

    )
}
