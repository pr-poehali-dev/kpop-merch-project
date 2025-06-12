import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Подпишись на новости K-POP!
            </h3>
            <p className="text-purple-100 mb-6">
              Узнавай первым о новых релизах, эксклюзивных товарах и скидках
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Твой email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                K-POP STORE
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Твой надёжный источник оригинальных K-POP товаров. Мы доставляем
              мечты поклонников по всей России.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                📘
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                📷
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                🐦
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white p-2"
              >
                📺
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2">
              {[
                "Альбомы",
                "Лайтстики",
                "Одежда",
                "Фотокарты",
                "Постеры",
                "Аксессуары",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              {[
                "Помощь покупателям",
                "Доставка и оплата",
                "Возврат товара",
                "Гарантия",
                "Часто задаваемые вопросы",
                "Связаться с нами",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>hello@kpopstore.ru</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1" />
                <span>
                  Москва, ул. Тверская, 1<br />
                  Ежедневно 10:00 - 22:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 K-POP Store. Все права защищены.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <div className="flex items-center space-x-1">
                <span>Сделано с</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>для K-POP фанов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
