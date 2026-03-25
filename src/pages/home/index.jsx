import { useContext } from 'react';
import ProductsContext from '../../context';
import ProductItem from '../../components/ProductItem';
import { Container } from '../../components/Container';

function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      <div style={{paddingTop: '2rem', paddingBottom: '4.5rem'}}>
        <img style={{width: '100%'}} src="/src/assets/images/banner.jpg" alt="banner" />
      </div>
      <h2 style={{marginBottom: '2rem'}}>Products</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '8rem', marginBottom: '4rem' }}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default Home;
