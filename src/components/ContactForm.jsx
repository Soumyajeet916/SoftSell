import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../index.css'; 
import ZoomOutCard from './ZoomOutCard';
import { useTheme } from '../context/ThemeContext';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.company) newErrors.company = 'Company is required';
    if (!form.licenseType) newErrors.licenseType = 'Select a license type';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert('Form submitted (dummy Form)');
      setForm({ name: '', email: '', company: '', licenseType: '', message: '' });
    }
    };
    const { darkMode } = useTheme();
  return (
    <section id="contact" className="py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6" >
            <ZoomOutCard>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
</ZoomOutCard>
<ZoomOutCard>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          </ZoomOutCard>
<ZoomOutCard>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Company</label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>
          </ZoomOutCard>
<ZoomOutCard>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">License Type</label>
            
            <select
              value={form.licenseType}
              onChange={(e) => setForm({ ...form, licenseType: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select a type</option>
              <option value="Office Suite">Office Suite</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Design Software">Design Software</option>
                <option value="Development Tools">Development Tools</option>
                <option value="Operating System">Operating System</option>
                <option value="Cloud Services">Cloud Services</option>
                <option value="Database Software">Database Software</option>
                <option value="Virtualization Software">Virtualization Software</option>
              <option value="Other">Other</option>
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
          </div>
</ZoomOutCard>
<ZoomOutCard>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
</ZoomOutCard>
<ZoomOutCard>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            Submit
          </button>
          </ZoomOutCard>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
