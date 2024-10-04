// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import DashboardCard from './DashboardCard';
import CoinGeckoService from '../CoinGeckoService'; // Importiere den Service

function Dashboard() {
  const [coins, setCoins] = useState([]); // State für Coins

  useEffect(() => {
    const fetchCoins = async () => {
      const fetchedCoins = await CoinGeckoService.getAllCoins();
      setCoins(fetchedCoins);
    };

    fetchCoins();
  }, []); // Leeres Abhängigkeitsarray, damit der Effekt nur einmal ausgeführt wird

  return (
    <div className="p-8 bg-dark-bg min-h-screen">
      <h2 className="text-white text-4xl mb-8">Top Staking Assets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <DashboardCard
            key={coin.id}
            title={coin.name}
            rate={coin.current_price}
            icon={coin.image}
            change={coin.price_change_percentage_24h}
            timeFrame="24h"
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

