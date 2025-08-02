// src/components/ScrollDot.jsx
import { BsDot } from "react-icons/bs";

export default function ScrollDot() {
  const scrollToReviews = () => {
    const el = document.getElementById("reviews");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 right-6 z-50">
      <button
        onClick={scrollToReviews}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        title="Go to Reviews"
      >
        <BsDot size={32} />
      </button>
    </div>
  );
}
