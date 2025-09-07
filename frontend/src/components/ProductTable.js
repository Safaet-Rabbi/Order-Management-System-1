import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="data-table">
        <thead>
          <tr>
            <th>PRODUCT ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>PROD{product._id.substring(product._id.length - 6).toUpperCase()}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.countInStock}</td>
              <td className="action-buttons">
                <button onClick={() => onEdit(product)} className="edit-btn">
                  <MdEdit />
                </button>
                <button onClick={() => onDelete(product._id)} className="delete-btn">
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;