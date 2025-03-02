import React from "react";
import './App.css';

const products = [
  { id: 1, name: "Chandeli Haar", price: "₹4,500", description: "A traditional Kumaoni necklace with intricate designs." },
  { id: 2, name: "Bajuband", price: "₹1,200", description: "Elegant Garhwali armlet for daily wear." },
  { id: 3, name: "Gharwali Thar", price: "₹10,000", description: "A stunning Kumaoni ring perfect for special occasions." },
  { id: 4, name: "Choori", price: "₹800", description: "Classic Garhwali bangles with a modern style." },
  { id: 5, name: "Jhumka", price: "₹1,500", description: "Traditional jhumkas inspired by the beauty of Uttarakhand." },
  { id: 6, name: "Pahadi Har", price: "₹5,000", description: "A beautiful pendant inspired by Kumaoni craftsmanship." },
  { id: 7, name: "Chimti", price: "₹1,000", description: "Delicate silver anklet with a traditional design." },
  { id: 8, name: "Pahari Kalgi", price: "₹7,500", description: "A traditional bracelet with detailed craftsmanship." },
  { id: 9, name: "Dholki Jhumka", price: "₹6,000", description: "Elegant earrings with a royal touch." },
  { id: 10, name: "Moti Mala", price: "₹3,200", description: "A timeless pearl necklace that exudes elegance." },
  { id: 11, name: "Kundal", price: "₹2,000", description: "Simple yet elegant nose ring, traditional Kumaoni design." },
  { id: 12, name: "Kundan Haar", price: "₹8,000", description: "A stunning Kundan choker inspired by Garhwali heritage." },
  { id: 13, name: "Lal Chhura", price: "₹4,000", description: "A beautiful Kumaoni ring symbolizing purity." },
  { id: 14, name: "Kamaal Bangle", price: "₹500", description: "Handcrafted copper bangles with Garhwali design." },
  { id: 15, name: "Aadab Pendant", price: "₹6,500", description: "A mesmerizing pendant with a sapphire stone from Kumaon." },
  { id: 16, name: "Shree Vishnu Earrings", price: "₹3,000", description: "Gorgeous earrings inspired by Garhwali art." },
  { id: 17, name: "Muthir Chain", price: "₹8,000", description: "A luxurious gold chain perfect for any occasion." },
  { id: 18, name: "Chimti Kundan", price: "₹1,800", description: "Stylish silver cufflinks with Kumaoni design." },
  { id: 19, name: "Jhanda Necklace", price: "₹2,500", description: "A trendy necklace inspired by Garhwali designs." },
  { id: 20, name: "Mali Kundan Ring", price: "₹12,000", description: "An elegant Kundan ring for special occasions." },
  { id: 21, name: "Moti Pendant", price: "₹3,500", description: "A unique pendant made of pearls and inspired by Pahari art." },
  { id: 22, name: "Brahmani Ear Cuffs", price: "₹2,800", description: "Traditional ear cuffs that complement any attire." },
  { id: 23, name: "Kalpana Anklet", price: "₹6,200", description: "A delicate gold anklet with Pahadi craftsmanship." },
  { id: 24, name: "Chandani Necklace", price: "₹7,000", description: "A sparkling crystal necklace with Kumaoni design." },
  { id: 25, name: "Vishal Brooch", price: "₹1,500", description: "A vintage brooch with Pahadi design." },
  { id: 26, name: "Kesar Earrings", price: "₹2,200", description: "Sophisticated earrings with a soft, elegant look." },
  { id: 27, name: "Pahari Pendant Set", price: "₹9,000", description: "A matching set of pendant and earrings, traditional design." },
  { id: 28, name: "Kailash Ring", price: "₹4,800", description: "A bold onyx ring with Garhwali influences." },
  { id: 29, name: "Rangil Diamond", price: "₹7,000", description: "Elegant diamond earrings with Kumaoni design." },
  { id: 30, name: "Chandni Wooden Bracelet", price: "₹600", description: "Rustic wooden bracelet crafted in Uttarakhand." },
  { id: 31, name: "Brahma Necklace", price: "₹3,000", description: "A stunning citrine necklace with Pahari influences." },
  { id: 32, name: "Moonlight Earrings", price: "₹2,700", description: "Enchanting earrings with moonstone for a mystical look." }
];

function ProductShowcase() {
  return (
    <div className="product-showcase">
      <h2>Featured Products</h2>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={`./product-${product.id}.jpg`} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>{product.price}</strong></p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase;
