import './index.css';
import ProductCard from './components/card/ProductCard';
import { useState, useEffect } from 'react';
import Pokecard from './components/card/PokeCard';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <>

      <Pokecard 
      image={data.sprites?.front_default}
      name={data.name}
      type={data.types?.[0]?.type?.name}
      />
  
      <div className="App">
        {/* {data.title && (
          <ProductCard
            title={data.title}
            price={data.price}
            image={data.image}
            description={data.description}
            category={data.category}
          />
        )} */}
        <ProductCard
          title="iPhone 15 Pro"
          price={5000}
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
          description="Smartphone premium com câmera profissional"
          category="Eletrônicos"
        />
        <ProductCard
          title="MacBook Air"
          price={20000}
          image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
          description="Notebook leve e potente para trabalho" 
          category="Computadores"
        />
        <ProductCard
          title="AirPods Pro"
          price={1500}
          image="https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400"
          description="Fones com cancelamento de ruído ativo de alta qualidade"
          category="Áudio"
        />
      </div>
    </>
  );
}

export default App;
