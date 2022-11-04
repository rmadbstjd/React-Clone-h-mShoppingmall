import React from 'react';
import styles from '../component/ProductDetail.module.css'
const ProductDetail = ({productList,select}) => {
    
        console.log("select",productList[select]);
    
    return (
        <div className={styles.container}>
            <div className={styles.card}><img width={200}src={productList[select]&& productList[select].img}/>
                <div>{productList[select] && productList[select].choice ===true?"cohensive choice":"　"}</div>
                <div>{productList[select]&& productList[select].title}</div>
                <div>{productList[select] && productList[select].price}</div>
                <div>{productList[select] && productList[select].new === true?"신제품":""}</div>
            </div>
        </div>
    );
};

export default ProductDetail;