const orderButtons = document.querySelectorAll('.order-btn');
        const popup = document.getElementById('popup');
        const productName = document.getElementById('product-name');
        const productPrice = document.getElementById('product-price');
        
        // Open the popup when "Order Now" button is clicked
        orderButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productCard = event.target.closest('.product-card');
                const product = productCard.getAttribute('data-product');
                const price = productCard.getAttribute('data-price');

                // Set the order details in the popup
                productName.textContent = product;
                productPrice.textContent = price;

                // Show the popup
                popup.classList.remove('hidden');
            });
        });

        // Close the popup when the close button is clicked
        function closePopup() {
            popup.classList.add('hidden');
        }
// let orders = [];

// // Add item to the cart
// function addToCart(productName) {
//     orders.push(productName);
//     alert(`${productName} added to your orders!`);
// }

// // Show the order popup
// document.getElementById('view-orders').addEventListener('click', () => {
//     const orderList = document.getElementById('order-list');
//     orderList.innerHTML = '';

//     if (orders.length === 0) {
//         orderList.innerHTML = '<li>No orders yet!</li>';
//     } else {
//         orders.forEach((order) => {
//             const li = document.createElement('li');
//             li.textContent = order;
//             orderList.appendChild(li);
//         });
//     }

//     document.getElementById('order-popup').classList.remove('hidden');
// });

// // Close the order popup
// function closePopup() {
//     document.getElementById('order-popup').classList.add('hidden');
// }





// Add item to the cart

// let orders = [];

// // Add item to the cart
// function addToCart(productName) {
//     orders.push(productName);
//     alert(`${productName} added to your orders!`);
// }

// // Show the order popup
// document.getElementById('view-orders').addEventListener('click', () => {
//     const orderList = document.getElementById('order-list');
//     orderList.innerHTML = '';

//     if (orders.length === 0) {
//         orderList.innerHTML = '<li>No orders yet!</li>';
//     } else {
//         orders.forEach((order) => {
//             const li = document.createElement('li');
//             li.textContent = order;
//             orderList.appendChild(li);
//         });
//     }


//     document.getElementById('order-popup').classList.remove('hidden');
// });

// // Close the order popup
// function closePopup() {
//     document.getElementById('order-popup').classList.add('hidden');
// }

import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ytm-KSW69jXfYKOwYEJRmG-c9LPHpjg",
  authDomain: "assigment-c7954.firebaseapp.com",
  projectId: "assigment-c7954",
  storageBucket: "assigment-c7954.appspot.com",
  messagingSenderId: "923240176390",
  appId: "1:923240176390:web:e9393a300ab2bc874c1c87",
  measurementId: "G-XXPHFQL9Z7",
  databaseURL: "https://assigment-c7954-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Select the form
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Save the message to Firebase
  saveMessages(name, email, message);

  form.reset();
  alert("Your message has been submitted!");
});

function saveMessages(name, email, message) {
  const contactFormRef = ref(database, "hackathon");
  const newMessageRef = push(contactFormRef); 

  // Save data to Firebase
  set(newMessageRef, {
    name: name,
    email: email,
    message: message,
    timestamp: new Date().toISOString(),
  });
}