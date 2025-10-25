import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Clock, Tag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getProductsOnSale } from '../data/products';

const Offers: React.FC = () => {
  const saleProducts = getProductsOnSale();

  const offerBanners = [
    {
      id: 1,
      title: 'Flash Sale',
      subtitle: 'Up to 70% Off',
      description: 'Limited time offer - ends in 24 hours',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
      buttonText: 'Shop Now',
      buttonLink: '#sale-products',
      discount: '70%',
      color: 'bg-red-500'
    },
    {
      id: 2,
      title: 'Weekend Special',
      subtitle: 'Buy 2 Get 1 Free',
      description: 'Mix and match any products',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200',
      buttonText: 'Explore',
      buttonLink: '#special-offers',
      discount: '33%',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'New Customer',
      subtitle: 'First Order Discount',
      description: 'Get 20% off on your first purchase',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200',
      buttonText: 'Claim Offer',
      buttonLink: '/signup',
      discount: '20%',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600">
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-center mb-6">
                <Tag className="h-16 w-16 text-yellow-300 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                Amazing Offers
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-yellow-300">
                Don't Miss Out!
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Discover incredible deals and save big on your favorite products
              </p>
              <div className="flex items-center justify-center space-x-4 text-2xl font-bold">
                <Clock className="h-8 w-8 text-yellow-300" />
                <span>Limited Time Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Banners */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Special Promotions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Take advantage of these exclusive offers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerBanners.map((offer) => (
              <div
                key={offer.id}
                className="relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${offer.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-white font-bold text-sm ${offer.color}`}>
                      {offer.discount} OFF
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-lg font-semibold text-yellow-300 mb-2">{offer.subtitle}</p>
                    <p className="text-sm mb-4 opacity-90">{offer.description}</p>
                    {offer.buttonLink.startsWith('#') ? (
                      <a
                        href={offer.buttonLink}
                        className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {offer.buttonText}
                      </a>
                    ) : (
                      <Link
                        to={offer.buttonLink}
                        className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {offer.buttonText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Products Section */}
      <section id="sale-products" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              🔥 Hot Deals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {saleProducts.length} products on sale right now
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {saleProducts.map((product) => (
              <div key={product.id} className="relative">
                {/* Sale Badge */}
                {product.isOnSale && (
                  <div className="absolute top-2 left-2 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {product.discount}% OFF
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Never Miss an Offer
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to get notified about new deals and exclusive discounts
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-r-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
