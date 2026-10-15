import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export function ShopProvider({ children }) {
const [cart, setCart] = useState(() => {
try {
const saved = localStorage.getItem('amoory_cart');
return saved ? JSON.parse(saved) : [];
} catch {
return [];
}
});

const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
try {
localStorage.setItem('amoory_cart', JSON.stringify(cart));
} catch (e) {
console.error(e);
}
}, [cart]);

const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
setCart(prev => {
const existingIndex = prev.findIndex(
item => item.id === product.id && item.size === selectedSize && item.color === selectedColor
);
if (existingIndex > -1) {
const updated = [...prev];
updated[existingIndex].quantity += quantity;
return updated;
}
return [...prev, { ...product, size: selectedSize, color: selectedColor, quantity }];
});
};

const removeFromCart = (index) => {
setCart(prev => prev.filter((_, i) => i !== index));
};

const updateQuantity = (index, delta) => {
setCart(prev => {
const updated = [...prev];
const newQty = updated[index].quantity + delta;
if (newQty > 0) {
updated[index].quantity = newQty;
}
return updated;
});
};

const clearCart = () => setCart([]);

const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

const openComingSoonModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

return (
<ShopContext.Provider value={{
cart,
addToCart,
removeFromCart,
updateQuantity,
clearCart,
totalCartItems,
cartSubtotal,
isModalOpen,
openComingSoonModal,
closeModal
}}>
{children}
</ShopContext.Provider>
);
}

export const useShop = () => useContext(ShopContext);