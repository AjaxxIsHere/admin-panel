import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';
import '../../styles/dashboard.css';

function FileUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const inputRef = useRef();

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    else if (e.type === 'dragleave') setDragActive(false);
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles([...files, ...Array.from(e.dataTransfer.files)]);
    }
  };

  // Handle file selection
  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  // Remove file
  const removeFile = (idx) => {
    setFiles(files.filter((_, i) => i !== idx));
  };

  // Simulate upload
  const handleUpload = () => {
    if (files.length === 0) return;
    // Simulate upload delay
    setTimeout(() => {
      setSuccessMsg('File(s) uploaded successfully!');
      console.log('Simulated upload:', files.map(f => ({ name: f.name, size: f.size })));
      setFiles([]);
    }, 800);
  };

  return (
    <div className="dashboard-content">
      <h2>File Upload</h2>
      <div
        className={`file-drop-zone${dragActive ? ' active' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
      >
        <FaCloudUploadAlt className="upload-icon" />
        <p>Drag & drop files here or <span className="browse-link" onClick={e => { e.stopPropagation(); inputRef.current.click(); }}>Browse Files</span></p>
        <input
          type="file"
          multiple
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleChange}
        />
      </div>
      {/* File List
      {files.length > 0 && (
        <div className="file-list">
          {files.map((file, idx) => (
            <div className="file-item" key={idx}>
              {file.type.startsWith('image') ? (
                <img src={URL.createObjectURL(file)} alt={file.name} className="file-thumb" />
              ) : (
                <FaFileAlt className="file-thumb file-icon" />
              )}
              <div className="file-info">
                <span className="file-name">{file.name}</span>
                <span className="file-size">{(file.size / 1024).toFixed(1)} KB</span>
              </div>
              <button className="remove-file-btn" onClick={() => removeFile(idx)}><FaTimes /></button>
            </div>
          ))}
        </div>
      )} */}
      {/* File List Table */}
      {files.length > 0 && (
        <div className="file-list-table-wrapper">
          <table className="file-list-table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, idx) => (
                <tr key={idx}>
                  <td>{file.name}</td>
                  <td>{(file.size / 1024).toFixed(1)} KB</td>
                  <td>
                    <button className="remove-file-btn" onClick={() => removeFile(idx)} title="Remove">
                      <text className="visually-hidden">Remove</text>
                      {/* <FaTimes /> */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Upload Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
        <button className="upload-btn" onClick={handleUpload} disabled={files.length === 0}>Upload</button>
      </div>
      {/* Success Message */}
      {successMsg && (
        <div className="upload-success-msg">
          <span>{successMsg}</span>
          <button className="dismiss-msg-btn" onClick={() => setSuccessMsg('')}><FaTimes /></button>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
