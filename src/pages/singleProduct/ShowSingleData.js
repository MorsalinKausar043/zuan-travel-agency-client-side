import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowSingleData = ({ title, body, src, price, rating , category, location }) => {
    return (
        <>
            {/* <!-- component --> */}
                <section class="bg-white dark:bg-gray-800 py-4 md:py-16 lg:py-20">
                    
                        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                            <div class="w-full lg:w-1/2">
                                <div class="lg:max-w-lg">
                                    <h1 class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                                        {title}
                                    </h1>
                                    
                                    <div class="mt-8 space-y-5">
                                        <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                                <span class="mx-2 text-md">{body}</span>
                                        </p>

                                        <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                            <span class="mx-2">category: {category}</span>
                                        </p>

                                        <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                            <span class="mx-2">Location: {location}</span>
                                        </p>
                                
                                        <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                            <span class="mx-2">Cost: ${price}</span>
                                        </p>
                                
                                        <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                            {
                                            [...Array(5)].map((ignore, ind) => { 
                                                const ratings = parseFloat(rating);
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
                                    </div>
                                </div>
                            </div>
                    
                            <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={`data:image/png;base64,${src}`}altalt="glasses photo"/>
                            </div>
                        </div>
                    </section>

                    <div class="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
                        <div class="lg:w-72 px-6 lg:px-0">
                            <div class="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
                                <div class="flex flex-wrap items-center justify-between">
                                    <NavLink to="/dashboard" class="flex items-center flex-1 w-0">
                                        <span class="flex p-2 bg-blue-800 rounded-lg">
                                            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.12954 3.00772C5.48563 2.38457 6.14831 2 6.86603 2H17.134C17.8517 2 18.5144 2.38457 18.8704 3.00772L20.0133 5.00772C20.6612 6.14163 20.0618 7.51107 18.9235 7.89532C18.9276 7.97661 18.9269 8.0591 18.9209 8.14249L18.0638 20.1425C17.989 21.1891 17.1181 22 16.0689 22H7.9311C6.88182 22 6.01094 21.1891 5.93618 20.1425L5.07904 8.14249C5.07308 8.0591 5.07231 7.97661 5.07645 7.89531C3.93813 7.51105 3.33874 6.14162 3.98668 5.00772L5.12954 3.00772ZM7.07396 8L7.28824 11H16.7117L16.926 8H7.07396ZM7.71681 17L7.9311 20H16.0689L16.2831 17H7.71681ZM18.2768 6L17.134 4L6.86603 4L5.72317 6H18.2768Z" fill="currentColor"></path>
                                            </svg>

                                        </span>

                                        <p class="ml-3 font-medium tracking-wide text-white truncate">
                                            Go DashBoard
                                        </p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default ShowSingleData;