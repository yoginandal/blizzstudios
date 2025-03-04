"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Testimonials1 from "@/public/user_images/aditya.jpg";
import Testimonials2 from "@/public/user_images/daniaskhata.jpg";
import Testimonials3 from "@/public/user_images/Itha.jpg";
import Testimonials4 from "@/public/user_images/jaideep.jpg";
import Testimonials5 from "@/public/user_images/niraj.jpg";
import Testimonials6 from "@/public/user_images/Parameshwar.jpg";
import Testimonials7 from "@/public/user_images/swapnil.jpg";
import Testimonials8 from "@/public/user_images/Umesh.jpeg";
import Testimonials9 from "@/public/user_images/Ankit.jpeg";
import Testimonials10 from "@/public/user_images/Venkatesh.jpeg";
import goc from "@/public/user_images/goc.png";

import type { StaticImageData } from "next/image";

interface Testimonial {
  name: string;
  role: string;
  company: string | StaticImageData;
  text: string;
  rating: number;
  image: StaticImageData;
}

// Testimonials datas
const testimonials: Testimonial[] = [
  {
    name: "Aditya Datta ",
    role: "Executive Director",
    company:
      "https://www.jpmorganchase.com/content/dam/jpmorganchase/images/logos/jpmc-logo.svg",
    text: "Inspiring leadership qualities. Always pushes the team forward with innovative solutions and creative problem-solving approaches.",
    rating: 5,
    image: Testimonials1,
  },
  {
    name: "Akshata Dani",
    role: "Technical Writer Specialist",
    company: goc,
    text: "Excellent commitment and creativity. The attention to detail and fresh perspective brings new life to every project we collaborate on.",
    rating: 4,
    image: Testimonials2,
  },
  {
    name: "Itha Lakshmipathi",
    role: "AVP & Global Head - HR",
    company: "https://www.prodapt.com/wp-content/uploads/Logo-for-website.svg",
    text: "Reliable and punctual in every project. A true professional who consistently delivers outstanding results on time.",
    rating: 5,
    image: Testimonials3,
  },
  {
    name: "Jaideep Avasarala",
    role: "Talent Acquisition Leader",
    company:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/UHFbanner-MSlogo?fmt=png-alpha&bfc=off&qlt=100,1",
    text: "An amazing communicator who always keeps the team informed. Her ability to connect with clients is unmatched.",
    rating: 4,
    image: Testimonials4,
  },
  {
    name: "Niraj Kumar Rana",
    role: "EVP & Head of Sales",
    company:
      "https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg",
    text: "Brings incredible data insights to every project. His analytical skills and attention to detail make all the difference.",
    rating: 5,
    image: Testimonials5,
  },
  {
    name: "Parameshwar N",
    role: "Vice-President Customer Engagement",
    company:
      "https://www.sbilife.co.in/sites/SBILife/NewHomePage/images/SBI_Logo.png",
    text: "An extraordinary thinker who knows how to capture the essence of our brand in every piece of content.",
    rating: 5,
    image: Testimonials6,
  },
  {
    name: "Swapnil Bhele",
    role: "Assistsnt Vice President",
    company: "https://www.citi.com/CBOL/IA/Angular/assets/citiredesign.svg",
    text: "A quick problem solver who always finds efficient and scalable solutions. A great team player.",
    rating: 4,
    image: Testimonials7,
  },
  {
    name: "Umesh Golecha",
    role: "Director",
    company:
      "https://www.innovasolutions.com/wp-content/uploads/2025/01/Innova-Logo-New.svg",
    text: "Her designs are always fresh and creative, perfectly capturing the essence of every project.",
    rating: 5,
    image: Testimonials8,
  },
  {
    name: "Ankit Bhadauriya",
    role: "National Key Account Manager",
    company: "https://www.dabur.com/static/images/android-icon-72x72.png",
    text: "Has a knack for making our systems run smoothly. A key player in maintaining our infrastructure.",
    rating: 4,
    image: Testimonials9,
  },
  {
    name: "Venkatesh Dixit",
    role: "Presales Consultant",
    company:
      "https://cognizant.scene7.com/is/content/cognizant/COG-Logo-2022-1?fmt=png-alpha",
    text: "Consistently delivers exceptional results in improving our online presence and driving organic traffic.",
    rating: 5,
    image: Testimonials10,
  },
];

