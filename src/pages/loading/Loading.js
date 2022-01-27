import React from 'react';

const Loading = () => {
    return (
        <>
            <div className='flex justify-center items-center my-12'>
                    <div class="flex justify-center items-center">
                    <div class="spinner-border animate-spin inline-block text-blue-600 w-8 h-8 border-4 rounded-full" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;