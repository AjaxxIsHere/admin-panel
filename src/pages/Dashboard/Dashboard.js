import React from 'react';
import { FaDollarSign, FaUsers, FaShoppingCart, FaChartLine, FaArrowUp, FaArrowDown, FaLink } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import '../../styles/dashboard.css';

// Reusable SalesPerformanceWidget
const salesData = [
  { name: 'Day 1', sales: 400 },
  { name: 'Day 2', sales: 700 },
  { name: 'Day 3', sales: 600 },
  { name: 'Day 4', sales: 900 },
  { name: 'Day 5', sales: 800 },
  { name: 'Day 6', sales: 1200 },
  { name: 'Day 7', sales: 1100 },
  { name: 'Day 8', sales: 950 },
  { name: 'Day 9', sales: 1300 },
  { name: 'Day 10', sales: 1500 },
  { name: 'Day 11', sales: 1700 },
  { name: 'Day 12', sales: 1600 },
  { name: 'Day 13', sales: 1800 },
  { name: 'Day 14', sales: 2000 },
];

function SalesPerformanceWidget({ amount = "$8,400", trend = "+12%" }) {
  // Detect dark mode
  const isDark = document.body.classList.contains('dark');
  return (
    <div className={`sales-widget${isDark ? ' dark' : ''}`}> 
      <div className="sales-widget-header">
        <div>
          <div className="sales-widget-title">Sales Performance</div>
          <div className="sales-widget-amount">{amount}</div>
        </div>
        <div className={`sales-widget-trend ${trend.startsWith('+') ? 'up' : 'down'}`}>{trend}</div>
      </div>
      <div className="sales-widget-desc">Last 30 days</div>
      <div className="sales-widget-chart">
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid stroke={isDark ? '#444a56' : '#e3eaf2'} strokeDasharray="3 3" />
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip contentStyle={{ background: isDark ? '#23272f' : '#fff', border: 'none', borderRadius: 8, color: isDark ? '#f7f7f7' : '#222' }} />
            <Line type="monotone" dataKey="sales" stroke={isDark ? '#4fd1c5' : '#3498db'} strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Dashboard() {
  //------------------------------------------------------------- Hardcoded KPI data
  const kpis = [
    {
      title: 'Total Sales',
      value: '$12,500',
      icon: <FaDollarSign className="kpi-icon" />,
      trend: 'up',
      trendValue: '+5%'
    },
    {
      title: 'Active Users',
      value: '1,200',
      icon: <FaUsers className="kpi-icon" />,
      trend: 'down',
      trendValue: '-2%'
    },
    {
      title: 'Orders',
      value: '320',
      icon: <FaShoppingCart className="kpi-icon" />,
      trend: 'up',
      trendValue: '+8%'
    },
    {
      title: 'Revenue',
      value: '$8,400',
      icon: <FaChartLine className="kpi-icon" />,
      trend: 'up',
      trendValue: '+3%'
    }
  ];

  // Hardcoded recent activity
  const recentActivities = [
    { time: '10:30 AM', activity: 'User AJ created a new invoice.' },
    { time: '09:50 AM', activity: 'Order #12345 was approved.' },
    { time: '09:20 AM', activity: 'Settings updated by Admin.' },
    { time: 'Yesterday', activity: 'New user registered: Larry.' },
  ];

  // Hardcoded quick links
  const quickLinks = [
    { label: 'New Invoice', icon: <FaLink />, action: '#' },
    { label: 'Add User', icon: <FaLink />, action: '#' },
    { label: 'View Reports', icon: <FaLink />, action: '#' },
    { label: 'Settings', icon: <FaLink />, action: '#' },
  ];

  //------------------------------------------------------------- 

  return (
    <div className="dashboard-content">
      {/* Overview */}
      <h1>Welcome to the Admin Dashboard</h1>

      {/* KPI Cards */}
      <div className="kpi-cards">
        {kpis.map((kpi, idx) => (
          <div className="kpi-card" key={idx}>
            <div className="kpi-header">
              {kpi.icon}
              <span className="kpi-title">{kpi.title}</span>
            </div>
            <div className="kpi-value">{kpi.value}</div>
            <div className={`kpi-trend ${kpi.trend}`}> 
              {kpi.trend === 'up' ? <FaArrowUp /> : <FaArrowDown />} {kpi.trendValue}
            </div>
          </div>
        ))}
      </div>

      {/* Sales Performance Widget */}
      <div className="dashboard-chart">
        <SalesPerformanceWidget amount="$8,400" trend="+12%" />
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((item, idx) => (
              <tr key={idx}>
                <td>{item.time}</td>
                <td>{item.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <h2>Quick Actions</h2>
        <div className="quick-links-list">
          {quickLinks.map((link, idx) => (
            <button className="quick-link-btn" key={idx} onClick={() => window.location.href = link.action}>
              {link.icon} {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
