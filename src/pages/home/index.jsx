import { useContext } from 'react';
import ProductsContext from '../../context';
import ProductItem from '../../components/ProductItem';
import { Container } from '../../components/Container';
import Headline from '../../components/ui/Headline';

function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      <div style={{paddingTop: '2rem', paddingBottom: '4.5rem'}}>
        <img style={{width: '100%'}} src="/src/assets/images/banner.jpg" alt="banner" />
      </div>
      <Headline style={{marginBottom: '3rem'}} title={'Products'}/>
      <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '8rem', marginBottom: '4rem' }}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default Home;
