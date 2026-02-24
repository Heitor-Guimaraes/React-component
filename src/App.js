import './App.css';
import ProductCard from './components/card/ProductCard';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
