//for cart 
const cartFromCookie = Cookies.get('shopping-cart');
const cartFromLocalStorage = localStorage.getItem('shopping-cart');
//Use the cart from cookies if it exists,otherwise use the cart from local storage 
const initialCart = cartFromCookie && cartFromCookie !== 'undefined' ? JSON.parse(cartFromCookie) : cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];
const [productsInCart, setProducts] = useState(initialCart);
useEffect(() => {
    const cartData = JSON.stringify(productsInCart);
    Cookies.set("shopping-cart", cartData);
    localStorage.setItem("shopping-cart", cartData);
}, [productsInCart]);

GlobalproductsInCart = productsInCart;
const addProductToCart = (product) => { constnewProduct = { ...product, count: 1, }; setProducts([...productsInCart, newProduct,]); };
const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
        constproductsIndex = oldState.findIndex((item) => item.id === productId);
        if (productsIndex !== -1) { oldState[productsIndex].count = count; }
        return [...oldState];
    });
};
GlobalonQuantityChange = onQuantityChange;

constonProductRemove = (product) => {
    setProducts((oldState) => {
        console.log(setProducts)
        const productsIndex = oldState.findIndex((item) => item.id === product.id);
        if (productsIndex !== -1) { oldState.splice(productsIndex, 1); 
        } 
        return [...oldState];
    });
}; GlobalonProductRemove = onProductRemove;