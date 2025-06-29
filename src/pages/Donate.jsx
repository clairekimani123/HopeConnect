import React, { useState } from 'react';

const DonatePage = () => {
  const [donationType, setDonationType] = useState('Money');
  const [recipientGroup, setRecipientGroup] = useState('Refugees');
  const [formData, setFormData] = useState({ amount: '', phone: '', description: '', name: '', email: '' });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!", { donationType, recipientGroup, ...formData });
    alert("Thank you for your generosity! (This is a demo)");
  };

  return (
    <div className="pt-20">
      <section className="max-w-4xl mx-auto px-4 py-10 rounded-2xl">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Make a Donation</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Your contribution, no matter the size, creates a world of difference.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 rounded-2xl shadow-2xl p-4">
          
          {/* Donation Type */}
          <div>
            <h2 className="text-xl font-semibold mb-4">1. Choose Donation Type</h2>
            <div className="flex flex-wrap gap-4">
              {['Money', 'Food', 'Clothes', 'Other'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setDonationType(type)}
                  className={`px-4 py-2 rounded-full border transition ${
                    donationType === type
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Recipient Group */}
          <div>
            <h2 className="text-xl font-semibold mb-4">2. Choose Recipient Group</h2>
            <div className="flex flex-wrap gap-4">
              {['Refugees', 'Orphans', 'Street Families', 'War-affected'].map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => setRecipientGroup(group)}
                  className={`px-4 py-2 rounded-full border transition ${
                    recipientGroup === group
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>

          {/* Donation Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">3. Donation Details</h2>
            {donationType === 'Money' ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone Number (for M-Pesa)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., 0712345678"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="amount" className="block mb-2 font-medium">Amount (KES)</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="e.g., 1000"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor="description" className="block mb-2 font-medium">Describe your donation</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder='e.g., "Winter jackets, kids sizes"'
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                ></textarea>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">4. Your Details</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition"
          >
            Proceed with Donation
          </button>
          
        </form>
      </section>
    </div>
  );
};

export default DonatePage;
