import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

import Product from "../../components/Product/Product";
import { UserContext } from "../../context/userContext";
import { LoadingContext } from "../../context/loadingContext";

import { Spin } from "antd";
import api from "../../utils/api";
import style from "./style.module.css";

const ProductPage = () => {
   const [product, setProduct] = useState({});
   const [error, setError] = useState(false);
   const { productId } = useParams();
   const navigate = useNavigate();
   const { handleLikeStatus } = useContext(UserContext);
   const { isLoading, changeIsLoading } = useContext(LoadingContext);

   const onProductLike = () => {
      handleLikeStatus(productId, product.likes)
         .then((updateProduct) => setProduct(updateProduct));
   };

   useEffect(() => {
      changeIsLoading(true);
      api.getProductInfo(productId)
         .then((data) => setProduct(data))
         .catch(() => setError(true))
         .finally(() => changeIsLoading(false));
   }, [])

   return (

      <>
         <u onClick={() => navigate(-1)}>Назад</u>
         {isLoading ? <Spin className={style.spin} /> : error ? <Navigate to="/" replace /> : <Product  {...product} handleLikeStatus={onProductLike}></Product>}
      </>

   );
};

export default ProductPage;





