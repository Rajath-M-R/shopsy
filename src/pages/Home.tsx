import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { categories, getPopularProducts, products } from '../data/products';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const popularProducts = getPopularProducts();

  const heroSlides = [
    {
      id: 1,
      title: 'Summer Sale',
      subtitle: 'Up to 50% Off',
      description: 'Discover amazing deals on your favorite products',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
      buttonText: 'Shop Now',
      buttonLink: '/offers'
    },
    {
      id: 2,
      title: 'New Arrivals',
      subtitle: 'Latest Collection',
      description: 'Be the first to get the newest products',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200',
      buttonText: 'Explore',
      buttonLink: '/categories'
    },
    {
      id: 3,
      title: 'Electronics',
      subtitle: 'Tech Deals',
      description: 'Get the latest gadgets at unbeatable prices',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200',
      buttonText: 'Shop Electronics',
      buttonLink: '/category/electronics'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleCategoryFilter = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
      setFilteredProducts(products);
    } else {
      setSelectedCategory(categoryName);
      const filtered = products.filter(product => 
        product.category.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary-300">
                      {slide.subtitle}
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <Link
                      to={slide.buttonLink}
                      className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {slide.buttonText}
                      <ShoppingCart className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Discover products across all categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryFilter(category.name)}
                className={`group rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  selectedCategory === category.name
                    ? 'bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className={`text-lg font-semibold transition-colors ${
                  selectedCategory === category.name
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                }`}>
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered Products Section */}
      {selectedCategory && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {selectedCategory} Products
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Showing {filteredProducts.length} products in {selectedCategory}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setFilteredProducts(products);
                }}
                className="mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                Clear Filter
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Products Section */}
      <section className={`py-16 ${selectedCategory ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Popular Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Best-selling items loved by our customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose Shopsy?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We provide the best shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get your orders delivered quickly and safely to your doorstep.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Quality Products
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We ensure all products meet the highest quality standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Easy Returns
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hassle-free returns and exchanges within 30 days of purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
