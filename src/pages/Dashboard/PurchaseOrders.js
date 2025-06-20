import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEye, FaEdit } from 'react-icons/fa';
import '../../styles/dashboard.css';

const purchaseOrdersData = [
  { id: '#12345', customer: '3M Dental', date: '2025-06-10', amount: '$2,500', status: 'Pending' },
  { id: '#23132', customer: 'The Filipino Dental', date: '2025-06-12', amount: '$1,200', status: 'Completed' },
  { id: '#09122', customer: 'Hi Dent Traders', date: '2025-06-14', amount: '$3,800', status: 'Processing' },
  { id: '#83838', customer: 'Future Dental', date: '2025-06-15', amount: '$950', status: 'Cancelled' },
  { id: '#14343', customer: 'Keemz Medical', date: '2025-06-16', amount: '$4,100', status: 'Pending' },
];

function PurchaseOrders() {
  const [search, setSearch] = useState('');

  const filteredOrders = purchaseOrdersData.filter(order =>
    order.id.toLowerCase().includes(search.toLowerCase()) ||
    order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-content">
      <div className="purchase-orders-header">
        <h2>Purchase Orders</h2>
        <button className="create-po-btn">
          <FaPlus /> Create New Purchase Order
        </button>
      </div>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by Order ID or Customer..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {/* Responsive Table */}
      <div className="po-table-responsive">
        <table className="po-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, idx) => (
              <tr key={order.id}>
                <td data-label="Order ID">{order.id}</td>
                <td data-label="Customer Name">{order.customer}</td>
                <td data-label="Order Date">{order.date}</td>
                <td data-label="Total Amount">{order.amount}</td>
                <td data-label="Status">
                  <span className={`status-badge status-${order.status.toLowerCase()}`}>{order.status}</span>
                </td>
                <td data-label="Actions">
                  <button className="action-btn view"><FaEye /></button>
                  <button className="action-btn edit"><FaEdit /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>



        {/* Paging (visual only) */}
        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="page-ellipsis">...</span>
          <button className="page-btn">Next</button>
        </div>



      </div>
    </div>
  );
}

export default PurchaseOrders;
