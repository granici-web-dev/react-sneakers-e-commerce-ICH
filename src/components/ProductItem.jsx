import Button from '../components/ui/Button'

import { useContext } from 'react';
import ProductsContext from '../context';

function ProductItem({ product }) {
  const { addToCart } = useContext(ProductsContext);
  const { image, name, price } = product;

  return (
    <div
      style={{
        padding: '2.5rem',
        border: '2px solid rgba(0, 0, 0, 0.15)',
        borderRadius: '2.5rem',
        maxWidth: '24rem',
      }}>
      <div>
        <img src={image} alt={name} style={{ width: '280px' }} />
      </div>
      <h6 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '2.5rem' }}>{name}</h6>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p
            style={{
              fontSize: '0.9rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              color: 'rgba(102, 102, 102, 1)',
            }}>
            price:
          </p>
          <h5 style={{ fontSize: '1.5rem' }}>{price} €</h5>
        </div>
        <div>
          <Button onClick={() => addToCart(product)} title={'+'} />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;