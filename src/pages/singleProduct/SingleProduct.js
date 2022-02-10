import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Loading from '../loading/Loading';
import Navbar from "../navbar/Navbar";
import ShowSingleData from './ShowSingleData';

const SingleProduct = () => {

    const { AllproductData, isLoading } = useProduct();
    const { _id } = useParams()
    

    return (
        <>
            <Navbar />
            {
                isLoading ?
                    <Loading />
                    :
                    AllproductData.filter(crrElm => crrElm._id === _id).map(data => <ShowSingleData key={data._id} {...data}/>)
            }
        </>
    );
};

export default SingleProduct;