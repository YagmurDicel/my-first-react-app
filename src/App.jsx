import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import TodoList from './TodoList';
import CharacterCounter from './CharacterCounter';
import Login from './Login';
import Register from './Register';
import { Route, BrowserRouter, Routes } from "react-router-dom"; 

function App() {
  const [count, setCount] = useState(24);

  return (
    // DÜZELTME: BrowserRouter'ı en dışa aldık, böylece içindeki her şeyi koruma altına aldı!
    <BrowserRouter>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Artır</button>
        <Counter />
        <TodoList />
        <CharacterCounter />
        
        <hr style={{ margin: "40px 0", borderColor: "#ccc" }} />
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;