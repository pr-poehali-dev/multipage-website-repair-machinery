import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Профессиональный ремонт строительной техники
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Специализируемся на ремонте строительно-дорожной и горно-рудной
            техники. Выездной ремонт, гарантия качества, срочное восстановление.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/repair"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Заказать ремонт
            </Link>
            <Link
              to="/contacts"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/repair"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon name="Wrench" size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Ремонт техники</h3>
              <p className="text-gray-600 mb-4">
                Строительно-дорожная и горно-рудная техника, двигатели. Выездной
                ремонт и срочное восстановление.
              </p>
              <span className="text-blue-600 font-semibold">Подробнее →</span>
            </Link>

            <Link
              to="/rental"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon name="Truck" size={48} className="text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Аренда</h3>
              <p className="text-gray-600 mb-4">
                Экскаваторы, бульдозеры, краны. Надежная техника для ваших
                проектов.
              </p>
              <span className="text-green-600 font-semibold">Подробнее →</span>
            </Link>

            <Link
              to="/parts"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon
                name="Settings"
                size={48}
                className="text-orange-600 mb-4"
              />
              <h3 className="text-xl font-bold mb-4">Запчасти</h3>
              <p className="text-gray-600 mb-4">
                Широкий ассортимент запчастей для строительной и горно-рудной
                техники.
              </p>
              <span className="text-orange-600 font-semibold">Подробнее →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Работаем с техникой
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Экскаваторы</h3>
              <p className="text-gray-600">
                Ремонт и аренда экскаваторов всех типов
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Construction"
                  size={40}
                  className="text-green-600"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Бульдозеры</h3>
              <p className="text-gray-600">
                Профессиональное обслуживание бульдозеров
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Building2" size={40} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Краны</h3>
              <p className="text-gray-600">Ремонт и техобслуживание кранов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши клиенты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="Building"
                size={48}
                className="text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Строительные компании</h3>
              <p className="text-gray-600">
                Комплексное обслуживание строительной техники
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="Mountain"
                size={48}
                className="text-green-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                Горно-рудные предприятия
              </h3>
              <p className="text-gray-600">
                Специализированный ремонт горной техники
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="User"
                size={48}
                className="text-orange-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Частные лица</h3>
              <p className="text-gray-600">
                Индивидуальный подход к каждому клиенту
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 ТехРемонт. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
