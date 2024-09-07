// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import BlogCard from './BlogCard'; // Make sure BlogCard is imported correctly

const Carousel = ({ blogPosts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {blogPosts.map((post, index) => (
        <div key={index}>
          <BlogCard
            title={post.title}
            description={post.description}
            image={post.image}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
