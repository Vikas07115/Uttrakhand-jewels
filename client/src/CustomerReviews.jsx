import React from "react";
import "./App.css";

const reviews = [
  {
    name: "Aditi Sharma",
    review:
      "Absolutely love the traditional designs! The craftsmanship is exceptional. This jewelry piece is a perfect blend of modern and ethnic.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/1.jpg", // Replace with actual image
  },
  {
    name: "Rahul Verma",
    review:
      "I bought a necklace for my wife. She loved it! The detailing is just amazing, and the quality is superb.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual image
  },
  {
    name: "Sneha Kapoor",
    review:
      "Beautiful craftsmanship, truly Uttarakhand's heritage. I can feel the tradition and beauty in every piece I wear.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/3.jpg", // Replace with actual image
  },
  {
    name: "Priya Singh",
    review:
      "The jewelry pieces are unique and stunning! I purchased a pair of earrings, and they are so light yet beautifully made.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/4.jpg", // Replace with actual image
  },
  {
    name: "Vikram Yadav",
    review:
      "Amazing collection! The bracelet I got is exactly what I was looking for. It's elegant and perfect for festive occasions.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/3.jpg", // Replace with actual image
  },
  {
    name: "Ravi Mehta",
    review:
      "I bought a set of traditional rings for my sister. She is thrilled with the quality and beauty. Excellent craftsmanship!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/4.jpg", // Replace with actual image
  },
  {
    name: "Maya Patel",
    review:
      "I have never seen such intricate work before. Every piece feels special, and I adore the traditional charm they carry.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/5.jpg", // Replace with actual image
  },
  {
    name: "Karan Desai",
    review:
      "The jewelry collection is truly beautiful, with such fine detailing. Bought a pendant for my wife; she loves it.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/5.jpg", // Replace with actual image
  },
  {
    name: "Neha Gupta",
    review:
      "This jewelry is not just beautiful, it’s an art form. Each piece tells a story of culture and heritage. Truly unique!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/6.jpg", // Replace with actual image
  },
];

function CustomerReviews() {
  return (
    <div className="customer-reviews">
      <h2>What Our Customers Say</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <img
                src={review.img}
                alt={review.name}
                className="profile-img"
              />
              <h4>{review.name}</h4>
            </div>
            <p>"{review.review}"</p>
            <div className="stars">
              {"⭐".repeat(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
