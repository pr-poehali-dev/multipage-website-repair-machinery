import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Equipment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Наше оборудование
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Современное оборудование для качественного ремонта техники
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Wrench" size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Диагностическое оборудование
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Компьютерная диагностика двигателей</li>
                <li>• Тестеры гидравлических систем</li>
                <li>• Приборы контроля давления</li>
                <li>• Эндоскопы для внутреннего осмотра</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Settings" size={48} className="text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Станочное оборудование</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Токарные станки различных размеров</li>
                <li>• Фрезерные и сверлильные станки</li>
                <li>• Плазменная резка металла</li>
                <li>• Сварочные аппараты Аргон/TIG</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Truck" size={48} className="text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Подъемное оборудование</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Мостовые краны до 20 тонн</li>
                <li>• Гидравлические домкраты</li>
                <li>• Лебедки и тали</li>
                <li>• Автоподъемники для выездных работ</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Zap" size={48} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Специализированные инструменты
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Гидравлические съемники</li>
                <li>• Прессы до 200 тонн</li>
                <li>• Инструмент для снятия гусениц</li>
                <li>• Специальные ключи и приспособления</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon
                name="CheckCircle"
                size={48}
                className="text-teal-600 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                Контрольно-измерительные приборы
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Нутромеры и микрометры</li>
                <li>• Манометры высокого давления</li>
                <li>• Твердомеры и толщиномеры</li>
                <li>• Лазерные измерители геометрии</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Icon name="Shield" size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Оборудование безопасности
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Системы вентиляции и очистки воздуха</li>
                <li>• Средства индивидуальной защиты</li>
                <li>• Противопожарное оборудование</li>
                <li>• Аварийные души и промывочные системы</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Наши возможности
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  500м²
                </div>
                <p className="text-gray-600">Площадь мастерских</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  20т
                </div>
                <p className="text-gray-600">Макс. грузоподъемность</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  24/7
                </div>
                <p className="text-gray-600">Экстренный выезд</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  15+
                </div>
                <p className="text-gray-600">Лет опыта работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
