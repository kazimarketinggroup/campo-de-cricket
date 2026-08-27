import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

const tournaments = [
  {
    id: "april",
    label: "April – Spring Tournament",
    month: "April",
    year: 2026,
    highlightDays: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    startDay: 14,
    endDay: 23,
    bgColor: "bg-[#D9E1EC]",
  },
  {
    id: "september",
    label: "September – Two Tournaments",
    month: "September",
    year: 2026,
    highlightDays: [7, 8, 9, 10, 21, 22, 23, 24],
    startDay: 7,
    endDay: 24,
    bgColor: "bg-[#E9EFF6]",
  },
  {
    id: "october",
    label: "October – Autumn Tournament",
    month: "October",
    year: 2026,
    highlightDays: [12, 13, 14, 15, 16],
    startDay: 12,
    endDay: 16,
    bgColor: "bg-[#F3F7FA]",
  },
];

const CalendarSection: React.FC = () => {
  const [activeTournament, setActiveTournament] = useState(tournaments[0]);

  // Simple array to generate calendar grid (April 2026 starts on Wednesday)
  const daysInMonth = 30;
  const startOffset = 2; // Tuesday is 1, Wednesday is 2...
  const calendarDays = Array.from({ length: 35 }, (_, i) => i - startOffset);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-900 mb-6">The Campo Calendar</h2>
          <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed">
            When Teams, Families, And Visitors Use The Facilities At Campo De Cricket Beas De Segura, They're <br/>
            Not Just Booking A Ground — They're Stepping Into A Fully Supported Cricket Experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Tournament Toggles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              We Host Four Tournaments Each Year:
            </h3>
            <p className="text-gray-500 text-sm mb-10 max-w-md leading-relaxed">
              Each Tournament Features 8 Teams, Carefully Scheduled To Ensure 
              Fair Competition, Rest Time, And Quality Match Conditions.
            </p>
            
            <div className="space-y-4">
              {tournaments.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTournament(t)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 font-bold text-gray-800 shadow-sm ${
                    activeTournament.id === t.id ? t.bgColor : "bg-[#F3F7FA] hover:bg-gray-100"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: The Calendar UI */}
          <div className="bg-[#F8F9FA] rounded-[32px] p-8 shadow-inner border border-gray-50">
            <div className="flex items-center justify-between mb-8">
              <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"><ChevronLeft size={20}/></button>
              <div className="flex gap-2">
                <span className="bg-white px-4 py-1.5 rounded-lg font-bold text-gray-800 shadow-sm border border-gray-100">{activeTournament.month}</span>
                <span className="bg-white px-4 py-1.5 rounded-lg font-bold text-gray-800 shadow-sm border border-gray-100">{activeTournament.year}</span>
              </div>
              <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"><ChevronRight size={20}/></button>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 gap-2 mb-4 text-center text-sm font-bold text-gray-600">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => <div key={d}>{d}</div>)}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-y-3 text-center">
              {calendarDays.map((day, idx) => {
                const isCurrentMonth = day > 0 && day <= daysInMonth;
                const isHighlighted = activeTournament.highlightDays.includes(day);
                const isStart = activeTournament.startDay === day;
                const isEnd = activeTournament.endDay === day;

                return (
                  <div key={idx} className="relative py-2 flex justify-center items-center">
                    {/* Background Range Highlight */}
                    {isHighlighted && (
                      <div className={`absolute inset-0 bg-[#D1E0FF] opacity-60 
                        ${isStart ? 'rounded-l-lg ml-1' : ''} 
                        ${isEnd ? 'rounded-r-lg mr-1' : ''}`} 
                      />
                    )}
                    
                    {/* Day Number */}
                    <span className={`relative z-10 text-sm font-medium w-8 h-8 flex items-center justify-center rounded-lg transition-colors
                      ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-700'}
                      ${isStart || isEnd ? 'bg-[#1E40AF] text-white shadow-md' : ''}
                      ${isHighlighted && !isStart && !isEnd ? 'text-blue-700 font-bold' : ''}
                    `}>
                      {day <= 0 ? 31 + day : day > daysInMonth ? day - daysInMonth : day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CalendarSection;