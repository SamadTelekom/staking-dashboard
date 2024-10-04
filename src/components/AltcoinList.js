import React, { useEffect, useState } from 'react';

const AltcoinList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4 text-white">Top Altcoins</h2>
      <ul className="space-y-4">
        {coins.map((coin) => (
          <li key={coin.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center">
              <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-3" />
              <span className="text-white font-bold">{coin.name}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-white">
                {coin.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </span>
              <span className={`text-sm ${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AltcoinList;

