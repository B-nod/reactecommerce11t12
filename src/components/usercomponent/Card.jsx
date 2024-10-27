import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const{id,title,image,price, category}=props.data
    return (
        <>

<div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl moving-shadow" >
        <Link to="#">
            <img src={image}
                    alt="Product" class="h-80 w-72 object-fit rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">{category}</span>
                <p class="text-lg font-bold text-black truncate block capitalize">{title}</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">${price}</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto">
                        <Link to={`/productdetail/${id}`}>
                        <button type="button" class="txt-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View Detail</button>
                        </Link>
                       </div>
                </div>
            </div>
        </Link>
    </div>
            


{/* 
                <div className="w-[23%] h-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-md shadow-cyan-500 my-5">
                    <div className="card-img h-[250px]">
                    <Link to="#">
                        <img className="rounded-t-lg object-fit shadow-md shadow-cyan-200 w-full h-full" src={image} alt="" />
                    </Link>

                    </div>
                    
                    <div className="p-5">
                        <Link to="#">
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rs. {price}</p>
                        <Link to={`/productdetail/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View Detail
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>

                 */}



               



              



            
        </>
    )
}

export default Card