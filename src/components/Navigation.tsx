import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Главная", path: "/", icon: "Home" },
    { name: "Ремонт", path: "/repair", icon: "Wrench" },
    { name: "Примеры работ", path: "/examples", icon: "Camera" },
    { name: "Запчасти", path: "/parts", icon: "Settings" },
    { name: "Аренда", path: "/rental", icon: "Truck" },
    { name: "Оборудование", path: "/equipment", icon: "Cog" },
    { name: "Контакты", path: "/contacts", icon: "MapPin" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ТехРемонт
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-gray-600">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
