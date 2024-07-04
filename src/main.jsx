import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { useState } from 'react';

const items = [
    {
      name: "Apples",
      quantity: 5,
      id: 1
    },
    {
      name: "Bananas",
      quantity: 7,
      id: 2
    },
    {
      name: "Box of Pasta",
      quantity: 1,
      id: 3
    },
    {
      name: "Cookies",
      quantity: 12,
      id: 4
    }
  ]

function Header({title, itemTotal}) {
    return (
        <header>
            <h1>{title}</h1>
            <span className='total-items'>Items: {itemTotal.length}</span>
        </header>
    )
}

const Item = ({itemName}) => {
    return (
        <div className='item'>
            <button className='remove-item' />
            <span className='item-name'>{itemName}</span>
            <Counter />
        </div>
    )
}

const Counter = () => {
    const [itemQuantity, setQuantity] = useState(0)

    const incrementQuantity = () => {
        console.log("hi, from inside incrementQuantity")
    }

    return (
        <div className='quantity'>
                <span className='qty-label'>QTY</span>
                <button className='increment'>+</button>
                <button className='decrement'>-</button>
                <span className='quantity-amount'>{itemQuantity}</span>
            </div>
    )
}

const App = ({initalList}) => {
    return (
        <div className='grocery-list'>
            <Header title='Grocery List' itemTotal={initalList}  />
            {/* Grocery LIst */}
            {initalList.map(item =>
                <Item 
                itemName={item.name} 
                key={item.id}
                />
            )}
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    <App initalList={items} />
    </StrictMode>
);