export default function Reviews() {
  const reviews = [
    { user: 'Ayesha', comment: 'Amazing product quality!' },
    { user: 'Ravi', comment: 'Delivery was super fast.' },
    { user: 'Sara', comment: 'Love the new iPhone!' },
  ]

  return (
    <section className="py-10 px-4 md:px-16 bg-white" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">💬 Customer Reviews</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="border p-4 rounded-lg shadow hover:scale-105 transition-transform"
          >
            <p className="text-gray-600 italic">“{r.comment}”</p>
            <p className="mt-2 font-semibold text-right">- {r.user}</p>
          </div>
        ))}
      </div>
    </section>
  )
}