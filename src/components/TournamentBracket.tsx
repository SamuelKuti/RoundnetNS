import { useState } from 'react';

export default function TournamentBracket() {
  const [currentRound, setCurrentRound] = useState(1);

  return (
    <div className="overflow-x-auto py-12">
      <div className="min-w-[800px] p-8">
        <div className="flex justify-between">
          {/* Round Navigation */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 'Finals'].map((round, index) => (
              <button
                key={index}
                onClick={() => setCurrentRound(typeof round === 'number' ? round : 4)}
                className={`px-4 py-2 rounded-full transition-colors duration-200
                  ${currentRound === (typeof round === 'number' ? round : 4)
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                  }`}
              >
                {typeof round === 'number' ? `Round ${round}` : round}
              </button>
            ))}
          </div>
        </div>

        {/* Bracket Display */}
        <div className="flex justify-between gap-8">
          {generateBracketRounds().map((round, roundIndex) => (
            <div key={roundIndex} className="flex-1">
              {round.matches.map((match, matchIndex) => (
                <div 
                  key={matchIndex}
                  className="bg-white rounded-lg shadow-lg p-4 mb-4 hover-scale"
                >
                  <div className="space-y-2">
                    <MatchTeam 
                      team={match.team1}
                      score={match.score1}
                      winner={match.score1 > match.score2}
                    />
                    <MatchTeam 
                      team={match.team2}
                      score={match.score2}
                      winner={match.score2 > match.score1}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const MatchTeam = ({ team, score, winner }) => (
  <div className={`flex justify-between items-center p-2 rounded
    ${winner ? 'bg-primary-yellow/10' : 'bg-gray-50'}`}
  >
    <span className={winner ? 'font-bold' : ''}>{team}</span>
    <span className={`${winner ? 'font-bold' : ''} text-gray-600`}>{score}</span>
  </div>
);

// Helper function to generate dummy bracket data
const generateBracketRounds = () => [
  {
    name: 'Round 1',
    matches: [
      { team1: 'Team A', team2: 'Team B', score1: 21, score2: 15 },
      { team1: 'Team C', team2: 'Team D', score1: 18, score2: 21 },
    ]
  },
  // Add more rounds as needed
]; 