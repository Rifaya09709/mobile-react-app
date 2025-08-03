import iphone from "../assets/phone19.jpg";
import samsung from "../assets/phone2.jpg";
import pixel from "../assets/phone3.jpg";
import oneplus from "../assets/phone4.jpg";
import oppo from "../assets/phone6.png";
import vivo from "../assets/phone7.jpg";
import realme from "../assets/phone8.png";
import redmi from "../assets/phone10.jpg";
import honor from "../assets/phone11.jpg";
import motorola from "../assets/phone12.jpg";
import huawei from "../assets/phone13.jpg";
import asus from "../assets/phone14.jpg";
import nokia from "../assets/phone15.png";
import sony from "../assets/phone16.jpg";
import infinix from "../assets/phone17.jpg";

export default function Hero() {
  const phones = [
    { id: 1, name: "iPhone 14 Pro", image: iphone, brand: "Apple" },
    { id: 2, name: "Samsung Galaxy S23", image: samsung, brand: "Samsung" },
    { id: 3, name: "Google Pixel 8", image: pixel, brand: "Google" },
    { id: 4, name: "OnePlus 11R", image: oneplus, brand: "OnePlus" },
    { id: 5, name: "Oppo Reno 10", image: oppo, brand: "Oppo" },
    { id: 6, name: "Vivo V29 Pro", image: vivo, brand: "Vivo" },
    { id: 7, name: "Realme 11 Pro", image: realme, brand: "Realme" },
    { id: 8, name: "Redmi Note 12", image: redmi, brand: "Redmi" },
    { id: 9, name: "Honor 90", image: honor, brand: "Honor" },
    { id: 10, name: "Motorola Edge 40", image: motorola, brand: "Motorola" },
    { id: 11, name: "Huawei P60 Pro", image: huawei, brand: "Huawei" },
    { id: 12, name: "Asus ROG Phone 7", image: asus, brand: "Asus" },
    { id: 13, name: "Nokia X30", image: nokia, brand: "Nokia" },
    { id: 14, name: "Sony Xperia 1 V", image: sony, brand: "Sony" },
    { id: 15, name: "Infinix Zero 30", image: infinix, brand: "Infinix" },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-16 mt-28">
      {/* 🔥 Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 text-center mb-8">
        🔥 Explore Top Brands
      </h2>

      {/* 🔄 Scrollable Phone Logos */}
      <div className="overflow-x-auto flex gap-6 pb-6 border-b border-gray-200 mb-12 no-scrollbar">
        {phones.map((phone) => (
          <div key={phone.id} className="flex-shrink-0 w-[180px] text-center">
            <div className="text-xs text-gray-500 mb-1">#{phone.id}</div>
            <img
              src={phone.image}
              alt={phone.name}
              className="w-[180px] h-[180px] object-contain rounded-xl shadow-md hover:scale-105 transition-transform duration-300 mx-auto"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">
              {phone.name}
            </p>
          </div>
        ))}
      </div>

      {/* 🌟 Hero Message */}
      <div className="text-center space-y-5">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
          Discover Your Next Smartphone
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Browse the latest phones with powerful features and great deals. Shop
          smart and stay ahead.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}