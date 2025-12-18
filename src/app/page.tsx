"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Coffee, Bean, Users, Home, Croissant, Package, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="noiseGradient"
      cardStyle="accent-corner-border"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="BrewHaven"
          button={{
            text: "Order Now",
            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Discover Your Perfect Cup"
          description="Experience premium specialty coffee crafted with passion in our cozy café. From artisan espresso to creamy cappuccinos, every cup tells a story."
          tag="Premium Coffee Roastery"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "#products" },
            { text: "Visit Us", href: "#contact" }
          ]}
          carouselItems={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055676346-mj2rfcmy.jpg",
              imageAlt: "Artisan latte with coffee art"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055677648-mljk9m85.jpg",
              imageAlt: "Modern coffee shop interior"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055678860-xpgmjdwo.jpg",
              imageAlt: "Barista crafting espresso"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055680366-b99j0efb.jpg",
              imageAlt: "Cappuccino with milk foam"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055682416-9fls09tu.jpg",
              imageAlt: "Freshly roasted coffee beans"
            },
            {
              id: "6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055683601-9i5qlurk.jpg",
              imageAlt: "Cozy seating area"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Crafted with " },
            {
              type: "image",
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055684719-q8q8a5j8.jpg",
              alt: "BrewHaven coffee brand"
            },
            { type: "text", content: " passion for exceptional coffee" }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Why Choose BrewHaven"
          description="Discover what makes our coffee shop the perfect destination for coffee lovers"
          features={[
            {
              title: "Specialty Blends",
              description: "Handpicked beans from ethical, sustainable coffee farms around the world",
              icon: Bean
            },
            {
              title: "Expert Baristas",
              description: "Certified professionals dedicated to perfecting every cup with precision and care",
              icon: Users
            },
            {
              title: "Cozy Ambiance",
              description: "Warm, welcoming space designed for relaxation, work, and meaningful connections",
              icon: Home
            },
            {
              title: "Fresh Pastries",
              description: "Daily-baked treats perfectly paired with our signature coffee selections",
              icon: Croissant
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFive
          title="Our Menu"
          description="Explore our carefully curated selection of specialty coffee drinks and food"
          tag="Premium Selection"
          tagIcon={Package}
          products={[
            {
              id: "1",
              button: { text: "Add to Cart" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055686673-sznvsn1x.jpg",
              imageAlt: "Double shot espresso"
            },
            {
              id: "2",
              button: { text: "Add to Cart" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055687979-2l7mxis6.png",
              imageAlt: "Creamy vanilla latte"
            },
            {
              id: "3",
              button: { text: "Add to Cart" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055689279-f228agm8.jpg",
              imageAlt: "Classic cappuccino"
            },
            {
              id: "4",
              button: { text: "Add to Cart" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055690476-nq9hgqpy.jpg",
              imageAlt: "Bold americano"
            },
            {
              id: "5",
              button: { text: "Add to Cart" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055691851-5xc5f9g5.jpg",
              imageAlt: "Macchiato shot with foam"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Customers Say"
          description="Join thousands of satisfied coffee lovers who visit BrewHaven"
          tag="Customer Reviews"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell, Marketing Manager",
              date: "Date: 15 November 2024",
              title: "Best coffee shop in town!",
              quote: "The baristas here truly understand their craft. My morning cappuccino is always perfectly balanced. The cozy atmosphere makes it the perfect spot for meetings or just relaxing with a good book.",
              tag: "Regular Customer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055693321-n365ryke.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055677648-mljk9m85.jpg",
              imageAlt: "Coffee shop interior"
            },
            {
              id: "2",
              name: "James Chen, Software Developer",
              date: "Date: 12 November 2024",
              title: "My favorite workspace",
              quote: "Great wifi, amazing coffee, and friendly staff. I spend hours here working on projects. The environment is so inspiring and the espresso keeps me focused all day long.",
              tag: "Daily Visitor",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055694900-42ico7c7.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055676346-mj2rfcmy.jpg",
              imageAlt: "Latte art creation"
            },
            {
              id: "3",
              name: "Emma Rodriguez, Teacher",
              date: "Date: 8 November 2024",
              title: "Worth every penny",
              quote: "The quality of the beans is exceptional. You can taste the difference immediately. Plus, the fresh pastries are absolutely delicious. This is my go-to spot every weekend.",
              tag: "Specialty Coffee Lover",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055696043-b7d5lqtn.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055687979-2l7mxis6.png",
              imageAlt: "Perfect latte"
            },
            {
              id: "4",
              name: "Michael Thompson, Retired Executive",
              date: "Date: 5 November 2024",
              title: "A community gem",
              quote: "Not just great coffee, but a wonderful community. The staff remembers regulars, hosts local art, and creates a space where everyone feels welcome. This is where I spend my mornings.",
              tag: "Community Member",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055697705-wv7x3bk4.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766055678860-xpgmjdwo.jpg",
              imageAlt: "Barista working"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Visit Us Today"
          ctaDescription="Stop by BrewHaven and experience the perfect cup. Located in the heart of downtown with easy parking."
          ctaButton={{
            text: "Get Directions",
            href: "#"
          }}
          ctaIcon={MapPin}
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday to Friday from 7:00 AM to 7:00 PM, Saturday 8:00 AM to 8:00 PM, and Sunday 8:00 AM to 6:00 PM. Holidays may have different hours."
            },
            {
              id: "2",
              title: "Do you offer wifi?",
              content: "Yes, we provide free high-speed wifi for all our customers. Perfect for working, studying, or browsing. Just order a beverage to enjoy!"
            },
            {
              id: "3",
              title: "Can I bring my own cup?",
              content: "Absolutely! We encourage customers to bring reusable cups and offer a 10% discount on any beverage when you do."
            },
            {
              id: "4",
              title: "Do you serve food?",
              content: "Yes, we offer fresh pastries, sandwiches, and salads daily. All items are prepared fresh each morning with quality ingredients."
            }
          ]}
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="BrewHaven"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Menu",
              items: [
                { label: "Coffee", href: "#products" },
                { label: "Pastries", href: "#products" },
                { label: "Food", href: "#products" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Location", href: "#contact" },
                { label: "Email", href: "mailto:hello@brewhaven.com" },
                { label: "Phone", href: "tel:+1234567890" }
              ]
            },
            {
              title: "Follow",
              items: [
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Twitter", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 BrewHaven Coffee. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}