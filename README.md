# TamirSepeti (HelalBeUsta) 🛠️

Oto tamir ve bakım süreçlerini dijitalleştiren, Modüler Monolitik mimariye sahip .NET 8 Web API projesi.

## 🏗️ Proje Mimarisi

Bu proje **Modular Monolith** mimarisi ile tasarlanmıştır ve **Domain-Driven Design (DDD)** prensiplerini takip eder.

### Teknoloji Yığını
- **.NET 8**
- **PostgreSQL** (Veritabanı)
- **Entity Framework Core 8** (ORM)
- **MediatR** (CQRS Pattern)
- **Mapster** (Mapping)

---

## 📂 Önemli Klasörler ve Dosyalar

Proje içerisindeki gerekli ve kritik dosyalar şunlardır:

### 1. `src/API`
Uygulamanın giriş noktasıdır.
- `Program.cs`: Bağımlılıkların (DI) tanımlandığı ve uygulamanın ayağa kalktığı yer.
- `appsettings.json`: Veritabanı bağlantı ayarları (Password bilgisi buradadır).

### 2. `src/Modules/AutoRepair`
Oto tamir iş mantığını içeren ana modül.
- **Controllers/**: API uç noktaları (`JobsController`).
- **Features/**: CQRS desenine göre ayrılmış iş parçacıkları (Vertical Slices).
    - `CreateJob/`: İş emri oluşturma komutları.
    - `GetJobById/`: İş emri sorgulama.
- **Domain/**:
    - `Entities/`: Veritabanı tablolarına karşılık gelen nesneler (`Job`).
    - `ValueObjects/`: Yapısal değer nesneleri (`CarInfo`).
- **Infrastructure/**:
    - `Data/`: Veritabanı bağlamı (`AutoRepairDbContext`) ve konfigürasyonlar.

### 3. `src/BuildingBlocks`
Tüm modüllerin ortak kullandığı temel yapılar.
- `Result<T>`: Standart API dönüş tipi.
- `IAggregateRoot`: DDD işaretçisi.
- `BaseEntity`: ID ve tarihçe (CreatedAt/UpdatedAt) içeren temel sınıf.

---

## 🚀 Kurulum ve Çalıştırma

1. **Veritabanı Ayarı:**
   `src/API/appsettings.json` dosyasındaki `ConnectionStrings` bölümüne kendi PostgreSQL şifrenizi girin.

2. **Veritabanını Oluşturma:**
   ```powershell
   dotnet ef database update -p src/Modules/AutoRepair/AutoRepair.csproj -s src/API/API.csproj
   ```

3. **Uygulamayı Çalıştırma:**
   ```powershell
   dotnet run --project src/API/API.csproj
   ```

4. **Test:**
   Tarayıcada `http://localhost:5xxx/swagger` adresine giderek API'yi test edebilirsiniz.
