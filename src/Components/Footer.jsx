export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Press</a></li>
          </ul>
        </div>

        {/* Column 2: Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">iPhones</a></li>
            <li><a href="#" className="hover:text-blue-400">Android Phones</a></li>
            <li><a href="#" className="hover:text-blue-400">Accessories</a></li>
            <li><a href="#" className="hover:text-blue-400">Deals</a></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Shipping Info</a></li>
            <li><a href="#" className="hover:text-blue-400">Returns</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Support</a></li>
          </ul>
        </div>

        {/* Column 4: Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-4">Get the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 YourPhoneStore. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}