import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MovieCarousel = ({ movies }) => {
  return (
    <div className="mt-8 px-4">
      <h2 className="text-white text-xl font-bold mb-4">Séries populares</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="movie-carousel"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-lg w-full"
            />
            <p className="text-white text-sm mt-2">{movie.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
