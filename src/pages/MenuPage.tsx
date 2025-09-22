import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronUp, Phone } from 'lucide-react';
import { menuData, MenuCategory } from '../data/menuData';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const categories = ['all', ...menuData.map(cat => cat.category)];

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const filteredMenu = menuData.filter(category => {
    if (selectedCategory === 'all') return true;
    return category.category === selectedCategory;
  }).map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/menu_resimler/candymocoffee_2.webp')`
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Menümüz
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Özenle hazırlanmış özel karışımlarımız, taze malzemelerle yapılan içeceklerimiz ve 
            sıcak atmosferimizle size unutulmaz lezzetler sunuyoruz. Her yudum bir hikaye, 
            her içecek bir deneyim.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="İçecek ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base bg-gray-50 focus:bg-white transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-3 w-full">
              <Filter className="text-amber-600 flex-shrink-0" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base bg-gray-50 focus:bg-white transition-colors appearance-none bg-no-repeat bg-right pr-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="all">Tüm Kategoriler</option>
                {menuData.map((category) => (
                  <option key={category.category} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {filteredMenu.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Aradığınız kriterlere uygun içecek bulunamadı.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredMenu.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b border-gray-200 pb-4">
                    {category.category}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-w-16 aspect-h-12">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className={`w-full h-48 ${item.name === 'Espresso' ? 'object-contain transform -rotate-90' : 'object-cover'}`}
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
                            <span className="text-amber-600 font-bold text-xl">{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          {(category.category === "☕ Sıcak Kahveler" || category.category === "❄️ Soğuk Kahveler") && (
                            <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                              <div className="flex items-center mb-2">
                                <span className="text-amber-600 mr-2">✨</span>
                                <h4 className="font-semibold text-gray-800 text-sm">Süt Seçenekleri</h4>
                                <span className="text-amber-600 ml-2">✨</span>
                              </div>
                              <p className="text-xs text-gray-600 mb-3">Kahvenize özel bir dokunuş katın! 💫</p>
                              <div className="space-y-2 text-xs">
                                <div className="flex justify-between items-center">
                                  <span className="flex items-center">
                                    <span className="mr-2">🥛</span>
                                    <span className="text-gray-700">Laktosuz süt</span>
                                  </span>
                                  <span className="text-amber-600 font-semibold">+20₺</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="flex items-center">
                                    <span className="mr-2">🌰</span>
                                    <span className="text-gray-700">Badem sütü</span>
                                  </span>
                                  <span className="text-amber-600 font-semibold">+35₺</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="flex items-center">
                                    <span className="mr-2">🌾</span>
                                    <span className="text-gray-700">Yulaf sütü</span>
                                  </span>
                                  <span className="text-amber-600 font-semibold">+35₺</span>
                                </div>
                              </div>
                            </div>
                          )}
                          {category.category === "🍵 Çay ve Bitki Çayları" && (
                            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                              <div className="flex items-center mb-2">
                                <span className="text-yellow-600 mr-2">🍯</span>
                                <h4 className="font-semibold text-gray-800 text-sm">Ekstra Seçenek</h4>
                                <span className="text-yellow-600 ml-2">🍯</span>
                              </div>
                              <p className="text-xs text-gray-600 mb-3">Çayınıza doğal tatlılık katın! ✨</p>
                              <div className="flex justify-between items-center text-xs">
                                <span className="flex items-center">
                                  <span className="mr-2">🍯</span>
                                  <span className="text-gray-700">Doğal bal</span>
                                </span>
                                <span className="text-yellow-600 font-semibold">+20₺</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sipariş Vermek İçin Bizi Arayın
          </h2>
          <p className="text-gray-600 mb-6">
            Tüm içeceklerimizi telefon ile sipariş verebilir, hazır olduğunda gelip alabilirsiniz.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=905393479953&text&type=phone_number&app_absent=0"
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            <Phone size={20} />
            <span>Hemen Sipariş Ver</span>
          </a>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-110"
            aria-label="Yukarı çık"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;