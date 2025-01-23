import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Polls from './components/Polls';
import Results from './components/Results';
import { VoteProvider } from './context/VoteContext';

const App: React.FC = () => {
  return (
    <VoteProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={
                  <div className="space-y-8">
                    <header className="text-center">
                      <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text animate-pulse-slow">
                        VoteWise
                      </h1>
                      <p className="mt-4 text-gray-600 text-lg">
                        Make your voice heard
                      </p>
                    </header>
                    <Polls />
                  </div>
                } />
                <Route path="/results" element={<Results />} />
              </Routes>
            </div>
          </main>

          {/* Create Poll Button */}
          <div className="fixed bottom-8 right-8">
            <button 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg transform transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </Router>
    </VoteProvider>
  );
};

export default App;
