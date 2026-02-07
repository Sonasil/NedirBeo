<div align="center">

# 📖 NedirBeo - KKTC Sözlük

### *Kıbrıs ağzını dünyaya taşıyan sosyal sözlük platformu*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)
[![AI Powered](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?logo=google)](https://ai.google.dev/)

---

*"Söylemesi kolay, yazması zor - ama biz yazdık!"* 🇨🇾

[Keşfet](#-özellikler) • [Kurulum](#-kurulum) • [Katkıda Bulun](#-katkıda-bulunma) • [Hakkında](#-proje-hakkında)

</div>

---

## 🌟 Proje Hakkında

**NedirBeo**, Kıbrıs Türk ağzını korumak ve gelecek nesillere aktarmak için tasarlanmış, topluluk odaklı dijital bir sözlük platformudur. Modern teknoloji ile yerel kültürü buluşturarak, Kıbrıs'a özgü kelimeleri, deyimleri ve kültürel değerleri canlı tutuyor.

### 🎯 Vizyon

Kıbrıs Türk ağzı, yüzyıllardır aktarılan zengin bir kültürel mirastır. Ancak küreselleşme ve standart dilin yaygınlaşmasıyla birlikte, bu benzersiz lehçe kaybolma tehlikesiyle karşı karşıya. **NedirBeo**, bu mirası dijital çağa taşıyarak:

- 🔊 **Kayıt Altına Alır** - Her kelime, örnek cümleleri ve telaffuzuyla birlikte belgelenir
- 🤝 **Topluluk Yaratır** - Kıbrıslılar, kendi dillerini birlikte korur ve geliştirir
- 🎓 **Eğitir** - Genç nesiller ve meraklılar, eğlenceli bir şekilde yerel ağzı öğrenir
- 🌍 **Paylaşır** - Kıbrıs kültürü, dünya çapında erişilebilir hale gelir

---

## ✨ Özellikler

### 🎨 Modern ve Kullanıcı Dostu Arayüz
- **Glassmorphism** tasarım efektleri ile premium görünüm
- **Dark Mode** desteği - gözleriniz yorulmasın
- **Responsive Design** - mobil, tablet ve masaüstünde mükemmel çalışır
- **Smooth Animations** - akıcı geçişler ve micro-interactions

### 📚 Kapsamlı Sözlük Özellikleri
- 🔍 **Gelişmiş Arama** - Kelimeyi anında bul
- 📖 **Günün Kelimesi** - Her gün yeni bir Kıbrıs kelimesi öğren
- 🏷️ **Etiket Sistemi** - Kelimeler kategorilere ayrılmış
- 💬 **Örnek Cümleler** - Kelimenin kullanımını gerçek örneklerle gör
- 🔊 **Telaffuz Rehberi** - Kelimeleri doğru söyle

### 🤖 AI Destekli Akıllı Özellikler
- ⚡ **Google Gemini Entegrasyonu** - Yapay zeka destekli kelime önerileri
- 🔄 **Akıllı Çeviri** - Kıbrıs ağzı ↔ Standart Türkçe

### 👥 Sosyal Özellikler
- ➕ **Kelime Ekle** - Bildiğin kelimeleri platformla paylaş
- ⬆️ **Upvote/Downvote Sistemi** - Toplulukla en iyi tanımları belirle
- 🏆 **Liderlik Tablosu** - En aktif katkıda bulunanlar
- 👤 **Kullanıcı Profilleri** - Katkılarını takip et
- 🎖️ **Rozetler ve Başarılar** - Katkılarınla rozet kazan

### 🔒 Güvenlik ve Gizlilik
- 🔐 **Güvenli Kimlik Doğrulama** - Hesap güvenliği öncelik
- 🛡️ **Veri Koruma** - Kişisel verileriniz güvende
- ⚙️ **Özelleştirilebilir Ayarlar** - Platform deneyimini kontrol et

---

## 🚀 Kurulum

### Ön Gereksinimler

Başlamadan önce sisteminizde şunların kurulu olduğundan emin olun:

- **Node.js** (v18.0.0 veya üzeri) - [İndir](https://nodejs.org/)
- **npm** (v9.0.0 veya üzeri) veya **yarn**
- Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)

### 📥 Yerel Kurulum

Projeyi yerel ortamınızda çalıştırmak için şu adımları izleyin:

#### 1️⃣ Depoyu Klonlayın

```bash
git clone https://github.com/Sonasil/NedirBeo.git
cd NedirBeo
```

#### 2️⃣ Bağımlılıkları Yükleyin

```bash
npm install
```

veya Yarn kullanıyorsanız:

```bash
yarn install
```

#### 3️⃣ Ortam Değişkenlerini Ayarlayın

Projenin kök dizininde `.env.local` dosyası oluşturun:

```bash
# .env.local dosyasını oluşturun
cp .env.local.example .env.local
```

`.env.local` dosyasını düzenleyin ve gerekli API anahtarlarını ekleyin:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> 💡 **Not**: Google Gemini API anahtarı almak için [Google AI Studio](https://makersuite.google.com/app/apikey) sayfasını ziyaret edin.

#### 4️⃣ Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Uygulama varsayılan olarak [http://localhost:5173](http://localhost:5173) adresinde çalışacaktır! 🎉

#### 5️⃣ Tarayıcınızda Açın

Tarayıcınızı açın ve şu adrese gidin:
```
http://localhost:5173
```

---

## 🏗️ Production Build

Projeyi production için derlemek üzere:

```bash
npm run build
```

Build sonrası önizleme:

```bash
npm run preview
```

---

## 🛠️ Teknoloji Yığını

<div align="center">

| Kategori | Teknoloji |
|----------|-----------|
| **Frontend Framework** | React 19.2.4 |
| **Dil** | TypeScript 5.8.2 |
| **Build Tool** | Vite 6.2.0 |
| **Routing** | React Router DOM 7.13.0 |
| **AI/ML** | Google Gemini API |
| **Styling** | CSS Modules + Tailwind-like Utilities |
| **Icons** | Material Symbols |
| **Deployment** | Static Hosting (Vercel, Netlify, vb.) |

</div>

### 🎨 Tasarım Sistemi

- **Renk Paleti**: Modern mavi tonu primary renk (#2563EB)
- **Tipografi**: System font stack (optimize performans)
- **Tasarım Felsefesi**: Glassmorphism + Minimalizm
- **Animasyonlar**: Smooth micro-interactions

---

## 📱 Ekran Görüntüleri

> 🚧 Ekran görüntüleri yakında eklenecek!

---

## 📂 Proje Yapısı

```
NedirBeo/
├── 📁 pages/              # Uygulama sayfaları
│   ├── Home.tsx          # Ana sayfa - Günün kelimesi
│   ├── Explore.tsx       # Keşfet sayfası
│   ├── WordDetail.tsx    # Kelime detay ekranı
│   ├── Profile.tsx       # Kullanıcı profili
│   ├── Leaderboard.tsx   # Liderlik tablosu
│   ├── AddWord.tsx       # Kelime ekleme formu
│   └── Settings.tsx      # Ayarlar
├── 📁 services/          # API servisleri
├── App.tsx               # Ana uygulama bileşeni
├── constants.tsx         # Sabitler ve design tokens
├── types.ts              # TypeScript tip tanımları
├── index.tsx             # Uygulama giriş noktası
├── index.html            # HTML template
├── vite.config.ts        # Vite yapılandırması
├── tsconfig.json         # TypeScript yapılandırması
└── package.json          # Proje bağımlılıkları
```

---

## 🤝 Katkıda Bulunma

NedirBeo açık kaynaklı bir projedir ve katkılarınızı memnuniyetle karşılıyoruz! 💙

### Nasıl Katkıda Bulunabilirsiniz?

1. **🍴 Fork edin** - Projeyi kendi hesabınıza fork edin
2. **🌿 Branch oluşturun** - `git checkout -b feature/harika-ozellik`
3. **💻 Kodlayın** - Değişikliklerinizi yapın
4. **✅ Test edin** - Kodunuzun çalıştığından emin olun
5. **📝 Commit edin** - `git commit -m 'Harika özellik eklendi'`
6. **🚀 Push edin** - `git push origin feature/harika-ozellik`
7. **🎉 Pull Request açın** - Değişikliklerinizi gönderin!

### Katkı Kuralları

- Kod standartlarına uyun
- Açıklayıcı commit mesajları yazın
- Büyük değişiklikler için önce issue açın
- Her değişiklik için test yazın
- Dokümantasyonu güncel tutun

---

## 📜 Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👨‍💻 Geliştirici

<div align="center">

**Türkmen** ([@Sonasil](https://github.com/Sonasil))

Sorularınız mı var? [Issue açın](https://github.com/Sonasil/NedirBeo/issues) veya iletişime geçin!

</div>

---

## 🙏 Teşekkürler

- Kıbrıs Türk kültürünü yaşatan herkese
- Açık kaynak topluluğuna
- Google Gemini AI ekibine
- Bu projeye katkıda bulunan herkese

---

<div align="center">

### 🌟 Projeyi Beğendiniz mi?

Yıldız vermeyi unutmayın! ⭐

**Kıbrıs ağzını birlikte yaşatalım!** 🇨🇾❤️

---

*NedirBeo ile Kıbrıs kültürü dijital çağda yaşıyor*

</div>
