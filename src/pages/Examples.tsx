import Navigation from "@/components/Navigation";

const Examples = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Примеры выполненных работ
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Портфолио наших проектов по ремонту строительной техники
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop"
                alt="Ремонт экскаватора"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Капитальный ремонт экскаватора CAT 320
                </h3>
                <p className="text-gray-600 mb-4">
                  Полное восстановление двигателя и гидравлической системы
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Срок выполнения:</strong> 14 дней
                  </p>
                  <p>
                    <strong>Заказчик:</strong> ООО "СтройТехника"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
                alt="Ремонт крана"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Восстановление автокрана 25 тонн
                </h3>
                <p className="text-gray-600 mb-4">
                  Ремонт стрелового оборудования и системы управления
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Срок выполнения:</strong> 10 дней
                  </p>
                  <p>
                    <strong>Заказчик:</strong> ИП Петров
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop"
                alt="Ремонт бульдозера"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Модернизация бульдозера Komatsu
                </h3>
                <p className="text-gray-600 mb-4">
                  Установка новой системы управления и замена ходовой части
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Срок выполнения:</strong> 18 дней
                  </p>
                  <p>
                    <strong>Заказчик:</strong> ООО "ГорРуд"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Отзывы клиентов
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-blue-600">АС</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Александр Смирнов</h4>
                    <p className="text-sm text-gray-600">
                      Директор ООО "СтройТехника"
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Отличная работа! Экскаватор после ремонта работает как новый.
                  Сроки соблюдены, качество на высоте. Обязательно обратимся
                  еще."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-green-600">МК</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Михаил Козлов</h4>
                    <p className="text-sm text-gray-600">
                      Главный инженер "ГорРуд"
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Профессиональный подход к делу. Быстро диагностировали
                  проблему и предложили оптимальное решение. Рекомендую!"
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examples;
