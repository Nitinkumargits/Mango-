import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MangoVarietiesPage from '../pages/MangoVarietiesPage';
import MangoDetailsPage from '../pages/MangoDetailsPage';
import DashboardPage from '../pages/DashboardPage';
import ProductsPage from '../pages/ProductsPage';
import IngredientsPage from '../pages/IngredientsPage';
import BlogPage from '../pages/BlogPage';
import BlogPostDetailPage from '../pages/BlogPostDetailPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import MangoNutritionPage from '../pages/MangoNutritionPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mangoes" element={<MangoVarietiesPage />} />
      <Route path="/mangoes/:id" element={<MangoDetailsPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/products/beverages" element={<ProductsPage category="beverages" />} />
      <Route path="/products/confectionary" element={<ProductsPage category="confectionary" />} />
      <Route path="/ingredients" element={<IngredientsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/mango-nutrition" element={<MangoNutritionPage />} />
      <Route path="/contact" element={<ContactPage formType="general" />} />
      <Route path="/contact/general" element={<ContactPage formType="general" />} />
      <Route path="/contact/distributors" element={<ContactPage formType="distributors" />} />
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-mango-orange mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page not found</p>
            <a href="/" className="btn-primary inline-block">
              Go Home
            </a>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;

