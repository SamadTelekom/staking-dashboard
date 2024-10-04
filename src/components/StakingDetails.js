import React from 'react';

const StakingDetails = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl">Stake Avalanche (AVAX)</h3>
      <p className="text-3xl mt-4">31.396886 AVAX</p>
      <div className="mt-4 flex justify-between">
        <button className="bg-purple-600 px-4 py-2 rounded-lg">Upgrade</button>
        <button className="bg-gray-600 px-4 py-2 rounded-lg">Unstake</button>
      </div>
    </div>
  );
};

export default StakingDetails;

