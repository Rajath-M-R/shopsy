import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Package, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const OrderSuccess: React.FC = () => {
  const { state: cartState, dispatch } = useCart();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show confetti animation
    setShowConfetti(true);
    
    // Clear cart after successful order
    dispatch({ type: 'CLEAR_CART' });

    // Hide confetti after animation
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  // Sample order data (in a real app, this would come from the backend)
  const orderData = {
    orderNumber: 'SHOPSY-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    estimatedDelivery: '3-5 business days',
    items: cartState.items.length > 0 ? cartState.items : [
      {
        product: {
          id: 1,
          name: 'iPhone 15 Pro',
          price: 999,
          image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
        },
        quantity: 1,
      },
      {
        product: {
          id: 2,
          name: 'AirPods Pro',
          price: 249,
          image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
        },
        quantity: 1,
      },
    ],
    total: cartState.totalPrice > 0 ? cartState.totalPrice * 1.08 : 1347.92,
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl animate-bounce">🎉</div>
          </div>
          <div className="absolute top-1/4 left-1/4 text-4xl animate-pulse">✨</div>
          <div className="absolute top-1/3 right-1/4 text-4xl animate-pulse">🎊</div>
          <div className="absolute bottom-1/3 left-1/3 text-4xl animate-pulse">🎈</div>
          <div className="absolute bottom-1/4 right-1/3 text-4xl animate-pulse">🎁</div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Thank you for your purchase. Your order has been confirmed and will be processed shortly.
          </p>
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-primary-800 dark:text-primary-200 font-semibold">
              Order Number: {orderData.orderNumber}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {orderData.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span className="text-gray-900 dark:text-gray-100">Total</span>
                <span className="text-primary-600 dark:text-primary-400">
                  ${orderData.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Delivery Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    Estimated Delivery
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {orderData.estimatedDelivery}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    Order Confirmed
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your order is being prepared for shipment
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                  <Package className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    Shipping Updates
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    You'll receive email updates about your order status
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                What's Next?
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• You'll receive an order confirmation email shortly</li>
                <li>• We'll prepare your items for shipment</li>
                <li>• You'll get tracking information once shipped</li>
                <li>• Your order will arrive at your doorstep</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Return Home
          </Link>
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Package className="h-5 w-5 mr-2" />
            Track Order
          </button>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Need Help?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you have any questions about your order, our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                Contact Support
              </Link>
              <span className="hidden sm:block text-gray-300 dark:text-gray-600">|</span>
              <a
                href="tel:+15551234567"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                Call Us: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
