
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss'
import Coin from './Coin';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [currency, setCurrency] = useState('usd');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency='+currency+'&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, [currency]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='coin-search'> 
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
          
          <select className='currencyBar' 
            value={currency}
            onChange={(e) => {
            const selectedCurrency = e.target.value;
            setCurrency(selectedCurrency);
          }}>
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='gbp'>GBP</option>
           </select>
         
        </form>
      </div>
      <Container className='coinInfo'>
        <Row className='coinInfoPos'>
          <Col lg='12' className='infoData'>
            <Col md='1' sm='1' xs='3' className='pr-md-0 pr-5'></Col>
            <Col md='1' sm='5' xs='3' className='text-left ml-sm-0 pl-sm-3'>Name</Col>
            <Col md='2' sm     xs='1'></Col>
            <Col lg='2' md='3' sm='3' xs='4' className='text-right pr-md-3 pr-sm-4'>Price&nbsp;({currency})</Col>
            <Col lg='2' md='3' className='d-none d-md-block pl-lg-4 pl-md-5 '>Volume</Col>
            <Col lg='2' md='3' sm='2' className='d-none d-sm-block  pr-md-3 pr-sm-4'>24h</Col>
            <Col lg='2' className='d-none d-lg-block pr-1'>Market&nbsp;cap</Col>
          </Col>
        </Row>
         </Container>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}


export default App;

 





 






