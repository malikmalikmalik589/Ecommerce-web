import React from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useContext } from 'react'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { useParams } from "react-router-dom";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
