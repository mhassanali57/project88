"use client";

const Contact = () => {
  return (
    <section className="max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <button
        onClick={() => alert("PAIB team will contact you soon!")}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Contact PAIB
      </button>
    </section>
  );
};

export default Contact;
