import "./food-card.css";

const FoodCard = () => {
  return (
    <div>
      <div className="card-food-hover">
        <div className="card-food-hover__content">
          <h3 className="card-food-hover__title">
            Make your <span>choice</span> right now!
          </h3>
          <p className="card-food-hover__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            quisquam doloremque nostrum laboriosam, blanditiis libero corporis
            nulla a aut?
          </p>
          <a href="#" className="card-food-hover__link">
            <span>Learn How</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="card-food-hover__extra">
          <h4>
            Learn <span>now</span> and get <span>40%</span> discount!
          </h4>
        </div>
        <img
          src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default FoodCard;
