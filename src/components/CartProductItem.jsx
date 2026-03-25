import Button from '../components/ui/Button';
import { Container } from '../components/Container';

import { useContext } from 'react';
import ProductsContext from '../context';

function CartProductItem({ product }) {
  const { image, name, price, id } = product;

  const { deleteFromCart } = useContext(ProductsContext);

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'rgba(250, 250, 250, 1)',
          padding: '1.5rem',
          borderRadius: '0.7rem',
          marginBottom: '2rem'
        }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <img src={image} alt={name} style={{ width: '12.5rem' }} />
          <div>
            <span></span>
          </div>
          <div style={{ fontSize: '1.5rem', maxWidth: '20rem' }}>{name}</div>
          <div>
            <div>price:</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{price} €</div>
          </div>
        </div>
        <div>
          <Button onClick={() => deleteFromCart(id)} title={'-'} />
        </div>
      </div>
    </Container>
  );
}

export default CartProductItem;
