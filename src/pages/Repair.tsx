import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Repair = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Услуги ремонта
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Icon name="Truck" size={48} className="text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Строительно-дорожная техника
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Экскаваторы всех типов</li>
                <li>• Бульдозеры и грейдеры</li>
                <li>• Погрузчики фронтальные</li>
                <li>• Автокраны и башенные краны</li>
                <li>• Асфальтоукладчики</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Icon name="Mountain" size={48} className="text-green-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Горно-рудная техника</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Карьерные самосвалы</li>
                <li>• Драглайны и роторные экскаваторы</li>
                <li>• Буровые установки</li>
                <li>• Дробильно-сортировочное оборудование</li>
                <li>• Конвейерное оборудование</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <Icon name="Engine" size={48} className="text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Ремонт двигателей</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Дизельные двигатели</h3>
                <p className="text-gray-600">Капитальный и текущий ремонт</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Гидравлические системы</h3>
                <p className="text-gray-600">Диагностика и восстановление</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Трансмиссии</h3>
                <p className="text-gray-600">Ремонт коробок передач</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">
            Особенности наших услуг
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="MapPin"
                size={48}
                className="text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Выездной ремонт</h3>
              <p className="text-gray-600">
                Приезжаем на ваш объект в любую точку региона
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="Shield"
                size={48}
                className="text-green-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                12 месяцев гарантии на все виды работ
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="Clock"
                size={48}
                className="text-red-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Срочность</h3>
              <p className="text-gray-600">
                Экстренный выезд в течение 2 часов
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Repair;
