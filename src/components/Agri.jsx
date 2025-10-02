import React from "react";
import "./Agri.css";

import special from "../assets/special.png"
import eco from "../assets/eco.png"
import who from "../assets/who.png"
import farmer from "../assets/farmer.jpg"

export default function FarmingSection() {
  return (
    <section className="farming-section">
      <div className="farming-container">
        {/* Left: Image */}
        <div className="farming-image">
           <img src={farmer} alt="eco farm" className="" />
          <div className="harvest-card">
            *435+ <br />
            <span>Growth Tons of Harvest</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="farming-content">
          <div className="tag">  <img src={who} alt="who" className="tag" />
          Who We Are
          </div>
          <h2>
            Gently we are growing <br /> and selling organic food
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even.
          </p>

          {/* Icons Row */}
          <div className="farming-icons">
            <div className="icon-box">
               <img src={eco} alt="eco farm" className="icon-box" />
              <div>
                <h3>Eco Farms Worldwide</h3>
                <p>435+ eco farms available, regions have suffered.</p>
              </div>
            </div>
            <div className="icon-box">
               <img src={special} alt="special" className="icon-box" />
              <div>
                <h3>Special Equipment</h3>
                <p>300+ types of modern equipment available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  <div className="moving-text">
  <div className="marquee">
    <span>
      * Agriculture * Farming * Organic * Vegetables * Agriculture * Farming * Organic * Vegetables
    </span>
    <span>
      * Agriculture * Farming * Organic * Vegetables * Agriculture * Farming * Organic * Vegetables
    </span>
  </div>
</div>

    </section>
  );
}
