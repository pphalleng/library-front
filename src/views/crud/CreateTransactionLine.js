import React, { useState } from 'react';

const TransactionLineRecord = () => {
  const [records, setRecords] = useState([{id: '', transaction_id: '', book_id: '',  unit_price: '', qty_unit: '', total_price: '' }]);

  const handleInputChange = (index, event) => {
    const values = [...records];
    values[index][event.target.unit_price] = event.target.value;
    setRecords(values);
  };

  const handleAddFields = () => {
    setRecords([...records, { unit_price: '', qty_unit: '', total_price: '' }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...records];
    values.splice(index, 1);
    setRecords(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Records submitted:', records);
    // You can make an API call here to submit the records
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Multiple Transaction Line Records Here</h2>
      {records.map((record, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
            <select>
                type="text"
                transaction_id="transaction_id"
                placeholder="transaction_id"
                value={record.transaction_id}
                onChange={(event) => handleSubmit(index, event)}
                style={{ marginRight: '10px' }}
            </select>
            <select>
                type="text"
                book_id="book_id"
                placeholder="book_id"
                value={record.book_id}
                onChange={(event) => handleSubmit(index, event)}
                style={{ marginRight: '10px' }}
            </select>
          <input
            type="text"
            unit_price="unit_price"
            placeholder="unit_price"
            value={record.unit_price}
            onChange={(event) => handleInputChange(index, event)}
            style={{ marginRight: '10px' }}
          />
          <input
            type="qty_unit"
            unit_price="qty_unit"
            placeholder="qty_unit"
            value={record.qty_unit}
            onChange={(event) => handleInputChange(index, event)}
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            unit_price="total_price"
            placeholder="total_price"
            value={record.total_price}
            onChange={(event) => handleInputChange(index, event)}
            style={{ marginRight: '10px' }}
          />
          <button type="button" onClick={() => handleRemoveFields(index)} style={{ marginRight: '10px' }}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddFields}>
        Add More
      </button>
      <button type="submit" style={{ marginLeft: '10px' }}>
        Submit
      </button>
    </form>
  );
};

export default TransactionLineRecord;