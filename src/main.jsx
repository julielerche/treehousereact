import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { useState } from 'react';

function Header({title, itemTotal}) {
    return (
        <header>
            <h1>{title}</h1>
            <span className='total-items'>Items: {itemTotal.length}</span>
        </header>
    )
}

const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item' onClick={() => props.removeItem(props.id)}/>
            <span className='item-name'>{props.itemName}</span>
            <Counter />
        </div>
    )
}

const Counter = () => {
    const [itemQuantity, setQuantity] = useState(0)

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decrementQuantity = () => {
        if (itemQuantity > 0) {
            setQuantity(itemQuantity => itemQuantity - 1)
        }
    }

    return (
        <div className='quantity'>
                <span className='qty-label'>QTY</span>
                <button className='increment' onClick={incrementQuantity}>+</button>
                <button className='decrement' onClick={decrementQuantity}>-</button>
                <span className='quantity-amount'>{itemQuantity}</span>
            </div>
    )
}

const App = () => {
const [items, setItems] = useState([
    {
      name: "Apples",
      id: 1
    },
    {
      name: "Bananas",
      id: 2
    },
    {
      name: "Box of Pasta",
      id: 3
    },
    {
      name: "Cookies",
      id: 4
    }
  ]);

  const handleRemoveItem = (id) => {
    setItems(prevItems => prevItems.filter( item => item.id !== id))
  }

    return (
        <div className='grocery-list'>
            <Header title='Grocery List' itemTotal={items.length}  />
            {/* Grocery LIst */}
            {items.map(item =>
                <Item 
                itemName={item.name} 
                key={item.id}
                id={item.id}
                removeItem={handleRemoveItem}
                />
            )}
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    <App />
    </StrictMode>
);