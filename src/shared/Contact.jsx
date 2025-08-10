import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    // Here you would typically send data to a backend or API
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-green-700 mb-8 text-center">
        Contact Us
      </h2>
      <p className="text-center text-gray-700 mb-10">
        Have questions or want to get involved? Send us a message!
      </p>

      {submitted && (
        <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Thank you for your message. We'll get back to you soon!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-6">
          <label htmlFor="name" className="block text-green-800 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-600 mt-1 text-sm">{errors.name}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-green-800 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your email"
          />
          {errors.email && (
            <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-green-800 font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your message"
          ></textarea>
          {errors.message && (
            <p className="text-red-600 mt-1 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md shadow-md transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
