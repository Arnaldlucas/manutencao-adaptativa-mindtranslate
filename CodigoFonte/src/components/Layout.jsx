import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  BookOpen,
  HelpCircle,
  BarChart3,
  User,
  LogOut,
  Brain,
  Menu,
  X,
} from "lucide-react";

const NavItem = ({ to, icon: Icon, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors ${
        isActive ? "bg-blue-50 text-blue-600 font-semibold" : ""
      }`
    }
  >
    {Icon && <Icon size={20} />}
    {children}
  </NavLink>
);

export default function Layout() {
  const { currentUser, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Falha no logout:", error);
    }
  };

  if (!currentUser) {
    return null;
  }

  // Extrai o primeiro nome para uma saudação mais curta no dropdown.
  const userFirstName =
    currentUser.displayName?.split(" ")[0] || currentUser.email.split("@")[0];

  return (
    // 1. A cor de fundo foi REMOVIDA daqui. Agora é global.
    <div className="min-h-screen flex flex-col text-gray-800">
      {/* O header agora tem um leve backdrop-blur para um efeito mais moderno */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <Brain className="text-blue-600 w-8 h-8" />
            <h1 className="text-xl font-bold">MindTranslate</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <NavItem to="/dashboard" icon={BarChart3}>
              Início
            </NavItem>
            <NavItem to="/termos" icon={BookOpen}>
              Termos
            </NavItem>
            <NavItem to="/quiz" icon={HelpCircle}>
              Quiz
            </NavItem>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200/60 transition-colors">
                <User size={20} />
              </button>
              <div
                className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg p-2 text-sm
                              invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-30"
              >
                <div className="p-2">
                  {/* 2. Dados do dropdown agora são dinâmicos */}
                  <p className="font-semibold truncate">{userFirstName}</p>
                  <p className="text-gray-500 text-xs mb-2 truncate">
                    {currentUser.email}
                  </p>
                </div>
                <div className="border-t my-1"></div>
                <NavItem to="/perfil" icon={User}>
                  Meu Perfil
                </NavItem>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-500 gap-2 w-full text-left py-2 px-2 hover:bg-gray-100 rounded-md"
                >
                  <LogOut size={16} /> Sair
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-200/60"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t p-4 space-y-2">
            <NavItem
              to="/dashboard"
              icon={BarChart3}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </NavItem>
            <NavItem
              to="/termos"
              icon={BookOpen}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Termos
            </NavItem>
            <NavItem
              to="/quiz"
              icon={HelpCircle}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quiz
            </NavItem>
            <NavItem
              to="/perfil"
              icon={User}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Meu Perfil
            </NavItem>
          </nav>
        )}
      </header>

      {/* 3. A classe 'flex-1' garante que o main ocupe todo o espaço vago, empurrando o footer para baixo */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* 4. O footer agora não precisa de margem, pois o flexbox o posiciona corretamente. */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} MindTranslate. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}
