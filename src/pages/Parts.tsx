import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Parts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Каталог запчастей
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Широкий ассортимент запчастей для строительной и горно-рудной
            техники
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Icon
                name="Settings"
                size={48}
                className="text-blue-600 mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">Двигатели</h3>
              <p className="text-sm text-gray-600">
                Поршни, кольца, вкладыши, прокладки
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Icon
                name="Cog"
                size={48}
                className="text-green-600 mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">Трансмиссия</h3>
              <p className="text-sm text-gray-600">
                Коробки передач, сцепления, приводы
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Icon
                name="Zap"
                size={48}
                className="text-orange-600 mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">Гидравлика</h3>
              <p className="text-sm text-gray-600">
                Насосы, цилиндры, шланги, фитинги
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Icon
                name="Circle"
                size={48}
                className="text-purple-600 mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">Ходовая</h3>
              <p className="text-sm text-gray-600">
                Гусеницы, катки, звездочки, башмаки
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Категории запчастей
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">
                  Строительно-дорожная техника
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Экскаваторы</h4>
                    <p className="text-sm text-gray-600">
                      CAT, Komatsu, JCB, Hitachi, Volvo
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Бульдозеры</h4>
                    <p className="text-sm text-gray-600">
                      CAT, Komatsu, Liebherr, Dressta
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Погрузчики</h4>
                    <p className="text-sm text-gray-600">
                      CAT, JCB, Case, New Holland
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-green-600">
                  Горно-рудная техника
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Карьерные самосвалы</h4>
                    <p className="text-sm text-gray-600">
                      CAT, Komatsu, Volvo, Scania
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Буровые установки</h4>
                    <p className="text-sm text-gray-600">
                      Atlas Copco, Sandvik, Furukawa
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Дробилки</h4>
                    <p className="text-sm text-gray-600">
                      Metso, Sandvik, Terex
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Процесс заказа</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Поиск запчасти</h3>
                <p className="text-sm text-gray-600">
                  По модели техники или номеру детали
                </p>
              </div>

              <div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Проверка наличия</h3>
                <p className="text-sm text-gray-600">
                  Уточняем наличие и сроки поставки
                </p>
              </div>

              <div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Оформление</h3>
                <p className="text-sm text-gray-600">
                  Составляем договор и счет
                </p>
              </div>

              <div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Доставка</h3>
                <p className="text-sm text-gray-600">
                  Доставляем в удобное время
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parts;
