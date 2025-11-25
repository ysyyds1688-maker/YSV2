import { Link, useLocation } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';

const YSLogo = () => (
  <div className="relative group flex items-center justify-center">
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse-glow"></div>
    <div className="relative flex items-center">
      <span className="text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 mr-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        YS
      </span>
      <span className="font-bold text-white tracking-wide text-sm border-l-2 border-slate-600 pl-2 ml-1 hidden sm:block">
        娛樂論壇
      </span>
    </div>
  </div>
);

export const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'YS 首頁' },
    { path: '/games', label: '遊戲專區' },
    { path: '/guides/register', label: '新手教學' },
    { path: '/promotions', label: '優惠活動' },
    { path: '/news', label: '最新消息' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-slate-950/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-slate-800 shadow-2xl shadow-cyan-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer focus:outline-none hover:scale-105 transition-transform duration-300">
            <YSLogo />
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-cyan-950 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] scale-105'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Search size={20} />
            </button>
            <button className="md:hidden p-2 text-slate-400 hover:text-white">
              <Menu size={20} />
            </button>
            <Link
              to="/register"
              className="hidden md:block bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-fuchsia-900/50 border border-fuchsia-500/30 hover:scale-105 active:scale-95"
            >
              VIP 登入
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

