export interface MenuItem {
  name: string;
  price: string;
  description: string;
  image?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "☕ Sıcak Kahveler",
    items: [
      // { name: "Espresso", price: "90₺", description: "Tek shot espresso", image: "/src/menu_resimler/single_espresso.webp" },
      
      { name: "Single Espresso", price: "100₺", description: "Single shot espresso", image: "menu_resimler/double_espresso.webp" },
      { name: "Double Espresso", price: "120₺", description: "Çift shot espresso", image: "menu_resimler/double_espresso.webp" },
      { name: "Espresso Macchiato", price: "125₺", description: "Espresso üzeri süt köpüğü", image: "menu_resimler/espresso_machiato.webp" },
      { name: "Cafe Americano", price: "150₺", description: "Espresso ve sıcak su", image: "menu_resimler/filtre_kahve.webp" },
      { name: "Sütlü Americano", price: "160₺", description: "Espresso, sıcak su ve süt", image: "menu_resimler/sütlü_americano.webp" },
      { name: "Berry Chocolate", price: "180₺", description: "Çikolata ve meyve aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Cafe Mocha", price: "180₺", description: "Espresso, süt ve çikolata", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "White Chocolate Mocha", price: "180₺", description: "Espresso, süt ve beyaz çikolata", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Roasted White Mocha", price: "180₺", description: "Kavrulmuş beyaz çikolatalı mocha", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Cappuccino", price: "170₺", description: "Espresso, süt ve süt köpüğü", image: "menu_resimler/chaphiçino.webp" },
      
      { name: "Cafe Latte", price: "165₺", description: "Espresso ve buharla ısıtılmış süt", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "CanydMo Latte", price: "180₺", description: "Muz ve Hindistan Cevizi", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Caramel Latte", price: "180₺", description: "Karamel aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Antep Fıstıklı Latte", price: "180₺", description: "Antep fıstığı aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Salted Caramel Latte", price: "180₺", description: "Tuzlu karamel aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Butterscotch Latte (Tereyağlı Karamel)", price: "180₺", description: "Tereyağlı karamel aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Cheesecake Latte", price: "180₺", description: "Cheesecake aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Vanilya Latte", price: "180₺", description: "Vanilya aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Toffeenut Latte", price: "180₺", description: "Toffeenut aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      // { name: "Pumpkin Latte", price: "180₺", description: "Balkabağı aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      // { name: "Salted Pumpkin Latte", price: "180₺", description: "Tuzlu balkabağı aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Caramel Cookie Latte", price: "180₺", description: "Karamel kurabiye aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Hazelnut Latte", price: "180₺", description: "Fındık aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Coconut Latte", price: "180₺", description: "Hindistan cevizi aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Pikan Cevizli Latte", price: "180₺", description: "Pikan cevizi aromalı latte", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Latte Macchiato", price: "160₺", description: "Süt üzeri espresso", image: "menu_resimler/latte_(genel_foto).webp" },
      { name: "Caramel Macchiato", price: "180₺", description: "Karamel aromalı latte macchiato", image: "menu_resimler/flat_white.webp" },
      { name: "Flat White", price: "140₺", description: "İnce süt köpüklü espresso", image: "menu_resimler/flat_white.webp" },
      { name: "Cortado", price: "150₺", description: "İnce süt köpüklü espresso", image: "menu_resimler/flat_white.webp" },
      { name: "Demleme Filtre Kahve", price: "150₺", description: "Taze demlenmiş filtre kahve", image: "menu_resimler/filtre_kahve.webp" },
      { name: "Sütlü Filtre Kahve", price: "160₺", description: "Sütlü filtre kahve", image: "menu_resimler/filtre_kahve.webp" }
    ]
  },
  {
    category: "❄️ Soğuk Kahveler",
    items: [
      { name: "Affogato", price: "160₺", description: "Dondurma üzerine sıcak espresso", image: "menu_resimler/afagato.webp" },
      { name: "Ice Pistachio Latte (Antep Fıstıklı Latte)", price: "175₺", description: "Antep fıstığı aromalı soğuk latte", image: "menu_resimler/ice_antep_fıstıklı_latte.webp" },
      { name: "Ice Berry Chocolate", price: "175₺", description: "Meyve ve çikolata aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Roasted White Mocha", price: "175₺", description: "Kavrulmuş beyaz çikolatalı soğuk latte", image: "menu_resimler/ice_white_mocha.webp" },
      { name: "Ice Americano", price: "150₺", description: "Soğuk americano", image: "menu_resimler/ice_americano.webp" },
      { name: "Ice Latte", price: "160₺", description: "Klasik soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Caramel Latte", price: "175₺", description: "Karamel aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Toffenut Latte", price: "175₺", description: "Toffeenut aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Coconut Latte", price: "175₺", description: "Hindistan cevizi aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Salted Caramel Latte", price: "175₺", description: "Tuzlu karamel aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Chesscake Latte", price: "175₺", description: "Cheesecake aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Butterscotch Latte (Tereyağlı Karamel)", price: "175₺", description: "Tereyağlı karamel aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Hazelnut Latte", price: "175₺", description: "Fındık aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Pikan Cevizli Latte", price: "175₺", description: "Pikan cevizi aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Vanilya Latte", price: "175₺", description: "Vanilya aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Mocha", price: "175₺", description: "Çikolata aromalı soğuk latte", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice White Chocolate Mocha", price: "175₺", description: "Beyaz çikolata aromalı soğuk latte", image: "menu_resimler/ice_white_mocha.webp" },
      { name: "Ice Caramel Macchiato", price: "175₺", description: "Karamel aromalı soğuk macchiato", image: "menu_resimler/ice_latte_genel_foto.webp" },
      { name: "Ice Filtre Kahve", price: "140₺", description: "Soğuk filtre kahve", image: "menu_resimler/ice_filtre_kahve.webp" }
    ]
  },
  {
    category: "☕ Türk Kahvesi, Sıcak Çikolata ve Salep",
    items: [
      { name: "Türk Kahvesi", price: "90₺", description: "Geleneksel Türk kahvesi", image: "menu_resimler/türk_kahvesi.webp" },
      { name: "Double Türk Kahvesi", price: "110₺", description: "Çift fincan Türk kahvesi", image: "menu_resimler/double_türk_kahvesi.webp" },
      { name: "Türk Kahvesi (Süvari)", price: "100₺", description: "Süvari usulü Türk kahvesi", image: "menu_resimler/türk_kahvesi.webp" },
      { name: "Sütlü Türk Kahvesi", price: "100₺", description: "Sütlü Türk kahvesi", image: "menu_resimler/türk_kahvesi.webp" },
      { name: "Double Sütlü Türk Kahvesi", price: "120₺", description: "Çift fincan sütlü Türk kahvesi", image: "menu_resimler/double_türk_kahvesi.webp" },
      { name: "Damla Sakızlı Türk Kahvesi", price: "95₺", description: "Damla sakızı aromalı Türk kahvesi", image: "menu_resimler/türk_kahvesi.webp" },
      { name: "Double Damla Sakızlı Türk Kahvesi", price: "110₺", description: "Çift fincan damla sakızlı Türk kahvesi", image: "menu_resimler/double_türk_kahvesi.webp" },
      { name: "Dibek Kahvesi", price: "95₺", description: "Dibek usulü Türk kahvesi", image: "menu_resimler/türk_kahvesi.webp" },
      { name: "Double Dibek Kahvesi", price: "110₺", description: "Çift fincan dibek kahvesi", image: "menu_resimler/double_türk_kahvesi.webp" },
      { name: "Sütlü Menengiç Kahvesi", price: "100₺", description: "Sütlü menengiç kahvesi", image: "menu_resimler/türk_kahvesi.webp" },
      { name: "Double Sütlü Menengiç Kahvesi", price: "120₺", description: "Çift fincan sütlü menengiç kahvesi", image: "menu_resimler/double_türk_kahvesi.webp" },
      { name: "Salep", price: "150₺", description: "Geleneksel Türk salepi", image: "menu_resimler/salep.webp" },
      { name: "Sıcak Çikolata", price: "150₺", description: "Zengin sıcak çikolata", image: "menu_resimler/sıcak_çikolata.webp" }
    ]
  },
  {
    category: "🍵 Çay ve Bitki Çayları",
    items: [
      { name: "Bardak Çay", price: "50₺", description: "Klasik Türk çayı", image: "menu_resimler/çay.webp" },
      { name: "Fincan Çay", price: "70₺", description: "Fincan içinde Türk çayı", image: "menu_resimler/fincan_çay.webp" },
      { name: "Ada Çayı", price: "150₺", description: "Ferahlatıcı ada çayı", image: "menu_resimler/bitki_çayları_(genel_foto).webp" },
      { name: "Kış Çayı", price: "150₺", description: "Özel kış çayı karışımı", image: "menu_resimler/bitki_çayları_(genel_foto).webp" },
      { name: "Ihlamur", price: "150₺", description: "Doğal ıhlamur çayı", image: "menu_resimler/bitki_çayları_(genel_foto).webp" },
      { name: "Yeşil Çay", price: "150₺", description: "Antioksidan yeşil çay", image: "menu_resimler/bitki_çayları_(genel_foto).webp" },
      { name: "Elma Çayı", price: "150₺", description: "Elma aromalı bitki çayı", image: "menu_resimler/bitki_çayları_(genel_foto).webp" },
      { name: "Papatya Çayı", price: "150₺", description: "Sakinleştirici papatya çayı", image: "menu_resimler/bitki_çayları_(genel_foto).webp" }
    ]
  },
  {
    category: "🥤 Meşrubatlar",
    items: [
      { name: "Kola", price: "75₺", description: "Klasik kola", image: "menu_resimler/cola.webp" },
      { name: "Sprite", price: "75₺", description: "Limon aromalı gazlı içecek", image: "menu_resimler/sprite.webp" },
      { name: "Churchill", price: "85₺", description: "Özel Churchill içeceği", image: "menu_resimler/churchill.webp" },
      { name: "Soda", price: "50₺", description: "Maden suyu", image: "menu_resimler/sade_soda.webp" },
      { name: "Meyveli Soda (Elma,Limon)", price: "60₺", description: "Elma ve limon aromalı soda", image: "menu_resimler/merveli_soda.webp" },
      { name: "Fuse Tea (Şeftali,Mango)", price: "75₺", description: "Çeşitli meyve aromalı Fuse Tea", image: "menu_resimler/fuestea_genel_foto.webp" },
      { name: "Meyve Suyu (Vişne,Şeftali)", price: "75₺", description: "Vişne ve şeftali aromalı meyve suyu", image: "menu_resimler/merve_suyu.webp" },
      { name: "Taze Sıkılmış Portakal Suyu", price: "150₺", description: "Taze sıkılmış portakal suyu", image: "menu_resimler/portakal_suyu.webp" },
      { name: "Ev Yapımı Limonata", price: "150₺", description: "Ev yapımı taze limonata", image: "menu_resimler/limonata.webp" },
      { name: "Su", price: "40₺", description: "İçme suyu", image: "menu_resimler/su.webp" }
    ]
  },
  {
    category: "🧋 Bubble İçecekler",
    items: [
      { name: "Mangolu Bubble", price: "180₺", description: "Mango aromalı bubble tea", image: "menu_resimler/mangolu_bubble_tea.webp" },
      { name: "Yaban Mersinli Bubble", price: "180₺", description: "Yaban mersini aromalı bubble tea", image: "menu_resimler/yabanmersinli_bubble_tea.webp" }
    ]
  },
  {
    category: "🥛 Milkshake",
    items: [
      { name: "Muzlu Milkshake", price: "200₺", description: "Muz aromalı milkshake", image: "menu_resimler/vanilyalı_milkshake.webp" },
      { name: "Çilekli Milkshake", price: "200₺", description: "Çilek aromalı milkshake", image: "menu_resimler/çilekli_milkshake.webp" },
      { name: "Çikolatalı Milkshake", price: "200₺", description: "Çikolata aromalı milkshake", image: "menu_resimler/çikolatalı_milkshake.webp" },
      { name: "Karamel Milkshake", price: "200₺", description: "Karamel aromalı milkshake", image: "menu_resimler/caramelli_milksahe.webp" },
      { name: "Vanilya Milkshake", price: "200₺", description: "Vanilya aromalı milkshake", image: "menu_resimler/vanilyalı_milkshake.webp" }
    ]
  },
  {
    category: "❄️ Frozen İçecekler",
    items: [
      { 
        name: "Mangolu Frozen", 
        price: "190₺", 
        description: "Mango aromalı frozen içecek",
        image: "menu_resimler/magnolu_frozen.webp"
      },
      { 
        name: "Çilekli Frozen", 
        price: "190₺", 
        description: "Çilek aromalı frozen içecek",
        image: "menu_resimler/çilekli_frozen.webp"
      },
      { 
        name: "Çarkıfelekli Frozen", 
        price: "190₺", 
        description: "Çarkıfelek aromalı frozen içecek",
        image: "menu_resimler/çarkıfelek_frozen.webp"
      },
      { 
        name: "Kavunlu Frozen", 
        price: "190₺", 
        description: "Kavun aromalı frozen içecek",
        image: "menu_resimler/kavunlu_frozen.webp"
      }
    ]
  },
  {
    category: "🍹 Frappe",
    items: [
      { 
        name: "Karamelli Frappe", 
        price: "210₺", 
        description: "Karamel aromalı frappe",
        image: "menu_resimler/caramelli_milksahe.webp"
      },
      { 
        name: "Muzlu Frappe", 
        price: "210₺", 
        description: "Muz aromalı frappe",
        image: "menu_resimler/vanilyalı_milkshake.webp"
      },
      { 
        name: "Çikolatalı Frappe", 
        price: "210₺", 
        description: "Çikolata aromalı frappe",
        image: "menu_resimler/çikolatalı_milkshake.webp"
      },
      { 
        name: "Çilekli Frappe", 
        price: "210₺", 
        description: "Çilek aromalı frappe",
        image: "menu_resimler/çilekli_milkshake.webp"
      }
    ]
  },
  {
    category: "🍸 Mokteyl Özel İçecekler",
    items: [
      
      { 
        name: "Berryibiscus", 
        price: "175₺", 
        description: "Meyve ve hibiskus karışımı",
        image: "menu_resimler/brryibiscus.webp"
      },
      { 
        name: "CandyMo Strawberry", 
        price: "175₺", 
        description: "Çilekli özel içecek",
        image: "menu_resimler/candymo_strownerry.webp"
      },
      { 
        name: "Cool Lime", 
        price: "175₺", 
        description: "Serinletici özel içeçek",
        image: "menu_resimler/mojito.webp"
      },
      { 
        name: "Sweet Chili", 
        price: "175₺", 
        description: "Acılı tatlı içecek",
        image: "menu_resimler/sweet_chili.webp"
      },
      { 
        name: "Milky Lemonade", 
        price: "175₺", 
        description: "Sütlü limonata",
        image: "menu_resimler/milklylemonade.webp"
      },
      { 
        name: "Mojito Pomegranete", 
        price: "175₺", 
        description: "Narlı mojito",
        image: "menu_resimler/mojito_pomegrante.webp"
      }
    ]
  },
  {
    category: "🍵 Matcha İçecekler",
    items: [
      { 
        name: "Ice Matcha Latte", 
        price: "185₺", 
        description: "Soğuk matcha latte",
        image: "menu_resimler/ice_matcha.webp"
      },
      { 
        name: "Ice Strawberry Matcha Latte", 
        price: "200₺", 
        description: "Çilekli soğuk matcha latte",
        image: "menu_resimler/ice_strowberry_matcha.webp"
      },
      { 
        name: "Ice Mango Matcha Latte", 
        price: "200₺", 
        description: "Mangolu soğuk matcha latte",
        image: "menu_resimler/ice_mango_matcha.webp"
      },
      { 
        name: "Ice Vanilya Matcha Latte", 
        price: "200₺", 
        description: "Vanilyalı soğuk matcha latte",
        image: "menu_resimler/ice_matcha.webp"
      },
      { 
        name: "Hot Matcha Latte", 
        price: "175₺", 
        description: "Sıcak matcha latte",
        image: "menu_resimler/hot_matcha.jpeg"
      },
      { 
        name: "Hot Strawberry Matcha Latte", 
        price: "190₺", 
        description: "Çilekli sıcak matcha latte",
        image: "menu_resimler/hot_matcha.jpeg"
      },
      { 
        name: "Hot Mango Matcha Latte", 
        price: "190₺", 
        description: "Mangolu sıcak matcha latte",
        image: "menu_resimler/hot_matcha.jpeg"
      },
      { 
        name: "Hot Vanilya Matcha Latte", 
        price: "190₺", 
        description: "Vanilyalı sıcak matcha latte",
        image: "menu_resimler/hot_matcha.jpeg"
      }
    ]
  },
  {
    category: "🍰 Tatlılar",
    items: [
      { 
        name: "Akvaryoom (Special)", 
        price: "270₺", 
        description: "Özel Akvaryoom tatlısı",
        image: "menu_resimler/akvaryoom.webp"
      },
      { 
        name: "Meyveli Kruvasan Sandwich", 
        price: "280₺", 
        description: "Meyveli kruvasan sandwich",
        image: "menu_resimler/meyveli_kruvasan_sandwich.webp"
      },
      { 
        name: "Klasik Waffle", 
        price: "270₺", 
        description: "Klasik waffle",
        image: "menu_resimler/mini_waffle.png"
      },

      { 
        name: "Mini Waffle", 
        price: "240₺", 
        description: "Klasik waffle",
        image: "menu_resimler/mini_waffle.png"
      },
      
      { 
        name: "Frambuazlı Cheesecake", 
        price: "200₺", 
        description: "Frambuazlı cheesecake",
        image: "menu_resimler/frambuazlı_cheescake.webp"
      },
      { 
        name: "Lotus Cheesecake", 
        price: "200₺", 
        description: "Lotus aromalı cheesecake",
        image: "menu_resimler/lotus_cheescake.webp"
      },
      { 
        name: "Limon Cheesecake", 
        price: "200₺", 
        description: "Limonlu cheesecake",
        image: "menu_resimler/limonlu_cheescake.webp"
      },
      { 
        name: "San Sebastian Cheesecake", 
        price: "240₺", 
        description: "San Sebastian usulü cheesecake",
        image: "menu_resimler/sansebastian.webp"
      },
      { 
        name: "Triliçe", 
        price: "180₺", 
        description: "Geleneksel triliçe",
        image: "menu_resimler/triliçe.webp"
      },
      { 
        name: "Tiramisu", 
        price: "200₺", 
        description: "İtalyan usulü tiramisu",
        image: "menu_resimler/tiremisu.webp"
      },
      { 
        name: "Sufle", 
        price: "180₺", 
        description: "Sıcak servis edilen sufle",
        image: "menu_resimler/sufle.webp"
      },
      { 
        name: "Rella Coco Star", 
        price: "200₺", 
        description: "Rella Coco Star",
        image: "menu_resimler/rella_coco.jpeg"
      }
    ]
  },
  {
    category: "🍪 Atıştırmalıklar",
    items: [
      { 
        name: "Sade Kruvasan", 
        price: "150₺", 
        description: "Taze pişmiş sade kruvasan",
        image: "menu_resimler/sade_kruvasan.webp"
      },
      { 
        name: "Kruvasan Sandwich", 
        price: "250₺", 
        description: "Labne peynir, cheddar peyniri, dana füme ve marul ile hazırlanan kruvasan sandwich",
        image: "menu_resimler/kruvasan_sandwich.webp"
      },
      
      { 
        name: "Çikolatalı Cookie", 
        price: "100₺", 
        description: "Ev yapımı çikolatalı kurabiye",
        image: "menu_resimler/çikolatalı_cookie.webp"
      },
      { 
        name: "Yulaflı Cookie", 
        price: "100₺", 
        description: "Sağlıklı yulaflı kurabiye",
        image: "menu_resimler/yulaflı_cookie.webp"
      },
      
    ]
  }
];