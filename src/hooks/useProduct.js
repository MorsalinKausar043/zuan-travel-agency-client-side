import { useEffect,useState } from "react";

const useProduct = () => {
    const [productData, setProductData] = useState([]);
    const [AllproductData, setAllProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const size = 10;

    useEffect(() => {
        fetch(`https://nameless-mesa-53109.herokuapp.com/product?currentPage=${currentPage > 0 ? currentPage-1 : setCurrentPage(pageCount+1)}&&size=${size}`)
            .then(res => res.json())
            .then((data) => {
                setProductData(data.products)
                setIsLoading(true)
                setPageCount(Math.ceil(data.count / size));
            }).finally(() => setIsLoading(false))
    }, [currentPage]);

    useEffect(() => {
        fetch(`https://nameless-mesa-53109.herokuapp.com/product`)
            .then(res => res.json())
            .then((data) => {
                setAllProductData(data.products)
                setIsLoading(true)
            }).finally(() => setIsLoading(false))
    }, []);

    return {
        productData,
        isLoading,
        pageCount,
        currentPage,
        setCurrentPage,
        AllproductData
    }
};

export default useProduct;