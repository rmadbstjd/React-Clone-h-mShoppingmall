import React from 'react';
import styles from './ProductCard.module.css';
import {useNavigate} from 'react-router-dom';
const ProductCard = ({item, auth}) => {
   
    const navigate = useNavigate();
    const handleClick = () => {
        
        navigate(`/product/${item.id}`);
    };
    return (
        <div className={styles.card} onClick={handleClick}>
            <img width={200}src={item && item.img}/>
            <div>{item && item.choice ===true?"cohensive choice":"　"}</div>
            <div>{item && item.title}</div>
            <div>{item && item.price}</div>
            <div>{item && item.new === true?"신제품":""}</div>
            
        </div>
    );
};

export default ProductCard;