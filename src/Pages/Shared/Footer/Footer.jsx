const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">EventBud</h2>
            <p className="text-gray-400">
              We are your premier event management company, dedicated to
              creating memorable experiences for your special occasions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <address className="text-gray-400">
              <p>Email: info@eventcompany.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Address: 123 Event Avenue, Cityville</p>
            </address>
          </div>
        </div>
        <div className="mt-4 text-center md:mt-8">
          <p>&copy; 2023 EventBud Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
