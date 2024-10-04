// src/components/DashboardCard.js
import React from 'react';

function DashboardCard({ title, rate, icon, change, timeFrame }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img src={icon} alt={title} className="h-16 w-16 mx-auto mb-4" />
      <h3 className="text-white text-xl">{title}</h3>
      <p className="text-green-400">${rate.toFixed(2)}</p>
      <p className={`text-${change >= 0 ? 'green' : 'red'}-500`}>
        {change.toFixed(2)}% in {timeFrame}
      </p>
    </div>
  );
}

export default DashboardCard;

