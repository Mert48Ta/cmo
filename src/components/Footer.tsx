import React from 'react';
import { Instagram, ShoppingBag, MapPin, Phone, Clock, Mail, Utensils } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo ve Başlık */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <img 
              src="https://candymocoffee.com.tr/img/Logo.png" 
              alt="Candy Mo Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Candy Mo</h3>
              <p className="text-amber-400 text-sm font-medium">Coffee & More</p>
            </div>
          </div>
          <p className="text-gray-400 text-lg">
            Kahve tutkusuyla, kaliteli hizmet anlayışıyla
          </p>
        </div>

        {/* İletişim Bilgileri Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Konum */}
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <MapPin className="text-amber-400" size={24} />
            </div>
            <h4 className="font-semibold text-white mb-2">Konum</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              İsmetpaşa mah.<br />
              Turgut Özal Cad. No:1B
            </p>
          </div>

          {/* Çalışma Saatleri */}
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Clock className="text-amber-400" size={24} />
            </div>
            <h4 className="font-semibold text-white mb-2">Çalışma Saatleri</h4>
            <p className="text-gray-300 text-sm">
              Her gün<br />
              11:00 - 01:00
            </p>
          </div>

          {/* İletişim */}
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Phone className="text-amber-400" size={24} />
            </div>
            <h4 className="font-semibold text-white mb-2">Telefon</h4>
            <a 
              href="https://api.whatsapp.com/send/?phone=905393479953&text&type=phone_number&app_absent=0"
              className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
            >
              0539 347 99 53
            </a>
          </div>

          {/* E-mail */}
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Mail className="text-amber-400" size={24} />
            </div>
            <h4 className="font-semibold text-white mb-2">E-mail</h4>
            <a 
              href="mailto:destek@candymo.com.tr"
              className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
            >
              destek@candymo.com.tr
            </a>
          </div>
        </div>

        {/* Sosyal Medya */}
        <div className="text-center mb-8">
          <h4 className="font-semibold text-white mb-4">Bizi Takip Edin</h4>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.instagram.com/candymocoffee/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.yemeksepeti.com/restaurant/d50p/candymo-coffee" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors transform hover:scale-110"
            >
              <Utensils size={24} />
            </a>
            <a 
              href="https://tgoyemek.com/restoranlar/378819" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 transition-colors transform hover:scale-110"
            >
              <ShoppingBag size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Güncel kampanyalarımızı takip edin ve farklı platformlardan sipariş verin!
          </p>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Candy Mo Coffee. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;