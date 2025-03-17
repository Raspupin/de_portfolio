import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel({ images, onImageClick, title }) {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <Box sx={{ textAlign: "center", width: "100%" }}>
      {/* Title */}
      <Typography
        variant="h5"
        sx={{ color: "background.paper", fontWeight: "bold", mb: 1 }}
      >
        {title}
      </Typography>

      {/* Carousel Container */}
      <Box
        sx={{
          width: "90%",
          maxWidth: 450,
          border: "5px solid #FFFFFF",
          backgroundColor: "#FFFFFF",
          mx: "auto", // Centers the carousel
        }}
      >
        <Slider {...settings}>
          {[].concat(images).map((img, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => onImageClick(img)} // Click to open full-screen
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default ImageCarousel;
