import React, { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Mock database representing your Figma widget cards data
  const gridItems = [
    { id: 'recents', title: 'Recents', images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150'] },
    { id: 'photos', title: 'Photos', images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?w=150'] },
    { id: 'favorites', title: 'Favorites', images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150'] }
  ];

  const taxFiles = [
    { name: '2021 Invoicing.gdoc', type: 'doc', date: 'Added yesterday' },
    { name: 'Expenses.excel', type: 'sheet', date: 'Added yesterday' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-dark-bg text-white' : 'bg-light-bg text-neutral-900'}`}>
      
      {/* HEADER BAR */}
      <header className="max-w-md mx-auto pt-6 px-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Home</h1>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition ${darkMode ? 'border-neutral-700 bg-dark-card hover:bg-neutral-800' : 'border-neutral-200 bg-light-card hover:bg-neutral-100'}`}
            title="Toggle Figma Themes"
          >
            {darkMode ? '🌙 Dark Grid' : '☀️ Light User'}
          </button>
          <div className="w-8 h-8 rounded-full bg-pink-300 border border-pink-400 overflow-hidden flex items-center justify-center text-xs font-bold text-neutral-900">
            AX
          </div>
        </div>
      </header>

      {/* DASHBOARD CONTAINER (Mobile centered max-width, extends outwards on desktops) */}
      <main className="max-w-md mx-auto px-4 pt-4 pb-24 space-y-4">
        
        {/* GRID LIST COMPONENT */}
        <section className={`p-4 rounded-2xl shadow-sm border ${darkMode ? 'bg-dark-card border-neutral-800' : 'bg-light-card border-neutral-100'}`}>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">❖ Grid List</span>
            <span className="text-xs text-neutral-400 cursor-pointer">✕</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {gridItems.map((item) => (
              <div key={item.id} className={`p-2 rounded-xl text-center border ${darkMode ? 'bg-neutral-800/50 border-neutral-700' : 'bg-white border-neutral-200'}`}>
                <div className="w-full h-12 rounded-lg bg-pink-100 mb-1 overflow-hidden">
                  <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover opacity-80" />
                </div>
                <p className="text-xs font-medium truncate">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CURRENTLY OPEN WIDGET */}
        <section className={`p-4 rounded-2xl shadow-sm border ${darkMode ? 'bg-dark-card border-neutral-800' : 'bg-light-card border-neutral-100'}`}>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <span>🖥️</span> <span className="font-medium">Currently open</span>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative group bg-neutral-900">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600" 
              alt="Fashionweek wardrobe" 
              className="w-full h-44 object-cover object-top opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="text-sm font-semibold truncate">Fashionweek-wardrobe.jpg</p>
              <p className="text-xs text-neutral-300">Project › 2026 › Reference</p>
            </div>
          </div>
        </section>

        {/* TAXES FILE BLOCK COMPONENT */}
        <section className={`p-4 rounded-2xl shadow-sm border ${darkMode ? 'bg-dark-card border-neutral-800' : 'bg-light-card border-neutral-100'}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-pink-400 text-sm">✨</span>
            <h3 className="text-sm font-semibold">Get prepared for Taxes</h3>
          </div>
          <div className="space-y-2.5">
            {taxFiles.map((file, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-xl transition hover:bg-pink-100/10">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${file.type === 'doc' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    {file.type === 'doc' ? '📄' : '📊'}
                  </div>
                  <div>
                    <h4 className="text-xs font-medium">{file.name}</h4>
                    <p className="text-[10px] text-neutral-400">{file.date}</p>
                  </div>
                </div>
                <span className="text-xs text-neutral-400">⋮</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-neutral-700/30 flex gap-2">
            <button className="flex-1 text-xs py-2 bg-pink-500 hover:bg-pink-400 text-white font-bold rounded-lg transition">
              Create collection
            </button>
            <button className={`px-3 text-xs py-2 rounded-lg border ${darkMode ? 'border-neutral-700 hover:bg-neutral-800' : 'border-neutral-300 hover:bg-neutral-100'}`}>
              Not now
            </button>
          </div>
        </section>

      </main>

      {/* FIXED BOTTOM NAVIGATION BAR BAR */}
      <nav className={`fixed bottom-0 left-0 right-0 border-t ${darkMode ? 'bg-dark-card/90 border-neutral-800 text-white' : 'bg-white/95 border-neutral-200 text-neutral-800'} backdrop-blur-md`}>
        <div className="max-w-md mx-auto flex justify-around items-center h-16">
          <button className="text-xl text-pink-500">🏠</button>
          <button className="text-xl opacity-50 hover:opacity-100">📁</button>
          <button className="w-10 h-10 bg-pink-500 hover:bg-pink-400 text-white text-2xl rounded-full flex items-center justify-center shadow-lg transform active:scale-95 transition">
            ＋
          </button>
          <button className="text-xl opacity-50 hover:opacity-100">🖼️</button>
          <button className="text-xl opacity-50 hover:opacity-100">🔔</button>
        </div>
      </nav>

    </div>
  );
}