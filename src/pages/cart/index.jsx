import { useContext } from 'react';
import ProductsContext from '../../context';
import CartProductItem from '../../components/CartProductItem';
import { Container } from '../../components/Container';

function Cart() {
  const { cartData } = useContext(ProductsContext);

  const totalPrice = cartData.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <Container>
      <h2 style={{ marginBottom: '2rem' }}>Cart</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10rem' }}>
        <div style={{ margin: '5rem 0', width: '100%' }}>
          {cartData.length > 0 ? (
            <div>
              {cartData.map((product) => (
                <CartProductItem key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <h2>Cart is empty</h2>
          )}
        </div>

        <div
          style={{
            margin: '5rem 0',
            maxWidth: '20rem',
            backgroundColor: 'rgba(250, 250, 250, 1)',
            padding: '2rem',
            borderRadius: '0.7rem',
          }}>
          <h2>Total:</h2>
          <ul>
            {cartData.map((item) => {
              return (
                <li key={item.id} style={{ marginBottom: '1rem', marginTop: '2rem' }}>
                  {item.name}
                </li>
              );
            })}
          </ul>
          <p>price:</p>
          <p style={{fontSize: '1.5rem', fontWeight: '700'}}>{totalPrice.toFixed(2)} €</p>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
