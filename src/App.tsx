import React, { useEffect, useState } from 'react';
import './App.css';

import { Product } from './types';

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [filter, setFiler] = useState('');
  const [message, setMessage] = useState('');

  const filtredProducts = products.filter(product => product.prod_status.includes(filter))

  useEffect(() => {
    fetch('data/products.json')
    .then(response => response.json())
    .then((data: {[id:number]: Product}) => {
      const filtredData = Object.values(data).filter(product => typeof(product) === 'object');
      setProducts(filtredData);
      setMessage("");
    })
    .catch(err => setMessage("couldn't fetch products"))
  }, [])
  return (
    <div className="App">
      <form>
        <select className='product-select' value={filter} onChange={(e) => setFiler(e.target.value)}>
          <option value=''>Filtruj</option>
          <option value="recommended">Polecane</option>
          <option value="saleout">Wyprzedaż</option>
          <option value="bestseller">Bestseller</option>
          <option value="promotion">Promocja</option>
          <option value="new">Nowy</option>
        </select>
      </form>
      <div className="container">
        {filtredProducts.map((product, key) => {
          const prod_status = product.prod_status.length ? product.prod_status.split(','): [];
          return (
            <div key={key} className="product">
              <div className='absolute'>
                {prod_status.map(status => <div className="status">{status}</div>)}
              </div>
              <div className="image-placeholder">Placeholder</div>
              <div className="text">
                <h4>{product.prod_name}</h4>
                <div className='divider' />
                <div className='prices'>
                  <h4 className='price'>{product.prod_price}zł</h4>
                  {product.prod_oldprice && <h4 className='old_price'>{product.prod_oldprice}</h4>}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {message}
    </div>
  );
}

export default App;
