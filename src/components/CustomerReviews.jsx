import "./CustomerReviews.css";

function CustomerReviews() {
  const reviews = [
    {
      image: "/images/toe.jpg",
      text: "Beautiful design and very comfortable to walk in. The cushioning feels soft on the feet.",
      name: "Fatima",
      product: "COURT SHOES",
    },

    {
      image: "/images/CoutShoe.jpg",
      text: "I am really impressed with the comfort and durability of these Heels",
      name: "Zainab",
      product: "MULE HEELS",
    },

    {
      image: "/images/whitePumps.jpg",
      text: "These pumps are lightweight, comfortable and very trendy.",
      name: "Saba Abbas",
      product: "PUMPS",
    },

    {
      image: "/images/pyramidHeels.jpg",
      text: "The quality exceeded my expectations. The sole is soft and supportive.",
      name: "Humna",
      product: "SHOES",
    },
  ];

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">
        CUSTOMER REVIEWS
      </h2>

      <div className="reviews-rating">
        ★★★★★ 5.00 ★ (8) ✅ Verified
      </div>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              src={review.image}
              alt={review.product}
            />

            <div className="review-content">
              <p>{review.text}</p>

              <div className="stars">
                ★★★★★
              </div>

              <h4>{review.name}</h4>

              <span>{review.product}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;