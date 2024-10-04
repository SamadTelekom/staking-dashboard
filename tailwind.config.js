module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Alle Dateien in deinem src-Ordner, die Tailwind verwenden könnten
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1f1f2e',  // Für ein dunkles Theme
        'primary': '#6366f1',  // Primärfarbe für Buttons oder Highlights
        'secondary': '#2e2e3d',  // Sekundärfarbe für Karten oder Sidebar
      },
    },
  },
  plugins: [],
};

