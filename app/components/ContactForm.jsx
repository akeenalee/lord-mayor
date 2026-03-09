'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus({
        type: 'success',
        message: 'Thanks for reaching out. Your enquiry has been received and we will respond shortly.',
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to submit your enquiry right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-white p-6 sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Enquiry form</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">Send us a message</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Share your requirement and a member of our team will get back to you to discuss the right solution.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Full name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
              required
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-800">
            Email address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
              required
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-800">
            Phone number
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Optional"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-slate-800">
            Service of interest
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
              required
            >
              <option value="">Select a service</option>
              <option value="Travel">Travel</option>
              <option value="Construction">Construction</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Automobile">Automobile</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project, service request or business enquiry"
            rows="6"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
            required
          />
        </label>

        {status.message ? (
          <p
            className={`rounded-2xl px-4 py-3 text-sm ${
              status.type === 'success'
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-rose-50 text-rose-700'
            }`}
          >
            {status.message}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-slate-500">
            By sending this form, you agree that we may contact you using the details provided.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? 'Sending...' : 'Send enquiry'}
          </button>
        </div>
      </form>
    </div>
  );
}
