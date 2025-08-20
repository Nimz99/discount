import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '../contexts/ProductContext';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Package, 
  BarChart3, 
  Settings,
  LogOut,
  ArrowLeft
} from 'lucide-react';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';

const AdminDashboard = () => {
  const { products, loading } = useProducts();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('products');

  const handleLogout = async () => {
    try {
      // Simple logout without AuthContext
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const stats = [
    { title: 'Total Products', value: products.length, icon: Package, color: 'text-blue-600' },
    { title: 'Categories', value: new Set(products.map(p => p.category)).size, icon: BarChart3, color: 'text-green-600' },
    { title: 'Active Listings', value: products.filter(p => p.active !== false).length, icon: Settings, color: 'text-purple-600' },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Best Deals</title>
        <meta name="description" content="Admin dashboard for managing products and offers" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Back to Site</span>
                </Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Admin Dashboard
                </h1>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('products')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === 'products'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === 'add'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  Add Product
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'products' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductTable />
                </motion.div>
              )}

              {activeTab === 'add' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductForm />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

