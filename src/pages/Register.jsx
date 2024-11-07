import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import {Helmet} from "react-helmet";


const Register = () => {
  return (
    <>
 <Helmet>
        <title>Estore|Register</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
     <h1 className='text-center font-bold text-3xl my-5'>Registration Form</h1>
    <Formik
    initialValues={{fname:"", lname:"", email:"", password:"", cpwd:""}}
    validationSchema={Yup.object({

        fname:Yup.string()
        .matches(/^([a-zA-Z])+$/, "Only contains alphabets")
        .max(20,"not more than twenty character")
        .required("First name is mandotary"),

        lname:Yup.string()
        .matches(/^([a-zA-Z])+$/, "Only contains alphabets")
        .max(20,"not more than twenty character")
        .required("Last name is mandotary"),

        email:Yup.string()
        .email("Invalid email")
        .required("Email is mandotary"),

        password:Yup.string()
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%*!]).{8,30}$/, `weak password. must contain one uppercase, lowercase, number and special character`)
        .required("Password is mandotary"),

        cpwd:Yup.string()
        .required("Confirm password is mandotary")
        .oneOf([Yup.ref('password'), null], "Must match with password")

    })}
    >
       

        <div className="flex justify-center items-center flex-col">
    
            <Form className='mb-10 p-4 space-y-5 w-[60%] border shadow-sm'>
                <div className="mb-2">
                    <label htmlFor="fname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>First Name</label>
                    <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="fname" name="fname" placeholder="Enter your first name" type="text" />
                    <ErrorMessage name='fname'>
                        {mgs=>(<div style={{color:'red'}}>{mgs}</div>)}
                    </ErrorMessage>
                </div>
                <div className="mb-2">
                    <label htmlFor="lname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Last Name</label>
                    <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="lname" name="lname" placeholder="Enter your last name" type="text" />
                    <ErrorMessage name='lname'>
                        {mgs=>(<div style={{color:'red'}}>{mgs}</div>)}
                    </ErrorMessage>
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                    <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" type="email" name="email" placeholder="xyz@gmail.com" />
                    <ErrorMessage name='email'>
                        {mgs=>(<div style={{color:'red'}}>{mgs}</div>)}
                    </ErrorMessage>
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                    <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password"
                    type="text" 
                    name="password"
                     placeholder="*****" />
                    <ErrorMessage name='password'>
                        {mgs=>(<div style={{color:'red'}}>{mgs}</div>)}
                    </ErrorMessage>
                </div>
             
                <div className="mb-2">
                    <label htmlFor="cpwd" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Confirm Password</label>
                    <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="cpwd"
                    type="text" 
                    name="cpwd"
                     placeholder="*****" />
                    <ErrorMessage name='cpwd'>
                        {mgs=>(<div style={{color:'red'}}>{mgs}</div>)}
                    </ErrorMessage>
                </div>
                <div className="mb-5">
                    <button className='bg-blue-500 text-white py-2 px-10 rounded-lg'>Submit</button>
                </div>

            </Form>
        </div>
    </Formik>
    </>
  )
}

export default Register