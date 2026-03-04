import { useState, useEffect, useRef, useCallback } from 'react';
import PhoneFrame from './components/PhoneFrame';
import LockScreen from './components/LockScreen';
import IntentPrompt from './components/IntentPrompt';
import MockAppFeed from './components/MockAppFeed';
import DriftNudge from './components/DriftNudge';
import AlternativeSuggestions from './components/AlternativeSuggestions';
import ConfirmationScreen from './components/ConfirmationScreen';
import WeeklyInsights from './components/WeeklyInsights';

/*
  Flow:
  1. lock        – Lock screen
  2. intent      – Intent prompt (bottom sheet)
  3. feed        – Mock Instagram feed with timer
  4. drift       – Drift nudge overlay (at ~10s = 10 min simulated)
  5. alternatives – Limit-based suggestions (at ~15s = 15 min simulated)
  6. confirmation – Positive confirmation screen
  7. insights    – Weekly insights dashboard
*/

const DRIFT_TRIGGER = 10;       // seconds in prototype → simulates 10 min
const LIMIT_TRIGGER = 15;       // seconds in prototype → simulates 15 min
const TIME_MULTIPLIER = 60;     // 1 real second = 60 simulated seconds

export default function App() {
  const [screen, setScreen] = useState('lock');
  const [intent, setIntent] = useState(null);
  const [sessionTime, setSessionTime] = useState(0);
  const [selectedAlt, setSelectedAlt] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [driftDismissed, setDriftDismissed] = useState(false);
  const timerRef = useRef(null);

  // Start the session timer when entering the feed
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSessionTime((prev) => prev + 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => stopTimer();
  }, [stopTimer]);

  // Watch session time for triggers
  useEffect(() => {
    if (screen === 'feed' && sessionTime >= LIMIT_TRIGGER && driftDismissed) {
      stopTimer();
      setScreen('alternatives');
    } else if (screen === 'feed' && sessionTime >= DRIFT_TRIGGER && !driftDismissed) {
      stopTimer();
      setScreen('drift');
    }
  }, [sessionTime, screen, driftDismissed, stopTimer]);

  // Handlers
  const handleUnlock = () => setScreen('intent');

  const handleIntentSelect = (option) => {
    setIntent(option);
    setScreen('feed');
    setSessionTime(0);
    setDriftDismissed(false);
    startTimer();
  };

  const handleIntentSkip = () => {
    setIntent(null);
    setScreen('feed');
    setSessionTime(0);
    setDriftDismissed(false);
    startTimer();
  };

  const handleDriftReturn = () => {
    stopTimer();
    setScreen('confirmation');
    setSelectedAlt({ id: 'return', label: 'Returning to task' });
  };

  const handleDriftContinue = () => {
    setDriftDismissed(true);
    setScreen('feed');
    startTimer();
  };

  const handleDriftSave = () => {
    stopTimer();
    setScreen('confirmation');
    setSelectedAlt({ id: 'save', label: 'Saved for later' });
  };

  const handleAltSelect = (alt) => {
    stopTimer();
    setSelectedAlt(alt);
    setScreen('confirmation');
  };

  const handleAltDismiss = () => {
    setScreen('feed');
    startTimer();
  };

  const handleConfirmContinue = () => {
    setScreen('insights');
    setActiveTab('insights');
  };

  const handleRestart = () => {
    stopTimer();
    setScreen('lock');
    setIntent(null);
    setSessionTime(0);
    setSelectedAlt(null);
    setActiveTab('home');
    setDriftDismissed(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'insights') {
      stopTimer();
      setScreen('insights');
    } else if (tab === 'home') {
      if (screen === 'insights') {
        setScreen('lock');
      }
    }
  };

  // Compute simulated display time (in seconds)
  const simulatedTime = sessionTime * TIME_MULTIPLIER;

  const showNav = !['lock', 'intent'].includes(screen);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-slate-200 via-gray-200 to-slate-300">
      {/* Title */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          ✨ Intent Assist
        </h1>
        <p className="text-sm text-gray-500 mt-1">Digital Wellbeing Prototype</p>
      </div>

      <PhoneFrame activeTab={activeTab} onTabChange={handleTabChange} showNav={showNav}>
        {/* Lock Screen */}
        {screen === 'lock' && (
          <LockScreen onUnlock={handleUnlock} />
        )}

        {/* Intent Prompt (overlaid on home) */}
        {screen === 'intent' && (
          <div className="h-full bg-surface relative">
            {/* Home screen background */}
            <div className="px-5 pt-6">
              <p className="text-sm text-text-secondary">Good {getGreeting()},</p>
              <h2 className="text-xl font-semibold text-text">Welcome back 👋</h2>
              <div className="grid grid-cols-4 gap-4 mt-6">
                {[
                  { emoji: '💬', name: 'Messages' },
                  { emoji: '📷', name: 'Camera' },
                  { emoji: '📧', name: 'Gmail' },
                  { emoji: '🗺️', name: 'Maps' },
                  { emoji: '🎵', name: 'Music' },
                  { emoji: '📱', name: 'Instagram' },
                  { emoji: '📞', name: 'Phone' },
                  { emoji: '⚙️', name: 'Settings' },
                ].map((app) => (
                  <div key={app.name} className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl">
                      {app.emoji}
                    </div>
                    <span className="text-[10px] text-text-secondary">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <IntentPrompt onSelect={handleIntentSelect} onSkip={handleIntentSkip} />
          </div>
        )}

        {/* Feed Screen with optional overlays */}
        {(screen === 'feed' || screen === 'drift' || screen === 'alternatives') && (
          <div className="h-full relative">
            <MockAppFeed sessionTime={simulatedTime} intent={intent} />

            {screen === 'drift' && (
              <DriftNudge
                intent={intent}
                sessionTime={simulatedTime}
                onReturn={handleDriftReturn}
                onContinue={handleDriftContinue}
                onSaveForLater={handleDriftSave}
              />
            )}

            {screen === 'alternatives' && (
              <AlternativeSuggestions
                onSelect={handleAltSelect}
                onDismiss={handleAltDismiss}
              />
            )}
          </div>
        )}

        {/* Confirmation */}
        {screen === 'confirmation' && (
          <ConfirmationScreen
            selectedAlternative={selectedAlt}
            onContinue={handleConfirmContinue}
          />
        )}

        {/* Insights */}
        {screen === 'insights' && (
          <WeeklyInsights onRestart={handleRestart} />
        )}
      </PhoneFrame>

      {/* Flow indicator */}
      <div className="mt-6 flex items-center gap-2">
        {['lock', 'intent', 'feed', 'drift', 'alternatives', 'confirmation', 'insights'].map((step) => (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                screen === step
                  ? 'bg-primary w-6'
                  : 'bg-gray-400/40'
              }`}
            />
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-2 capitalize">
        {screen === 'lock' && 'Tap fingerprint to unlock'}
        {screen === 'intent' && 'Select your intent'}
        {screen === 'feed' && `Browsing... (drift at ${DRIFT_TRIGGER}s, limit at ${LIMIT_TRIGGER}s)`}
        {screen === 'drift' && 'Drift detected — choose an action'}
        {screen === 'alternatives' && 'Usage limit reached — explore alternatives'}
        {screen === 'confirmation' && 'Great choice!'}
        {screen === 'insights' && 'Weekly insights dashboard'}
      </p>
    </div>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
}
