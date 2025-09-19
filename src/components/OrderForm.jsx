import React, { useState } from 'react';

function OrderForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    stickerType: '',
    description: '',
    image: null,
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Order submitted!');
  };

  return (
    <form className="mx-2 md:mx-auto max-w-xl bg-white shadow-lg rounded-lg p-4 md:p-6 space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-lg md:text-2xl font-bold text-blue-800 text-center mb-2 md:mb-4">Place Your Sticker Order</h2>
      <input
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 text-sm"
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 text-sm"
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <select
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 text-sm"
        name="stickerType"
        value={form.stickerType}
        onChange={handleChange}
        required
      >
        <option value="">Select Sticker Type</option>
        <option>Water Label Sticker</option>
        <option>Wasir Falim</option>
        <option>Bike Side Box Matching Sticker</option>
        <option>Custom Design</option>
      </select>
      <textarea
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200 text-sm"
        name="description"
        placeholder="Describe your requirements"
        value={form.description}
        onChange={handleChange}
      />
      <input
        className="w-full px-3 py-2 border rounded text-sm"
        type="file"
        name="image"
        onChange={handleChange}
        accept="image/*"
      />
      <button className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition text-sm" type="submit">
        Submit Order
      </button>
    </form>
  );
}

export default OrderForm;
