import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center font-inter p-6">
            <div className="w-full max-w-[440px] flex flex-col items-center">
                {/* Logo */}
                <Link to="/" className="mb-12">
                    <img
                        src="/src/assets/clone-images/coinbaseLogoNavigation-4.svg"
                        alt="Coinbase"
                        className="h-8 md:h-10 invert brightness-0"
                    />
                </Link>

                {/* Form Container */}
                <div className="w-full">
                    <h1 className="text-white text-[28px] md:text-[32px] font-semibold mb-8 text-center tracking-tight">
                        Sign in to Coinbase
                    </h1>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email address"
                                className="w-full bg-[#1A1B1F] text-white border border-[#2D2E33] rounded-xl px-4 py-[16px] text-[16px] focus:outline-none focus:border-[#0052FF] transition-colors placeholder:text-[#5B616E]"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0052FF] text-white rounded-full py-[16px] text-[16px] font-bold hover:bg-blue-600 transition-colors cursor-pointer"
                        >
                            Continue
                        </button>
                    </form>

                    <div className="flex items-center my-8">
                        <div className="flex-grow border-t border-[#2D2E33]"></div>
                        <span className="px-4 text-[#5B616E] text-[13px] font-medium uppercase tracking-wider">or</span>
                        <div className="flex-grow border-t border-[#2D2E33]"></div>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full bg-[#1A1B1F] text-white border border-[#2D2E33] rounded-full py-[14px] text-[16px] font-semibold hover:bg-[#2D2E33] transition-colors cursor-pointer flex items-center justify-center gap-3">
                            Sign in with Passkey
                        </button>
                        <button className="w-full bg-[#1A1B1F] text-white border border-[#2D2E33] rounded-full py-[14px] text-[16px] font-semibold hover:bg-[#2D2E33] transition-colors cursor-pointer flex items-center justify-center gap-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Sign in with Google
                        </button>
                        <button className="w-full bg-[#1A1B1F] text-white border border-[#2D2E33] rounded-full py-[14px] text-[16px] font-semibold hover:bg-[#2D2E33] transition-colors cursor-pointer flex items-center justify-center gap-3">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5912 9.07923C16.5912 9.07923 16.5517 9.07923 16.5122 9.09886C14.7153 10.0805 13.9264 11.9458 14.0447 13.7915C14.1631 15.6372 15.5436 17.2078 17.3779 17.895C17.4371 17.9146 17.4765 17.9735 17.4568 18.0521C16.8257 19.9565 15.682 21.6057 14.0447 22.8229C13.236 23.4119 12.388 23.9027 11.4413 23.9027C10.4355 23.9027 9.58752 23.4119 8.77889 22.8229C7.12185 21.6057 5.99781 19.9565 5.36669 18.0521C5.34696 17.9735 5.3864 17.9146 5.44557 17.895C7.27985 17.2078 8.66037 15.6372 8.77876 13.7915C8.89715 11.9458 8.10821 10.0805 6.31135 9.09886C6.2719 9.07923 6.23246 9.07923 6.23246 9.07923C6.39023 8.70617 6.56774 8.35277 6.78468 8.019C8.36224 5.56475 11.0441 4.1511 13.9264 4.1511C15.228 4.1511 16.4901 4.54378 17.5945 5.25059C17.6537 5.28985 17.7326 5.27022 17.772 5.21132C18.6793 3.81734 20.2573 2.95345 21.9926 2.95345C22.0715 2.95345 22.1306 3.01235 22.1306 3.09088C22.1306 4.79901 21.401 6.31086 20.2177 7.29255C19.1922 8.1368 17.9301 8.64728 16.5912 9.07923Z" fill="white" />
                            </svg>
                            Sign in with Apple
                        </button>
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/signup" className="text-[#0052FF] font-semibold text-[15px] hover:underline">
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
