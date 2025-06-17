import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Rental = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Аренда строительной техники
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop"
                alt="Экскаватор"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Экскаваторы</h3>
              <p className="text-gray-600 mb-4">
                От мини-экскаваторов до тяжелых карьерных машин
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>От 2500 руб/смена</strong>
                </p>
                <p className="text-sm text-gray-600">
                  • Вместимость ковша: 0.5-5 м³
                </p>
                <p className="text-sm text-gray-600">• С оператором или без</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop"
                alt="Бульдозер"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Бульдозеры</h3>
              <p className="text-gray-600 mb-4">
                Надежные машины для земляных работ
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>От 3000 руб/смена</strong>
                </p>
                <p className="text-sm text-gray-600">
                  • Мощность: 100-400 л.с.
                </p>
                <p className="text-sm text-gray-600">• Планировка и зачистка</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
                alt="Кран"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Краны</h3>
              <p className="text-gray-600 mb-4">
                Автокраны и башенные краны различной грузоподъемности
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>От 4000 руб/смена</strong>
                </p>
                <p className="text-sm text-gray-600">
                  • Грузоподъемность: 10-100 т
                </p>
                <p className="text-sm text-gray-600">• Опытные крановщики</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Условия аренды</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">
                  Что включено в стоимость:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Техническое обслуживание</li>
                  <li>• Доставка на объект</li>
                  <li>• Топливо и смазочные материалы</li>
                  <li>• Страхование техники</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Процесс бронирования:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Заявка по телефону или онлайн</li>
                  <li>• Предоплата 30% от стоимости</li>
                  <li>• Доставка в согласованное время</li>
                  <li>• Инструктаж по эксплуатации</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rental;
