import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Deliveries from './pages/Deliveries';
import Login from './pages/Login';
import Register from './pages/Register';
import Sidebar from './components/Sidebar';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // Import AuthProvider and useAuth

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Get user and loading state from AuthContext

  if (loading) {
    // Show a loading indicator while checking auth status
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem',
        color: 'var(--primary-color)'
      }}>
        Loading user data...
      </div>
    );
  }

  // If user is authenticated, render the children (protected component)
  // Otherwise, redirect to the login page
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    // Wrap the entire application with AuthProvider to make auth context available
    <Router>
      <AuthProvider>
        <AppContent /> {/* Separate component to use useAuth hook */}
      </AuthProvider>
    </Router>
  );
}

// AppContent component to conditionally render Sidebar and Routes
function AppContent() {
  const { user, loading } = useAuth();
  // Only show sidebar if user is logged in and auth status is not loading
  const showSidebar = !loading && user;

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      {showSidebar && <Sidebar />} {/* Conditionally render Sidebar */}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes - only accessible if user is logged in */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <Customers />
            </PrivateRoute>
          }
        />
        <Route
          path="/deliveries"
          element={
            <PrivateRoute>
              <Deliveries />
            </PrivateRoute>
          }
        />

        {/* Redirect to dashboard if logged in, otherwise to login */}
        <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />
        {/* Fallback route for any unmatched paths, redirects to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;