import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6j718e7', // Replace with your service ID
      'template_unweb9l', // Replace with your template ID
      formData,
      'bQoNI03aqMsNbVLnk'     // Replace with your user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message, please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-lg">
          Feel free to reach out to me at <a href="mailto:skshreyakapil@gmail.com" className="text-blue-500">skshreyakapil@gmail.com</a>
        </p>
       
        <div className="mt-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-200">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring focus:border-blue-500"
                rows="5"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;