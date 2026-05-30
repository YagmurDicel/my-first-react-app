import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Counter from './Counter';

function App() {
  // Sadece bu satır kalmalı, düz "const count = 0" satırını sildik.
  const [count, setCount] = useState(24);

  return (
    <div>
      <h1>{count}</h1>
      {/* Doğru kumanda kullanımı (setCount) */}
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <Counter />
    </div>
  );
}

export default App;
