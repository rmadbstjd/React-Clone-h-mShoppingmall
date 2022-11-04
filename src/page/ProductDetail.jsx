import React,{useEffect, useState} from 'react';
import { Container, Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import styles from '../component/ProductDetail.module.css'
const ProductDetail = () => {
    let {id} = useParams();
    const [product,setProduct] =useState('');
    const getProductDetail = async() => {
        let url=`http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data= await response.json();
        console.log(data.size);
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    },[]);
        
    //{productList.map((item) => <Col lg={3}><ProductCard item={item} auth={auth} select={select} setSelect={setSelect} /></Col>)}
    return (
      <Container className={styles.container}>
        <Row>
            <Col xs={6}>
                <img src={product && product.img}/>
            </Col>
            <Col>
                <div>{product && product.title}</div>
                <div>{product && product.price}</div>
                <div>
                    <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
                        {product && product.size.map((item) => <Dropdown.Item href="#/action-1">{item}</Dropdown.Item> )}

                    </DropdownButton>
                </div>
                <div>
                    <Button variant="primary">장바구니에 담기</Button>
                </div>
               
            </Col>
            
        </Row>
      </Container>
    );
};

export default ProductDetail;