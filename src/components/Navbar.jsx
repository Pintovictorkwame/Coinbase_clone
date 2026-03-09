import { useState } from 'react';
import { Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavigationDropdown from './NavigationDropdown';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <div className="sticky top-0 z-[60] bg-white border-b border-gray-100" onMouseLeave={() => setActiveMenu(null)}>
            <nav className="flex items-center justify-between px-6 py-4 lg:px-10 bg-white font-inter relative z-50">
                <div className="flex items-center gap-8">
                    <Link to="/" onMouseEnter={() => setActiveMenu(null)}>
                        <img
                            src="/src/assets/clone-images/coinbaseLogoNavigation-4.svg"
                            alt="Coinbase"
                            className="h-10 cursor-pointer"
                        />
                    </Link>
                    <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#0A0B0D]">
                        <Link to="/explore" className="hover:text-[#1652F0] transition-colors" onMouseEnter={() => setActiveMenu(null)}>Cryptocurrencies</Link>
                        <a href="#" className="hover:text-[#1652F0] transition-colors py-4" onMouseEnter={() => setActiveMenu('Individuals')}>Individuals</a>
                        <a href="#" className="hover:text-[#1652F0] transition-colors py-4" onMouseEnter={() => setActiveMenu('Businesses')}>Businesses</a>
                        <a href="#" className="hover:text-[#1652F0] transition-colors py-4" onMouseEnter={() => setActiveMenu('Institutions')}>Institutions</a>
                        <a href="#" className="hover:text-[#1652F0] transition-colors py-4" onMouseEnter={() => setActiveMenu('Developers')}>Developers</a>
                        <a href="#" className="hover:text-[#1652F0] transition-colors py-4" onMouseEnter={() => setActiveMenu('Company')}>Company</a>
                    </div>
                </div>
                <div className="flex items-center gap-4" onMouseEnter={() => setActiveMenu(null)}>
                    <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-300 hidden md:block">
                        <Search size={16} strokeWidth={2.5} />
                    </div>
                    <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-300 hidden md:block">
                        <Globe size={16} strokeWidth={2.5} />
                    </div>
                    <Link to="/login" className="bg-gray-100 text-black px-5 py-2.5 rounded-full text-[14px] font-bold hover:bg-gray-300 transition-all shadow-sm cursor-pointer inline-flex items-center justify-center">
                        Sign in
                    </Link>
                    <Link to="/signup" className="bg-[#0052FF] text-white px-5 py-2.5 rounded-full text-[14px] font-bold hover:bg-blue-700 transition-all shadow-sm cursor-pointer inline-flex items-center justify-center">
                        Sign up
                    </Link>
                </div>
            </nav>
            <NavigationDropdown activeMenu={activeMenu} />
        </div>
    );
};

export default Navbar;
