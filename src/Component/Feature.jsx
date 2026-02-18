import "../assets/css/Feature.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Features() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="card shadow h-100 text-center feature-card">
              <div className="card-body">
                <h5>Debit Amount</h5>
                <p>Easily withdraw money from your account securely anytime.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow h-100 text-center feature-card">
              <div className="card-body">
                <h5>Credit Amount</h5>
                <p>Deposit money into your account with fast processing safely.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow h-100 text-center feature-card">
              <div className="card-body">
                <h5>Transaction History</h5>
                <p>View complete history of your debit and credit transactions.</p>
              </div>
            </div>
          </SwiperSlide>
             <SwiperSlide>
            <div className="card shadow h-100 text-center feature-card">
              <div className="card-body">
                <h5>Check Balance</h5>
                <p>View your current account balance in secure and reliable manner.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card shadow h-100 text-center feature-card">
              <div className="card-body">
                <h5>Transfer Money</h5>
                <p>You can send money from one account to another safely.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
