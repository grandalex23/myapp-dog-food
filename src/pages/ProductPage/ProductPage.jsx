import React, { useEffect, useState, useContext, useCallback } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Spin } from "antd";

import Product from "../../components/Product/Product";
import PageHeader from "../../components/PageHeader/PageHeader";
import { UserContext } from "../../context/userContext";
import { LoadingContext } from "../../context/loadingContext";

import api from "../../utils/api";
import useApi from "../../hooks/useAPI";
import style from "./style.module.css";

const ProductPage = () => {
   // const [product, setProduct] = useState({});
   // const [error, setError] = useState(false);
   const { productId } = useParams();
   const navigate = useNavigate();
   const { handleLikeStatus } = useContext(UserContext);
   // const { isLoading, changeIsLoading } = useContext(LoadingContext);
   const getProductInfo = useCallback(() => api.getProductInfo(productId), [productId])
   const { data: product, setData: setProduct, loading: isLoading, error } = useApi(getProductInfo);

   const onProductLike = () => {
      handleLikeStatus(productId, product.likes)
         .then((updateProduct) => setProduct(updateProduct));
   };

   // useEffect(() => {
   //    changeIsLoading(true);
   //    api.getProductInfo(productId)
   //       .then((data) => setProduct(data))
   //       .catch(() => setError(true))
   //       .finally(() => changeIsLoading(false));// }, [])

   return (
      <>
         <PageHeader title={product?.name} buttonText="Назад" link={"/catalog"}></PageHeader>
         {isLoading ? <Spin className={style.spin} /> : error ? <Navigate to="/" /> : <Product  {...product} handleLikeStatus={onProductLike}></Product>}
      </>

   );
};

export default ProductPage;





