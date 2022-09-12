import logo from './logo.svg';
import './App.css';
import Cart from './Cart';

const items = [
  { id: 1, name: 'Apple 🍏', price: 1.5, qty: 1 },
  { id: 2, name: 'Orange 🍊', price: 1.8, qty: 1 },
  { id: 3, name: 'Banana 🍌', price: 1.4, qty: 1 },
]

function App() {
  return (
    <Cart initialItems={items} />
  );
}

export default App;
