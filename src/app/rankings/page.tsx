"use client";

import { useState } from 'react';

export default function Rankings() {
  const [rankingPeriod, setRankingPeriod] = useState('2024');

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mt-16 mb-6 text-center">
          Nova Scotia Rankings
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <select 
            value={rankingPeriod}
            onChange={(e) => setRankingPeriod(e.target.value)}
            className="px-4 py-2 rounded-full border-2 border-primary-blue"
          >
            <option value="2023">Coming soon...</option>
          </select>
        </div>

        {/* Rankings Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-primary-blue text-white">
              <tr>
                <th className="md:px-6 px-2 py-4 text-center">Rank</th>
                <th className="px-6 py-4 text-center">Player</th>
                <th className="md:px-6 px-2 py-4 text-center">Points</th>
                <th className="md:px-6 px-2 py-4 text-center">Tournaments</th>
              </tr>
            </thead>
            <tbody>
              {generateRankings().map((player, index) => (
                <tr 
                  key={player.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="md:px-6 py-4 flex justify-center items-center">
                    <span className={`
                      inline-flex items-center justify-center w-8 h-8 rounded-full
                      ${index < 3 ? 'bg-primary-yellow text-primary-blue font-bold' : 'bg-gray-100'}
                    `}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-center">{player.name}</td>
                  <td className="md:px-6 py-4 text-center">{player.points}</td>
                  <td className="md:px-6 py-4 text-center">{player.tournaments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Helper function to generate dummy rankings data
const generateRankings = () => [
  { id: 1, name: 'Future 1st', points: 2500, tournaments: 8 },
  { id: 2, name: 'Future 2nd', points: 2350, tournaments: 7 },
  { id: 3, name: 'Future 3rd', points: 2200, tournaments: 6 },
  // Add more players as needed
]; 