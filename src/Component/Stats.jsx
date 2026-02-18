import React from "react";
import "../assets/css/Stats.css";
import CountUp from "react-countup";

export default function Stats() {
  const statsData = [
    { value: 10000, label: "Users", suffix: "+" },
    { value: 50000, label: "Transactions", suffix: "+" },
    { value: 10000000, label: "Money Transferred", prefix: "$" },
    { value: 99.9, label: "Uptime", suffix: "%" },
    { value: 24, label: "Support", suffix: "/7" },
    { value: 500, label: "Branches", suffix: "+" },
  ];

  return (
    <section className="stats-section py-5">
      <div className="container">
        <div className="stats-heading-wrapper text-center mb-5">
          <h2 className="stats-heading">Our Achievements</h2>
          <p className="stats-subheading">
            See how our ATM system is helping thousands of users securely manage their money.
          </p>
        </div>

        <div className="stats-cards">
          {statsData.map((stat, index) => (
            <div className="stat" key={index}>
              <h2>
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  prefix={stat.prefix ? stat.prefix : ""}
                  suffix={stat.suffix ? stat.suffix : ""}
                  enableScrollSpy       
                  scrollSpyDelay={0}    
                />
              </h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
