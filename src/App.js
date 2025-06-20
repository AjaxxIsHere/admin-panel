import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import PurchaseOrders from './pages/Dashboard/PurchaseOrders';
import Invoices from './pages/Dashboard/Invoices';
import FileUpload from './pages/Dashboard/FileUpload';
import Settings from './pages/Dashboard/Settings';
import './styles/App.css';
import './styles/auth.css';
import './styles/dashboard.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="purchase-orders" element={<PurchaseOrders />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="file-upload" element={<FileUpload />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </Layout>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
