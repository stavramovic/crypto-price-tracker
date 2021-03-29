import React from 'react';
import './Coin.css'
import {Container, Row, Col, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Coin = ({ name, image, symbol, price, marketcap, volume, priceChange}) => {
  return (
    <div>
    <Container className='coin-container'>
      <Row className='coin-row'>
        <Col  lg='12' className='coin'>
          <Col  md='1' xs ><Image src={image} alt='crypto'/></Col>
          <Col  lg='2' md='2' xs='3' >{name}</Col>
          <Col  md='1'  className='coin-symbol d-none d-sm-block text-lg-left'>{symbol}</Col>
          <Col lg='2' md='3' sm='2' xs='5' className='text-sm-right text-center'>{price}</Col>
          <Col lg='2' md='3'  className='text-right d-none d-md-block'>{volume.toLocaleString()}</Col>
          {priceChange < 0 ? (
            <Col lg='2' md='3' xs='2' className='red text-center'>{priceChange.toFixed(2)}%</Col>
          ) : (<Col lg='2' md='3' xs='2' className='green text-center'>{priceChange.toFixed(2)}%</Col>)}
          <Col  md='2'  className='d-none d-lg-block text-right'>{marketcap.toLocaleString()}
          </Col>
        </Col>
      </Row>
      </Container>
      </div>
  );
};

export default Coin;



