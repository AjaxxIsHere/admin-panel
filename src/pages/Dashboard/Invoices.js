import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEye, FaDownload, FaCreditCard } from 'react-icons/fa';
import '../../styles/dashboard.css';

const invoicesData = [
  { id: 'INV-2001', client: '3M Dental', issue: '2025-06-01', due: '2025-06-15', amount: '$1,500', status: 'Unpaid' },
  { id: 'INV-2002', client: 'The Filipino Dental', issue: '2025-06-03', due: '2025-06-17', amount: '$2,200', status: 'Paid' },
  { id: 'INV-2003', client: 'Hi Dent Traders', issue: '2025-06-05', due: '2025-06-19', amount: '$950', status: 'Overdue' },
  { id: 'INV-2004', client: 'Future Dental', issue: '2025-06-07', due: '2025-06-21', amount: '$3,100', status: 'Unpaid' },
  { id: 'INV-2005', client: 'Keemz Medical', issue: '2025-06-09', due: '2025-06-23', amount: '$4,800', status: 'Paid' },
];

function Invoices() {
  const [search, setSearch] = useState('');

  const filteredInvoices = invoicesData.filter(inv =>
    inv.id.toLowerCase().includes(search.toLowerCase()) ||
    inv.client.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-content">
      <div className="invoices-header">
        <h2>Invoices</h2>
        <button className="create-invoice-btn">
          <FaPlus /> Create New Invoice
        </button>
      </div>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by Invoice ID or Client..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {/* Responsive Table */}
      <div className="invoice-table-responsive">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Client</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((inv, idx) => (
              <tr key={inv.id}>
                <td data-label="Invoice ID">{inv.id}</td>
                <td data-label="Client">{inv.client}</td>
                <td data-label="Issue Date">{inv.issue}</td>
                <td data-label="Due Date">{inv.due}</td>
                <td data-label="Total Amount">{inv.amount}</td>
                <td data-label="Status">
                  <span className={`status-badge status-${inv.status.toLowerCase()}`}>{inv.status}</span>
                </td>
                <td data-label="Actions">
                  <button className="action-btn view" title="View"><FaEye /></button>
                  <button className="action-btn download" title="Download"><FaDownload /></button>
                  <button className="action-btn pay" title="Pay"><FaCreditCard /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>



        {/* Pagination (visual only) */}
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

export default Invoices;
