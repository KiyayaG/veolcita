# Velocita - Masaüstü ve EXE Oluşturma Rehberi

Bu rehber, Velocita web uygulamasını kendi bilgisayarınızda **bağımsız bir Windows uygulaması (.exe)** haline nasıl getirebileceğinizi adım adım açıklar.

Bulut ortamında doğrudan .exe dosyası derleyip indirmek güvenlik sınırları nedeniyle desteklenmese de, tarayıcı üzerinden saniyeler içinde kendi EXE dosyanızı oluşturabilirsiniz.

---

## Yöntem 1: En Kolay Yol — Tarayıcı Uygulaması Olarak Kurmak (Önerilen)
Velocita modern bir web uygulamasıdır ve bilgisayarınıza veya telefonunuza **hiçbir şey yüklemeden** yerel bir uygulama gibi kurulabilir:

1. Tarayıcınızda (Google Chrome veya Edge) uygulamanın linkini açın.
2. Adres çubuğunun en sağında bulunan **"Yükle" (küçük bilgisayar/ekran şeklinde artı simgesi)** butonuna tıklayın.
3. Veya sağ üstteki üç noktaya tıklayarak **"Uygulama Olarak Yükle" (Install App / Velocita uygulamasını yükle)** seçeneğini seçin.
4. Uygulama artık bilgisayarınızın masaüstüne ve başlat menüsüne bir kısayol olarak eklenecek, tıpkı normal bir program (.exe) gibi bağımsız bir pencerede açılacaktır!

---

## Yöntem 2: Tek Komutla Gerçek .EXE Hazırlamak (Nativefier)
Eğer tamamen bağımsız, internete bağlı olan veya olmayan bir `.exe` dosyası elde etmek istiyorsanız, en popüler ve temiz yöntem **Nativefier** kullanmaktır:

1. Bilgisayarınızda **Node.js** yüklü olduğundan emin olun (yoksa [nodejs.org](https://nodejs.org/) adresinden kurabilirsiniz).
2. Komut Satırını (CMD) veya PowerShell'i açın.
3. Aşağıdaki komutu yazarak doğrudan Velocita'nın kendi EXE'sini bilgisayarınızda oluşturun:
   ```bash
   npx nativefier --name "Velocita" "https://ais-pre-sipz2ddgjzcbpzfxfntt3q-804375194195.europe-west2.run.app" --platform "windows"
   ```
4. Komut bittiğinde masaüstünüzde içinde **Velocita.exe** olan hazır bir klasör (veya zip) oluşacaktır. İstediğiniz bilgisayara kopyalayıp doğrudan tıklayarak çalıştırabilirsiniz!

---

## Proje Kaynak Kodlarını Bilgisayara İndirmek (ZIP Olarak)
Bu projenin tüm kaynak kodlarını (React, Express Sunucu, Stil Dosyaları vb.) kendi bilgisayarınıza indirip arşivlemek istiyorsanız:

1. Ekranın sol alt/üst köşesinde bulunan **Settings (Ayarlar)** menüsüne tıklayın.
2. **"Export as ZIP"** seçeneğini seçerek tüm çalışmayı bir klasör halinde bilgisayarınıza indirin.
3. Kendi bilgisayarınızda çalıştırmak için indirdiğiniz klasörü açıp şu komutları sırasıyla çalıştırabilirsiniz:
   ```bash
   npm install
   npm run dev
   ```
