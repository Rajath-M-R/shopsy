import React, { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Filter, X, SlidersHorizontal, Star, Check, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory, categories, Product } from '../data/products';

// Subcategories for electronics
const electronicsSubcategories = [
  { id: 'smartphones', name: 'Smartphones' },
  { id: 'laptops', name: 'Laptops' },
  { id: 'audio', name: 'Audio' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'smart-watches', name: 'Smart Watches' },
];

// Brands data
const brands = [
  { id: 'apple', name: 'Apple' },
  { id: 'samsung', name: 'Samsung' },
  { id: 'sony', name: 'Sony' },
  { id: 'bose', name: 'Bose' },
  { id: 'oneplus', name: 'OnePlus' },
];

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State for filters
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([
    parseInt(searchParams.get('minPrice') || '0'),
    parseInt(searchParams.get('maxPrice') || '100000')
  ]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(searchParams.get('brands')?.split(',') || []);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(searchParams.get('subcategories')?.split(',') || []);
  const [ratings, setRatings] = useState<number[]>(searchParams.get('ratings')?.split(',').map(Number) || []);
  const [showFilters, setShowFilters] = useState(false);
  const [priceInput, setPriceInput] = useState<[string, string]>([priceRange[0].toString(), priceRange[1].toString()]);

  const categoryData = categories.find(cat => cat.slug === category);
  let products = getProductsByCategory(categoryData?.name || '');

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (sortBy !== 'featured') params.set('sort', sortBy);
    if (priceRange[0] > 0) params.set('minPrice', priceRange[0].toString());
    if (priceRange[1] < 100000) params.set('maxPrice', priceRange[1].toString());
    if (selectedBrands.length > 0) params.set('brands', selectedBrands.join(','));
    if (selectedSubcategories.length > 0) params.set('subcategories', selectedSubcategories.join(','));
    if (ratings.length > 0) params.set('ratings', ratings.join(','));
    
    setSearchParams(params, { replace: true });
  }, [sortBy, priceRange, selectedBrands, selectedSubcategories, ratings, setSearchParams]);

  // Apply filters
  products = products.filter(product => {
    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Filter by brand
    if (selectedBrands.length > 0) {
      const brandMatch = selectedBrands.some(brand => 
        product.name.toLowerCase().includes(brand.toLowerCase())
      );
      if (!brandMatch) return false;
    }
    
    // Filter by ratings
    if (ratings.length > 0) {
      const ratingMatch = ratings.some(rating => 
        Math.floor(product.rating) === rating
      );
      if (!ratingMatch) return false;
    }
    
    // Filter by subcategories (simplified example)
    if (selectedSubcategories.length > 0) {
      const subcategoryMatch = selectedSubcategories.some(subcategory => {
        if (subcategory === 'smartphones') {
          return product.name.toLowerCase().includes('iphone') || 
                 product.name.toLowerCase().includes('samsung galaxy');
        } else if (subcategory === 'laptops') {
          return product.name.toLowerCase().includes('macbook') || 
                 product.name.toLowerCase().includes('laptop');
        } else if (subcategory === 'audio') {
          return product.name.toLowerCase().includes('airpods') || 
                 product.name.toLowerCase().includes('headphone');
        }
        return false;
      });
      if (!subcategoryMatch) return false;
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id; // Assuming higher IDs are newer
      case 'featured':
      default:
        return (b.rating * 2 + (b.isOnSale ? 1 : 0)) - (a.rating * 2 + (a.isOnSale ? 1 : 0));
    }
  });

  const handlePriceChange = (index: number, value: string) => {
    const numValue = Math.max(0, Math.min(100000, parseInt(value) || 0));
    const newPriceInput = [...priceInput] as [string, string];
    newPriceInput[index] = numValue.toString();
    setPriceInput(newPriceInput);
    
    if (index === 0) {
      setPriceRange([numValue, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], numValue]);
    }
  };

  const toggleBrand = (brandId: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  const toggleSubcategory = (subcategoryId: string) => {
    setSelectedSubcategories(prev => 
      prev.includes(subcategoryId)
        ? prev.filter(id => id !== subcategoryId)
        : [...prev, subcategoryId]
    );
  };

  const toggleRating = (rating: number) => {
    setRatings(prev => 
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const clearAllFilters = () => {
    setSortBy('featured');
    setPriceRange([0, 100000]);
    setPriceInput(['0', '100000']);
    setSelectedBrands([]);
    setSelectedSubcategories([]);
    setRatings([]);
  };

  const activeFilterCount = [
    sortBy !== 'featured' ? 1 : 0,
    priceRange[0] > 0 || priceRange[1] < 100000 ? 1 : 0,
    selectedBrands.length,
    selectedSubcategories.length,
    ratings.length
  ].reduce((a, b) => a + b, 0);

  if (!categoryData) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Category not found
          </h2>
          <Link
            to="/"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{categoryData.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {categoryData.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover amazing products in {categoryData.name.toLowerCase()}
          </p>
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {sortedProducts.length} products
          </span>
          {activeFilterCount > 0 && (
            <button 
              onClick={clearAllFilters}
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Clear all filters
            </button>
          )}
          
          {activeFilterCount > 0 && (
            <div className="hidden md:flex flex-wrap gap-2">
              {sortBy !== 'featured' && (
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full">
                  {sortBy === 'price-low' ? 'Price: Low to High' : 
                   sortBy === 'price-high' ? 'Price: High to Low' : 
                   sortBy === 'rating' ? 'Top Rated' : 'Featured'}
                  <button 
                    onClick={() => setSortBy('featured')}
                    className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
              
              {(priceRange[0] > 0 || priceRange[1] < 100000) && (
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full">
                  ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  <button 
                    onClick={() => {
                      setPriceRange([0, 100000]);
                      setPriceInput(['0', '100000']);
                    }}
                    className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {selectedBrands.map(brandId => (
                <div key={brandId} className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full">
                  {brands.find(b => b.id === brandId)?.name || brandId}
                  <button 
                    onClick={() => toggleBrand(brandId)}
                    className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}

              {selectedSubcategories.map(subcategoryId => (
                <div key={subcategoryId} className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full">
                  {electronicsSubcategories.find(s => s.id === subcategoryId)?.name || subcategoryId}
                  <button 
                    onClick={() => toggleSubcategory(subcategoryId)}
                    className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}

              {ratings.map(rating => (
                <div key={rating} className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full">
                  {rating}+ Stars
                  <button 
                    onClick={() => toggleRating(rating)}
                    className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filters */}
          <div className={`hidden lg:block w-64 flex-shrink-0 ${showFilters ? 'lg:hidden' : ''}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900 dark:text-white">Filters</h3>
                <button 
                  onClick={clearAllFilters}
                  className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Price Range</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={priceInput[0]}
                      onChange={(e) => handlePriceChange(0, e.target.value)}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Min"
                      min="0"
                      max={priceRange[1]}
                    />
                  </div>
                  <span className="text-gray-400">-</span>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={priceInput[1]}
                      onChange={(e) => handlePriceChange(1, e.target.value)}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Max"
                      min={priceRange[0]}
                      max="100000"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(0, e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(1, e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                  />
                </div>
              </div>

              {/* Categories */}
              {category === 'electronics' && (
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {electronicsSubcategories.map((subcategory) => (
                      <label key={subcategory.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedSubcategories.includes(subcategory.id)}
                          onChange={() => toggleSubcategory(subcategory.id)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">{subcategory.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Brands */}
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.id)}
                        onChange={() => toggleBrand(brand.id)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{brand.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Customer Review */}
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Customer Review</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => toggleRating(rating)}
                      className={`flex items-center w-full text-left px-2 py-1 rounded ${ratings.includes(rating) ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-500'}`} 
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">& Up</span>
                      </div>
                      {ratings.includes(rating) && (
                        <Check className="ml-auto h-4 w-4 text-primary-600 dark:text-primary-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          <div className="lg:hidden fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 transition-opacity" style={{ display: showFilters ? 'block' : 'none' }}>
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h3>
                    <div className="flex items-center">
                      <button 
                        onClick={clearAllFilters}
                        className="text-sm text-primary-600 dark:text-primary-400 hover:underline mr-4"
                      >
                        Clear all
                      </button>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6 max-h-[70vh] overflow-y-auto px-1">
                    {/* Sort By */}
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</h4>
                      <div className="space-y-2">
                        {[
                          { value: 'featured', label: 'Featured' },
                          { value: 'newest', label: 'Newest' },
                          { value: 'price-low', label: 'Price: Low to High' },
                          { value: 'price-high', label: 'Price: High to Low' },
                          { value: 'rating', label: 'Top Rated' }
                        ].map((option) => (
                          <label key={option.value} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              checked={sortBy === option.value}
                              onChange={() => setSortBy(option.value)}
                              className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Price Range</h4>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="relative flex-1">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                          <input
                            type="number"
                            value={priceInput[0]}
                            onChange={(e) => handlePriceChange(0, e.target.value)}
                            className="w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Min"
                            min="0"
                            max={priceRange[1]}
                          />
                        </div>
                        <span className="text-gray-400">-</span>
                        <div className="relative flex-1">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                          <input
                            type="number"
                            value={priceInput[1]}
                            onChange={(e) => handlePriceChange(1, e.target.value)}
                            className="w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Max"
                            min={priceRange[0]}
                            max="100000"
                          />
                        </div>
                      </div>
                      <div className="mt-4 px-2">
                        <input
                          type="range"
                          min="0"
                          max="100000"
                          step="1000"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceChange(0, e.target.value)}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <input
                          type="range"
                          min="0"
                          max="100000"
                          step="1000"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceChange(1, e.target.value)}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                        />
                      </div>
                    </div>

                    {/* Categories */}
                    {category === 'electronics' && (
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Categories</h4>
                        <div className="space-y-2">
                          {electronicsSubcategories.map((subcategory) => (
                            <label key={subcategory.id} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={selectedSubcategories.includes(subcategory.id)}
                                onChange={() => toggleSubcategory(subcategory.id)}
                                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                              />
                              <span className="text-gray-700 dark:text-gray-300">{subcategory.name}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Brands */}
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Brands</h4>
                      <div className="space-y-2">
                        {brands.map((brand) => (
                          <label key={brand.id} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={selectedBrands.includes(brand.id)}
                              onChange={() => toggleBrand(brand.id)}
                              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">{brand.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Customer Review */}
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Customer Review</h4>
                      <div className="space-y-2">
                        {[4, 3, 2, 1].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => toggleRating(rating)}
                            className={`flex items-center w-full text-left px-2 py-1.5 rounded ${ratings.includes(rating) ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                          >
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-500'}`} 
                                />
                              ))}
                              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">& Up</span>
                            </div>
                            {ratings.includes(rating) && (
                              <Check className="ml-auto h-4 w-4 text-primary-600 dark:text-primary-400" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 sm:ml-3 sm:w-auto"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter/Sort Bar */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No products found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search criteria</p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
