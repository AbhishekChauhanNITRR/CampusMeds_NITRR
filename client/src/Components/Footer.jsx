import appLogo from '/campusmeds_nitrr_logo.png';
import nitLogo from '../assets/logo2.png';


const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-700 py-8 px-6 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">

        {/* College Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <img src={nitLogo} alt="NIT Logo" className="w-20 h-20 object-contain mb-2" />
          <div className="text-sm leading-relaxed">
            <p className="font-semibold text-blue-700">NIT Raipur</p>
            <p>G.E. Road, Raipur, Chhattisgarh - 492010</p>
            <p>Email: info@nitrr.ac.in</p>
            <p>Phone: 0771-2254200</p>
          </div>
        </div>

        {/* App Info */}
        <div className="flex flex-col items-center text-center space-y-2 -mt-4">
          <img
            src={appLogo}
            alt="App Logo"
            className="w-16 h-16 rounded-full border-2 border-blue-300 shadow-md object-cover"
          />
          <div className="text-sm leading-relaxed">
            <p className="font-semibold text-blue-700">NIT Dispensary Portal</p>
            <p>Email: support@nitdispensary.app</p>
            <p>Phone: +91-987654xxxx</p>
          </div>
        </div>

        {/* Credits */}
        <div className="text-sm text-center md:text-right leading-relaxed -mt-6">
          <p>
            Made with <span className="text-red-500">❤️</span> by{' '}
            <span className="font-medium text-blue-700">Abhishek Chauhan</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
