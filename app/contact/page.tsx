"use client";

import { useState } from "react";
import Navigation from "@/app/components/Navbar";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé !");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navigation />
      <section className="max-w-4xl mx-auto px-6 py-16 text-[#fff]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Me Contacter</h1>
          <p className="text-lg text-gray-300">
            Une question, une collaboration ? N’hésitez pas à m’envoyer un
            message !
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-400">Nom</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-gray-900 text-white border border-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-gray-900 text-white border border-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 p-2 rounded bg-gray-900 text-white border border-gray-700"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition"
          >
            Envoyer
          </button>
        </form>
      </section>
    </>
  );
}
