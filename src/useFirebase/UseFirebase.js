import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToDb, clearTheCart, getStoredCart } from '../utilities/fakedb';
const useFirebase = () => {      

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    let navigate = useNavigate();
        useEffect(() => {
            fetch('http://localhost:5000/products')
                .then(res => res.json())
                .then(data => setProducts(data.productsData))
        }, [])

    useEffect(() =>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = []
            for (const key in savedCart){
                const adeedProducts = products.find(product => product._id === key);
                if(adeedProducts){
                    const productQuantity = savedCart[key];
                    adeedProducts.productQuantity = productQuantity;
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
            exists.productQuantity = exists.productQuantity + 1;
            newCart = [...rest, product];
        }
        else{
            product.productQuantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);

        // add to localStorage
        addToDb(product._id);
        window.location.reload(false);
    }
    const handleSearch = event =>{
        const searchText = event.target.value ;
        const matchedProducts = products.filter( product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    };
    const handleCheckout = () =>{
        clearTheCart()
        alert('Your order is placed!Thank you!');  
        navigate('/');
        window.location.reload(false);
    }

        return {
            products,
            handleAddToCart,
            cart,
            handleCheckout
        }
    }
    export default useFirebase;


