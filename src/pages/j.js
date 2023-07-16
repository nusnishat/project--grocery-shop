import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from '../utilities/fakedb';
const useFirebase = () => {      

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect ( ()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
        })
    }, [])

    useEffect(() =>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = []
            for (const key in savedCart){
                const adeedProducts = products.find(product => product._id === key);
                if(adeedProducts){
                    const quantity = savedCart[key];
                    adeedProducts.quantity = quantity
                    storedCart.push(adeedProducts);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) =>{
        let newCart = [];
        const exists = cart.find(pd => pd === product._id);
        if(exists){
            const rest = cart.filter(pd => pd.key !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);

        // add to localStorage
        addToDb(product._id);
    }
    const handleSearch = event =>{
        const searchText = event.target.value ;
        const matchedProducts = products.filter( product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    };

        return {
            products,
            handleAddToCart,
        }
    }
    export default useFirebase;














    import { useEffect, useState } from "react";

const useFirebase = () => {      

    /////////////////////////////////////////////////
    const [products, setProducts] = useState([]);
        useEffect(() => {
            fetch('http://localhost:5000/products')
                .then(res => res.json())
                .then(data => setProducts(data.productsData))
        }, [])

        const handleAddToCart = (product) => {
            const cartProduct = {
                title: product.title,
                imagePath: product.imagePath,
                quantity: product.quantity,
                price: product.price,
                incart: 0
            };
            cartNumbers(cartProduct);
            totalCost(cartProduct);
        }
        // cart numbers
        function cartNumbers(cartProduct) {
            let productNumbers = localStorage.getItem('cartNumbers');
            productNumbers = parseInt(productNumbers);
            if (productNumbers) {
                localStorage.setItem('cartNumbers', productNumbers + 1);

            }
            else {
                localStorage.setItem('cartNumbers', 1);
                // document.querySelector('.cart-items span').textContent = 1;
            }
            setItems(cartProduct);
        }
        // add product into cart
        function setItems(cartProduct) {
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);

            if (cartItems != null) {
                if (cartItems[cartProduct.title] == undefined) {
                    cartItems = {
                        ...cartItems,
                        [cartProduct.title]: cartProduct
                    }
                }
                cartItems[cartProduct.title].incart += 1;
            }
            else {
                cartProduct.incart = 1;
                cartItems = {
                    [cartProduct.title]: cartProduct
                }
            }
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        }
        // calculate total price
        function totalCost(cartProduct) {
            let cartCost = localStorage.getItem('totalCost');
            if (cartCost != null) {
                cartCost = parseInt(cartCost);
                localStorage.setItem('totalCost', cartCost + cartProduct.price);
                // document.querySelector('.cart-price span').textContent = cartCost + cartProduct.price;
            }
            else {
                localStorage.setItem('totalCost', cartProduct.price);
                document.querySelector('.cart-price span').textContent = cartProduct.price;
            }
        }
        return {
            products,
            handleAddToCart,
        }
    }
    export default useFirebase;