import React, { useState } from 'react';
import "../styles/Cart.css"
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import Confetti from 'react-confetti';

const CartComponent = ({cartItems, setCartItems}) => {

  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const confettiConfig = {
  };

  const triggerConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 3000);
  };

  const handleBuyAll = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, buy all!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        triggerConfetti();
        Swal.fire({
          title: "Bought!",
          text: "Your items have been purchased.",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your items are still in the cart :)",
          icon: "error"
        });
      }
    });
  };

  const handleDeleteAll = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete all!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems([]);
        Swal.fire({
          title: "Deleted!",
          text: "Your items are deleted.",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your items are still in the cart :)",
          icon: "error"
        });
      }
    });
  };


    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.amount, 0);
        return totalPrice.toFixed(2);
      };

      const handleIncreaseQuantity = (itemId) => {
        const itemIndex = cartItems.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
          const updatedCartItems = [...cartItems];
          updatedCartItems[itemIndex] = {
            ...updatedCartItems[itemIndex],
            amount: Math.max(updatedCartItems[itemIndex].amount + 1, 0)
          };
          setCartItems(updatedCartItems);
        }
      };

      const handleDecreaseQuantity = (itemId) => {
        const itemIndex = cartItems.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
          const updatedCartItems = [...cartItems];
          updatedCartItems[itemIndex] = {
            ...updatedCartItems[itemIndex],
            amount: Math.max(updatedCartItems[itemIndex].amount - 1, 0)
          
        }
        if (updatedCartItems[itemIndex].amount === 0){
          updatedCartItems.splice(itemIndex, 1);
        }
        setCartItems(updatedCartItems);
      }
      };

      

      const handleDeleteItem = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
      };

      const handleDeleteItemConfrim = (itemId) => {
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete item!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            handleDeleteItem(itemId);
            Swal.fire({
              title: "Deleted!",
              text: "Your item is deleted.",
              icon: "success"
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              title: "Cancelled",
              text: "Your item is still in the cart :)",
              icon: "error"
            });
          }
        });
      };
      
  return (
    <div className='cart-container'>
      {isConfettiActive && <Confetti {...confettiConfig} />}
        <h1 className='cart-headline'>Bag</h1>
        <hr className='cart-line'></hr>
        {cartItems.length === 0 ? (
      <p className='empty-cart-message'>There are no items in the cart.</p>
    ) : (
      <>
                {cartItems.map(item =>(
                            <li key={item.id} className='cart-items'>
                                <img className='cart-image' src={item.image} alt='1'/>
                                <div className='cart-item-box1'>
                                    <h2 className='cart-item-name'>{item.name}</h2>
                                    <p className='cart-item-size'>Size: {item.size}</p>
                                </div>
                                <div className='cart-item-box2'>
                                    <h2 className='cart-item-description'>Text</h2>
                                    <p className='cart-item-description-text'>{item.text}</p>
                                </div>
                                <div className='cart-item-button-container'>
                                    <button className='cart-item-button' onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                    <p className='cart-item-number'>{item.amount}</p>
                                    <button className='cart-item-button' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                </div>
                                <p className='cart-item-delete' onClick={() => handleDeleteItemConfrim(item.id)}>Delete</p>
                                <p className='cart-item-price'>{item.price}$</p>
                            </li>
                            ))}
                            </>)}
        <hr className='cart-line'></hr>
        <div className='cart-checkout-container'>
            <button className='cart-checkout-delete' onClick={handleDeleteAll}>Delete All</button>
            <p className='cart-checkout-total'> Total price: <span className='cart-checkout-total-price'>{calculateTotalPrice()}$</span> </p>
            <button className='cart-checkout-buy' onClick={handleBuyAll}>Buy All</button>
        </div>
    </div>
  )
}

export default CartComponent