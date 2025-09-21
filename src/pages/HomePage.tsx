import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Mail, ShoppingBag, Utensils } from 'lucide-react';
import { menuData } from '../data/menuData';

const HomePage = () => {
  // Ana sayfada öne çıkan ürünler
  const featuredProducts = [
    // Waffle
    menuData.find(cat => cat.category === "🍰 Tatlılar")?.items.find(item => item.name === "Klasik Waffle"),
    // Meyveli Kruvasan Sandwich
    menuData.find(cat => cat.category === "🍰 Tatlılar")?.items.find(item => item.name === "Meyveli Kruvasan Sandwich"),
    // Ice Latte
    menuData.find(cat => cat.category === "❄️ Soğuk Kahveler")?.items.find(item => item.name === "Ice Latte"),
    // Kavunlu Frozen
    menuData.find(cat => cat.category === "❄️ Frozen İçecekler")?.items.find(item => item.name === "Kavunlu Frozen"),
    // Ice Antep Fıstıklı Latte
    menuData.find(cat => cat.category === "❄️ Soğuk Kahveler")?.items.find(item => item.name === "Ice Pistachio Latte (Antep Fıstıklı Latte)"),
    // Rella Coco Star
    menuData.find(cat => cat.category === "🍰 Tatlılar")?.items.find(item => item.name === "Rella Coco Star")
  ].filter(Boolean); // undefined olanları filtrele

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://candymocoffee.com.tr/img/candymo2.png')`
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Kahve Tutkusunu Yaşayın
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Candy Mo'da özenle seçilmiş kahve çekirdekleri ve özel tariflerle hazırlanan içeceklerle 
            mükemmel kahve deneyimi yaşayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Menüyü İncele
            </Link>
            <a 
              href="https://api.whatsapp.com/send/?phone=905393479953&text&type=phone_number&app_absent=0" 
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold border-2 border-amber-600 hover:bg-amber-50 transition-colors"
            >
              Sipariş Ver
            </a>
          </div>
        </div>
      </section>

      {/* Featured Drinks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popüler Ürünler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En popüler ürünlerimizden bir seçki
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-48 ${product.name === 'Ice Antep Fıstıklı Latte (Antep Fıstıklı Latte)' ? 'object-cover' : 'object-cover'}`}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
                    <span className="text-amber-600 font-bold text-lg">{product.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/menu" 
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Tüm Menüyü Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Hakkımızda
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Metin */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Keyif Serüveni</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      CandyMo Coffee, her bir yudumu keyif serüvenine dönüştüren; sıcak, samimi ve özgün lezzetlerle dolu bir deneyim sunar.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Hikayeli Mekan</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Her damlasında kalite ve özgünlük, her köşesinde ayrı bir hikâye barındırır. Sizi, lezzet ve keyfin buluştuğu mekanımıza davet ediyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sağ taraf - Görsel */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Candy Mo Coffee Atmosfer" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              
              {/* Stats cards */}
              <div className="absolute -bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">100+</div>
                    <div className="text-xs text-gray-600">İçecek Çeşidi</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">5★</div>
                    <div className="text-xs text-gray-600">Müşteri Memnuniyeti</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">24/7</div>
                    <div className="text-xs text-gray-600">Kaliteli Hizmet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">İletişim</h2>
            <p className="text-gray-600">Bize ulaşın, sorularınızı yanıtlayalım</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-amber-600" size={20} />
                  <span className="text-gray-700">0539 347 99 53</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-amber-600" size={20} />
                  <span className="text-gray-700">İsmetpaşa mah. Turgut Özal Cad. No:1B</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-amber-600" size={20} />
                  <span className="text-gray-700">Her gün 11:00-01:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-amber-600" size={20} />
                  <span className="text-gray-700">destek@candymo.com.tr</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sosyal Medya</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/candymocoffee/" target="_blank" rel="noopener noreferrer" className="bg-amber-600 text-white p-3 rounded-lg hover:bg-amber-700 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.yemeksepeti.com/restaurant/d50p/candymo-coffee" target="_blank" rel="noopener noreferrer" className="bg-amber-600 text-white p-3 rounded-lg hover:bg-amber-700 transition-colors">
                  <Utensils size={24} />
                </a>
                <a href="https://tgoyemek.com/restoranlar/378819" target="_blank" rel="noopener noreferrer" className="bg-amber-600 text-white p-3 rounded-lg hover:bg-amber-700 transition-colors">
                  <ShoppingBag size={24} />
                </a>
              </div>
              <p className="text-gray-600 mt-4">
                Güncel kampanyalarımızı takip edin ve online sipariş verin!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Order Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://api.whatsapp.com/send/?phone=905393479953&text&type=phone_number&app_absent=0"
          className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors flex items-center space-x-2"
        >
          <Phone size={24} />
          <span className="hidden sm:inline font-semibold">Sipariş Ver</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;