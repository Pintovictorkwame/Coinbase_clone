import { Link } from 'react-router-dom';

const NavigationDropdown = ({ activeMenu }) => {
    if (!activeMenu) return null;

    const menus = {
        Individuals: {
            items: [
                { title: "Buy and sell", description: "Buy, sell, and use crypto" },
                { title: "Base App", "description": "Post, earn, trade, and chat, all in one place" },
                { title: "Coinbase One", "description": "Get zero trading fees and more" },
                { title: "Private Client", description: "For trusts, family offices, UHNWIs" },
                { title: "Onchain", description: "Dive into the world of onchain apps" },
                { title: "Advanced", description: "Professional-grade trading tools" },
                { title: "Earn", description: "Stake your crypto and earn rewards" },
                { title: "Coinbase Wealth", description: "Institutional-grade services for UHNW" },
                { title: "Credit Card", description: "Earn up to 4% bitcoin back" },
                { title: "Debit Card", description: "Spend crypto, get crypto back" }
            ],
            feature_card: {
                title: "System Update 2025",
                description: "The next chapter of Coinbase. Live on X 12/17.",
                link: "Learn more",
                image: "navigation-upsell.png"
            }
        },
        Businesses: {
            items: [
                { title: "Business", description: "Crypto trading and payments for startups and SMBs" },
                { title: "Asset Listings", description: "List your asset on Coinbase" },
                { title: "Payments", description: "The stablecoin payments stack for commerce platforms" },
                { title: "Token Manager", description: "The platform for token distributions, vesting, and lockups" }
            ],
            feature_card: {
                title: "Commerce Payments Protocol",
                description: "A new standard for onchain payments.",
                link: "Go to Payments",
                image: "onchain_payment_protocol.png"
            }
        },
        Institutions: {
            sections: [
                {
                    title: "Prime",
                    items: [
                        { title: "Trading and Financing", description: "Professional prime brokerage services" },
                        { title: "Custody", description: "Securely store all your digital assets" },
                        { title: "Staking", description: "Explore staking across our products" },
                        { title: "Onchain Wallet", description: "Institutional-grade wallet to get onchain" }
                    ]
                },
                {
                    title: "Markets",
                    items: [
                        { title: "Exchange", description: "Spot markets for high-frequency trading" },
                        { title: "International Exchange", description: "Access perpetual futures markets" },
                        { title: "Derivatives Exchange", description: "Trade an accessible futures market" },
                        { title: "Verified Pools", description: "Transparent, verified liquidity pools" }
                    ]
                }
            ],
            feature_card: {
                title: "Our clients",
                description: "Trusted by institutions and government.",
                link: "Learn more",
                image: "institutions_upsell.png"
            }
        },
        Developers: {
            sections: [
                {
                    title: "Coinbase Developer Platform",
                    items: [
                        { title: "Payments", "description": "Fast and global stablecoin payments with a single integration" },
                        { title: "Trading", "description": "Launch crypto trading and custody for your users" },
                        { title: "Wallets", "description": "Deploy customizable and scalable wallets for your business" },
                        { title: "Stablecoins", "description": "Access USDC and Coinbase Custom Stablecoins" }
                    ]
                },
                {
                    title: "Solutions for any company",
                    items: [
                        { title: "Banks & Brokerages", description: "Secure, regulated offerings for retail, private banking, & institutional clients" },
                        { title: "Payment Firms", description: "Near-instant, low-cost, global payment rails for modern providers" },
                        { title: "Startups", description: "Launch your business with the world's leader in crypto" }
                    ]
                }
            ],
            feature_card: {
                title: "World class crypto infrastructure.",
                description: "Discover Coinbase's complete crypto-as-a-service platform.",
                link: "Learn more",
                image: "developers_upsell_cdxv2_2.jpg"
            }
        },
        Company: {
            items: [
                { title: "About", description: "Powering the crypto economy" },
                { title: "Careers", description: "Work with us" },
                { title: "Affiliates", description: "Help introduce the world to crypto" },
                { title: "Support", description: "Find answers to your questions" },
                { title: "Blog", description: "Read the latest from Coinbase" },
                { title: "Security", description: "The most trusted & secure" }
            ],
            feature_card: {
                title: "Learn all about Coinbase",
                description: "We're building the open financial system.",
                link: "Create your account",
                image: "company_upsell.png",
                path: "/signup"
            }
        }
    };

    const menuData = menus[activeMenu];
    if (!menuData) return null;

    return (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl z-40 transition-all duration-300 ease-in-out font-inter flex justify-center">
            <div className="max-w-[1440px] w-full px-6 py-8 flex gap-12">
                {/* Main Menu Links Area */}
                <div className="flex-grow">

                    {/* Flat List (e.g. Individuals, Businesses, Company) */}
                    {menuData.items && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                            {menuData.items.map((item) => (
                                <Link key={item.title} to="/explore" className="block group cursor-pointer hover:bg-gray-50 p-2 rounded-lg -ml-2 transition-colors">
                                    <div className="font-semibold text-[#0A0B0D] text-[15px] group-hover:text-[#1652F0] transition-colors">
                                        {item.title}
                                    </div>
                                    <div className="text-[#5B616E] text-[13px] mt-1 leading-snug">
                                        {item.description}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Sectioned List (e.g. Institutions, Developers) */}
                    {menuData.sections && (
                        <div className="flex flex-row gap-16">
                            {menuData.sections.map((section) => (
                                <div key={section.title} className="flex-1">
                                    <h3 className="text-[#5B616E] text-[13px] font-bold uppercase tracking-widest mb-4">
                                        {section.title}
                                    </h3>
                                    <div className="flex flex-col gap-5">
                                        {section.items.map((item) => (
                                            <Link key={item.title} to="/explore" className="block group cursor-pointer hover:bg-gray-50 p-2 rounded-lg -ml-2 transition-colors">
                                                <div className="font-semibold text-[#0A0B0D] text-[15px] group-hover:text-[#1652F0] transition-colors flex items-center gap-2">
                                                    {item.title}
                                                </div>
                                                <div className="text-[#5B616E] text-[13px] mt-1 leading-snug">
                                                    {item.description}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Feature Side Card */}
                {menuData.feature_card && (
                    <div className="w-[320px] bg-[#F4F6F8] rounded-[16px] shrink-0 flex flex-col overflow-hidden">
                        {menuData.feature_card.image && (
                            <img
                                src={`/assets/clone-images/${menuData.feature_card.image}`}
                                alt={menuData.feature_card.title}
                                className="w-full h-[180px] object-cover"
                            />
                        )}
                        <div className="p-8 flex flex-col justify-between flex-grow">
                            <div>
                                <h4 className="text-[20px] font-bold text-[#0A0B0D] tracking-tight leading-tight mb-3">
                                    {menuData.feature_card.title}
                                </h4>
                                <p className="text-[#5B616E] text-[15px] leading-relaxed">
                                    {menuData.feature_card.description}
                                </p>
                            </div>

                            <Link to={menuData.feature_card.path || "/explore"} className="mt-8 text-[#1652F0] font-bold text-[15px] flex items-center gap-2 hover:gap-3 transition-all group">
                                {menuData.feature_card.link} <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavigationDropdown;
