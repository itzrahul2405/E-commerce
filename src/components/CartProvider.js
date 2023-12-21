import { useEffect, useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {

    const productsArr = [
        { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',},
        { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',},
        { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',},
        { title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',},
        { title: "Rock Anthems", price: 90, imageUrl: "https://placekitten.com/300/300",},
        { title: "Bollywood Melodies", price: 80, imageUrl: "https://placekitten.com/301/300", },
        { title: "Jazz Classics", price: 120, imageUrl: "https://placekitten.com/302/300", },
        { title: "Instrumental Bliss", price: 60, imageUrl: "https://placekitten.com/303/300", },
        
        
        ]

    const [cartItems, setCartItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCartHandler = (title) => {
        const targetItem = productsArr.find((item) => item.title === title)

        const existingItem = cartItems.find((item) => item.title === title)

        if(!existingItem){
            setCartItems([...cartItems, {...targetItem, quantity: 1}])

            localStorage.setItem('cartItems', JSON.stringify([...cartItems, {...targetItem, quantity: 1}]));
        }
        else{
            setCartItems(prevItems => prevItems.map((item) => (
                item.title !== title ? item : {...item, quantity: item.quantity + 1}
            )))

            localStorage.setItem('cartItems', JSON.stringify(cartItems.map((item) => ( item.title !== title ? item : {...item, quantity: item.quantity + 1} ))));
        }

        // console.log(cartItems)
        setTotalQuantity(prevQuantity => prevQuantity + 1)
        setTotalPrice(prevPrice => prevPrice + targetItem.price)

        
        localStorage.setItem('totalPrice', totalPrice + targetItem.price);
        localStorage.setItem('totalQuantity', totalQuantity + 1);

    }
   
    
    const removeFromCartHandler = (title) => {
        const existingItem = cartItems.find((item) => item.title === title)
        
        if(existingItem.quantity > 1){
            setCartItems(prevItems => prevItems.map((item) => (
                item.title !== title ? item : {...existingItem, quantity: existingItem.quantity - 1}
            )))
                
            localStorage.setItem('cartItems', JSON.stringify(cartItems.map((item) => (item.title !== title ? item : {...existingItem, quantity: existingItem.quantity - 1} ))));


        }
        else{
            setCartItems(prevItems => prevItems.filter((item) => item.title !== title))

            localStorage.setItem('cartItems', JSON.stringify(cartItems.filter((item) => item.title !== title)));
        }
        
        setTotalQuantity(prevQuantity => prevQuantity - 1)
        setTotalPrice(prevPrice => prevPrice - existingItem.price)
        
        localStorage.setItem('totalPrice', totalPrice - existingItem.price);
        localStorage.setItem('totalQuantity', totalQuantity - 1);
    }


    
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [] ;
        const storedTotalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
        const storedTotalQuantity = JSON.parse(localStorage.getItem('totalQuantity')) || 0 ;
    
        setCartItems(storedCartItems);
        setTotalPrice(storedTotalPrice);
        setTotalQuantity(storedTotalQuantity);
    }, [])



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