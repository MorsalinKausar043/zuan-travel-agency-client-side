import React from 'react';
import { NavLink } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";
import "../pagination/pagination.css";


const Product = () => {

    const { productData, pageCount,currentPage,setCurrentPage } = useProduct();
    const rating = [4.5];
    const ratings = parseFloat(rating);


    return (
        <>
            <div className="py-10 md:py-20 px-2 md:px-12">
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='text-blue-800 font-semibold'>DESTINATIONS</h4>
                    <h1 className='mt-1 mb-12 text-3xl md:text-4xl'>Travel Most Popular Place</h1>
                </div>
                <div className="flex flex-wrap">
                    {
                        productData.map(crrElm => {
                            const { _id , title, body, price, src} = crrElm;
                            return (
                                <div key={_id} className="flex justify-center m-4 mx-auto">
                                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={src} alt="card_img" />
                                        <div className="p-6 flex flex-col justify-start">
                                            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                                            <p className="text-gray-700  mb-4 text-sm">
                                                {body.slice(0,200)}
                                            </p>
                                            <div className='flex justify-between'>
                                                <p className="text-gray-600 text-xs">
                                                {
                                                [...Array(5)].map((ignore,ind) => { // you just use indice here
                                                return (
                                                    <span key={ind}>
                                                        <i
                                                            style={{color:"rgb(238,129,35)"}}
                                                        className={
                                                        ratings >= ind + 1
                                                        ? 'fas fa-star'
                                                        : ratings >= ind + 0.5
                                                        ? 'fas fa-star-half-alt'
                                                        : 'far fa-star'
                                                        } 
                                                    ></i>
                                                    </span>
                                                )
                                                })
                                            }
                                                </p>
                                                <p className="text-gray-600 text-xs">price:${price}</p>
                                            </div>
                                            <div>
                                                <NavLink to='/' className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-6">Book Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                    <div className="flex justify-center items-center">
                        <Pagination>
                            <PaginationItem ripple="dark">
                                <Icon name="keyboard_arrow_left" />
                            </PaginationItem>
                            {
                                [...Array(pageCount).keys()].map(num => {
                                    return (
                                        <PaginationItem key={num} className={num+1 === currentPage? "pagi_link":''} onClick={() =>setCurrentPage(num+1)} ripple="dark">{num+1}</PaginationItem>
                                    )
                                })
                            }
                            <PaginationItem  ripple="dark">
                                <Icon name="keyboard_arrow_right" />
                            </PaginationItem>
                        </Pagination>                                                                                           
                    </div>
            </div>
        </>
    );
};

export default Product;