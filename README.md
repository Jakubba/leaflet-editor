# 📰 Leaflet Editor – React + TypeScript + Tailwind CSS + Material UI + Zustand

Responsywny edytor do tworzenia wielostronicowych **gazetek** z możliwością edycji, podglądu, eksportu i wyboru stylów. Projekt stworzony w celu przetestowania użycia **Material UI** oraz **Zustand** w praktycznej aplikacji frontendowej.

---

## ✨ Technologie

- ⚛️ **React** – komponentowa architektura
- 🔷 **TypeScript** – statyczne typowanie i lepsze wsparcie dla IDE
- 💨 **Tailwind CSS** – szybkie i elastyczne stylowanie
- 🎨 **Material UI** – gotowe komponenty interfejsu
- ⚡ **Zustand** – prosty i wydajny state management
- 🎞️ **react-beautiful-dnd** – obsługa drag & drop
- 💅 **Sass (SCSS)** – stylowanie z możliwością zagnieżdżeń i zmiennych
- 🛠️ **Vite** – nowoczesne i szybkie środowisko deweloperskie

---

## 🌐 Wersja Live

> 🔗 **[Zobacz na żywo](https://twoja-strona.vercel.app)**  
> (dodaj własny link po wdrożeniu)

---

## 🔧 Instalacja i uruchomienie lokalne

Aby uruchomić projekt lokalnie:

```bash
git clone https://github.com/twoj-login/leaflet-editor.git
cd leaflet-editor
npm install
npm run dev

📄 Funkcjonalności

    ✍️ Tworzenie stron z:

        Numerem strony

        Tytułem

        Opisem

        Zdjęciem

    🎨 Wybór stylu gazetki:

        Old School

        New Age

    🧩 Drag & Drop – łatwe przestawianie stron

    🔁 Edycja każdej utworzonej strony

    📤 Eksport gotowej gazetki do PDF
```

📁 Struktura projektu

leaflet-editor/
├── public/
├── src/
│ ├── assets/ # Obrazy i zasoby
│ ├── components/ # Komponenty UI
│ │ ├── ExportToPDF.tsx
│ │ ├── PageEditor.tsx
│ │ ├── PagePreview.tsx
│ │ ├── PagesList.tsx
│ │ └── ThemeSelector.tsx
│ ├── store.js # Zustand - zarządzanie stanem
│ ├── App.tsx # Layout aplikacji
│ ├── main.tsx # Entry point
│ ├── App.css / index.css # Style globalne
│ └── vite-env.d.ts # Typowanie środowiskowe
├── package.json
├── tailwind.config.js
├── eslint.config.js
└── README.md

🧪 Cel projektu

Projekt stworzony w celu przetestowania:

    Integracji Material UI w aplikacji z Tailwindem

    Zarządzania stanem z pomocą Zustand

    Tworzenia intuicyjnego edytora wielostronicowego

📸 Przykładowe użycie

    Tworzenie gazetki reklamowej

    Wewnętrzne biuletyny firmowe

    Personalizowane broszury PDF

Licencja

Projekt dostępny na licencji MIT.

dodaokto w zainstalowałem npm install html2canvas jspdf
npm install framer-motion react-intersection-observer

