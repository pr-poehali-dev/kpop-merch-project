import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-yellow-300 font-medium">
                Новая коллекция прибыла!
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Весь мир
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                K-POP
              </span>
              в одном месте
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Эксклюзивные альбомы, лайтстики, одежда и аксессуары от любимых
              артистов. Быстрая доставка по всей России.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
              >
                Смотреть каталог
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Новинки недели
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm">
              <div className="flex items-center">
                <div className="flex -space-x-1 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-300 text-yellow-300"
                    />
                  ))}
                </div>
                <span className="text-purple-100">5.0 из 5</span>
              </div>
              <div className="text-purple-100">
                <span className="font-semibold text-white">12,000+</span>{" "}
                довольных покупателей
              </div>
            </div>
          </div>

          {/* Right Content - Featured Products */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
                    alt="Album"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-sm">Map of the Soul: 7</h3>
                  <p className="text-purple-200 text-xs">BTS</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300"
                    alt="Lightstick"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-sm">Army Bomb</h3>
                  <p className="text-purple-200 text-xs">Лайтстик</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300"
                    alt="Album"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-sm">THE ALBUM</h3>
                  <p className="text-purple-200 text-xs">BLACKPINK</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300"
                    alt="Clothing"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-sm">BTS Hoodie</h3>
                  <p className="text-purple-200 text-xs">Одежда</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
