import { useEffect,useState } from "react";

const useProduct = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const size = 10;

    useEffect(() => {
        fetch(`http://localhost:5000/product?currentPage=${currentPage > 0 ? currentPage-1 : setCurrentPage(pageCount+1)}&&size=${size}`)
            .then(res => res.json())
            .then((data) => {
                setProductData(data.products)
                setIsLoading(true)
                setPageCount(Math.ceil(data.count / size));
            }).finally(() => setIsLoading(false))
    }, [currentPage]);
    return {
        productData,
        isLoading,
        pageCount,
        currentPage,
        setCurrentPage
    }
};

export default useProduct;