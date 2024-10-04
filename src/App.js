import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardCard from './components/DashboardCard';
import StakingDetails from './components/StakingDetails';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Dashboard Area */}
        <div className="p-6 space-y-6">
          {/* Top Staking Assets */}
          <div className="grid grid-cols-3 gap-6">
            <DashboardCard title="Ethereum" rate="13.62%" change="+2.96%" />
            <DashboardCard title="BNB Chain" rate="12.72%" change="+6.67%" />
            <DashboardCard title="Polygon (Matic)" rate="6.29%" change="-1.89%" />
          </div>

          {/* Active Staking Details */}
          <StakingDetails />
        </div>
      </div>
    </div>
  );
}

export default App;

