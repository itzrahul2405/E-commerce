import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {

    const productsArr = [
        { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',},
        { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',},
        { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',},
        { title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',}
        ]

    const [cartItems, setCartItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCartHandler = (title) => {
        const targetItem = productsArr.find((item) => item.title === title)

        const existingItem = cartItems.find((item) => item.title === title)

        if(!existingItem){
            setCartItems([...cartItems, {...targetItem, quantity: 1}])
        }
        else{
            setCartItems(prevItems => prevItems.map((item) => (
                item.title !== title ? item : {...item, quantity: item.quantity + 1}
            )))
        }

        // console.log(cartItems)
        setTotalQuantity(prevQuantity => prevQuantity + 1)

        setTotalPrice(prevPrice => prevPrice + targetItem.price)

    }


    const removeFromCartHandler = (title) => {
        const existingItem = cartItems.find((item) => item.title === title)

        if(existingItem.quantity > 1){
            setCartItems(prevItems => prevItems.map((item) => (
                item.title !== title ? item : {...existingItem, quantity: existingItem.quantity - 1}
            )))
        }
        else{
            setCartItems(prevItems => prevItems.filter((item) => item.title !== title))
        }

        setTotalQuantity(prevQuantity => prevQuantity - 1)

        setTotalPrice(prevPrice => prevPrice - existingItem.price)
    }

    const cartContext = {
        items: productsArr,
        cartItems: cartItems,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}


export default CartProvider;