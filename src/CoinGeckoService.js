// src/CoinGeckoService.js
const CoinGeckoService = {
  async getAllCoins() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      const data = await response.json();
      return data; // Rückgabe der Coin-Daten
    } catch (error) {
      console.error('Fehler beim Abrufen der Coins:', error);
      return []; // Rückgabe eines leeren Arrays im Fehlerfall
    }
  }
};

export default CoinGeckoService;

