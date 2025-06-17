import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-blue-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      г. Москва, ул. Промышленная, 15
                      <br />
                      Промышленная зона "Северная"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon
                    name="Phone"
                    size={24}
                    className="text-green-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-gray-600">
                      +7 (495) 123-45-67 - основной
                      <br />
                      +7 (495) 123-45-68 - экстренный
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon
                    name="Mail"
                    size={24}
                    className="text-orange-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@techremont.ru
                      <br />
                      zakaz@techremont.ru
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon
                    name="Clock"
                    size={24}
                    className="text-purple-600 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-gray-600">
                      Пн-Пт: 8:00 - 18:00
                      <br />
                      Сб: 9:00 - 15:00
                      <br />
                      Вс: выходной
                      <br />
                      <span className="text-red-600 font-semibold">
                        Экстренный выезд: 24/7
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Оставить заявку</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2">Имя *</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      Тип услуги
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Выберите услугу</option>
                      <option>Ремонт техники</option>
                      <option>Аренда техники</option>
                      <option>Запчасти</option>
                      <option>Консультация</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Опишите вашу задачу..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-red-100 border border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <Icon name="AlertTriangle" size={32} className="text-red-600" />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Экстренный вызов
                </h3>
                <p className="text-red-700 mb-2">
                  При поломке техники на объекте звоните по номеру:
                  <span className="font-bold"> +7 (495) 123-45-68</span>
                </p>
                <p className="text-red-600 text-sm">
                  Выезд специалиста в течение 2 часов в радиусе 50 км от Москвы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