// Image data - using placeholder paths instead of imports
const images = testimonials.map((t) => t.image);

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalTestimonials = testimonials.length;

  // Auto-change testimonial effect
  useEffect(() => {
    if (!isHovered) {
      let animationTimer: NodeJS.Timeout;
      const intervalTimer = setInterval(() => {
        setIsAnimating(true);
        animationTimer = setTimeout(() => {
          setActiveIndex((prev) =>
            prev === totalTestimonials - 1 ? 0 : prev + 1
          );
          setIsAnimating(false);
        }, 500);
      }, 3000);

      return () => {
        clearInterval(intervalTimer);
        clearTimeout(animationTimer);
      };
    }
  }, [isHovered, totalTestimonials, activeIndex]);

  // Intersection Observer for visibility animation
  useEffect(() => {
    const current = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  // Handle image click with animation
  const handleImageClick = (index: number) => {
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  // Handle navigation buttons with animation
  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) =>
          prev === 0 ? totalTestimonials - 1 : prev - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) =>
          prev === totalTestimonials - 1 ? 0 : prev + 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  // Circle image indices (excluding active image)
  const circleImageIndices = images
    .slice(0, totalTestimonials)
    .map((_, i) => i)
    .filter((i) => i !== activeIndex);

  // Angle per image for circular arrangement
  const anglePerImage = 360 / circleImageIndices.length;

  // Safeguard against undefined testimonials
  const activeTestimonial = testimonials[activeIndex] || {
    name: "Anonymous",
    role: "Unknown Role",
    text: "No testimonial available.",
    rating: 0,
    company: "",
  };

  return (
    <section id="about" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Client Success Stories
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with BlizzStudios.
          </p>
        </div>

        <Card
          className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-6 max-w-screen-xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 p-6 md:p-8 shadow-lg items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Circular Image Carousel */}
          <CardContent className="col-span-2 flex justify-center items-center relative h-[25rem] md:h-[30rem] scale-75 md:scale-100">
            <div
              ref={containerRef}
              className={`relative w-full flex justify-center items-center transition-transform duration-700 ${
                isVisible ? "scale-100" : "scale-0"
              }`}
            >
              {images.slice(0, totalTestimonials).map((image, index) => {
                const isActive = index === activeIndex;
                let transform = "none";

                if (!isActive) {
                  const idx = circleImageIndices.indexOf(index);
                  const angle = anglePerImage * idx;
                  // Get transform distance based on screen size
                  const translateDistance =
                    typeof window !== "undefined"
                      ? window.innerWidth < 370
                        ? "9.5rem"
                        : window.innerWidth < 640
                        ? "10rem"
                        : "12rem"
                      : "10rem";

                  transform = `rotate(${angle}deg) translateX(${
                    isVisible ? translateDistance : "0rem"
                  }) rotate(-${angle}deg)`;
                }

                return (
                  <div
                    key={index}
                    style={{
                      scale: "0.9",
                      position: "absolute",
                      width: isActive ? "9rem" : "6rem",
                      height: isActive ? "9rem" : "6rem",
                      borderRadius: "50%",
                      overflow: "hidden",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "all 0.5s ease",
                      transform,
                      zIndex: isActive ? 10 : 1,
                      cursor: isActive ? "default" : "pointer",
                    }}
                    onClick={() => !isActive && handleImageClick(index)}
                  >
                    <img
                      src={image.src}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </CardContent>

          {/* Testimonial Content */}
          <CardContent className="col-span-3 relative flex flex-col justify-start items-center md:items-start text-center md:text-left p-0 md:p-6">
            <div
              className={`p-0 pb-6 sm:p-6 rounded-md flex-grow w-full max-w-full sm:max-w-2xl mx-auto md:mx-0 transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex justify-center md:justify-start items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < activeTestimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-lg md:text-xl text-white mb-6">
                "{activeTestimonial.text}"
              </p>
              <div>
                <p className="text-lg font-semibold text-cyan-400">
                  {activeTestimonial.name}
                </p>
                <p className="text-sm text-white/70">
                  {activeTestimonial.role}
                </p>
                <img
                  src={
                    typeof activeTestimonial.company === "string"
                      ? activeTestimonial.company
                      : activeTestimonial.company.src
                  }
                  alt="Company Logo"
                  className="mt-5 h-10"
                />
              </div>
            </div>
            <div className="absolute bottom-[-2rem] md:bottom-4 md:right-4 justify-center md:justify-end w-full flex gap-4">
              <Button
                size="icon"
                onClick={handlePrevious}
                className="rounded-full bg-white/10 hover:bg-cyan-400/80 border border-white/20"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                size="icon"
                onClick={handleNext}
                className="rounded-full bg-white/10 hover:bg-cyan-400/80 border border-white/20"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
