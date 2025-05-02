import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from '../../assets/Banner/image-1.png'

const reviews = [
    {
        id: 1,
        name: "Jurgen K",
        position: "Senior Marketer",
        rating: 4.7,
        review: "Builders consultation discover maximum apartments. Indulgence offer positions folly death wrote cause take response. Plan upon yet way get cold spot action week. Almost do am or limits find.",
        image: img1
    },
    {
        id: 2,
        name: "Anna B",
        position: "Business Analyst",
        rating: 4.8,
        review: "Pointing consultation discover maximum apartments. Indulgence offer positions folly death wrote cause take response. Plan upon yet way get cold spot action week. Almost do am or limits find.",
        image: img1
    },
    {
        id: 3,
        name: "Anthony D",
        position: "Businessman",
        rating: 4.5,
        review: "Mastering consultation discover maximum apartments. Indulgence offer positions folly death wrote cause take response. Plan upon yet way get cold spot action week. Almost do am or limits find.",
        image: img1
    },
    {
        id: 4,
        name: "Nina S",
        position: "Developer",
        rating: 4.9,
        review: "Titanic consultation discover maximum apartments. Indulgence offer positions folly death wrote cause take response. Plan upon yet way get cold spot action week. Almost do am or limits find.",
        image: img1
    },
    {
        id: 5,
        name: "Lucas P",
        position: "UI/UX Designer",
        rating: 4.6,
        review: "Smart consultation discover maximum apartments. Indulgence offer positions folly death wrote cause take response. Plan upon yet way get cold spot action week. Almost do am or limits find.",
        image: img1
    }
];

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = reviews.length;

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentSlide(next + 1),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };

    const CustomNextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute right-8 bottom-5 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Next testimonial"
        >
            <FaChevronRight className="text-gray-600" />
        </button>
    );

    const CustomPrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute right-24 bottom-5 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Previous testimonial"
        >
            <FaChevronLeft className="text-gray-600" />
        </button>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
            {/* Slider Section */}
            <Slider
                {...settings}
                nextArrow={<CustomNextArrow />}
                prevArrow={<CustomPrevArrow />}
            >
                {reviews.map((review) => (
                    <div key={review.id} className="p-4">
                        <div className="rounded-xl p-10 bg-base-200 h-full flex flex-col justify-between">
                            <p className="text-gray-600 text-sm">{review.review}</p>
                            <div className="flex mt-2 pt-2 items-center gap-4 mb-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                    <h4 className="font-bold">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Slide counter between arrows */}
            <div className="absolute right-20 bottom-24 transform -translate-y-1/2 z-10 text-gray-600 text-sm">
                {currentSlide}/{totalSlides}
            </div>
        </div>
    );
};

export default TestimonialSlider;