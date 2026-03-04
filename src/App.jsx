import { useState, useEffect, useRef, useCallback } from 'react';
import { RotateCcw } from 'lucide-react';
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

const DRIFT_TRIGGER = 10;
const LIMIT_TRIGGER = 15;
const TIME_MULTIPLIER = 60;

const STEPS = ['lock', 'intent', 'feed', 'drift', 'alternatives', 'confirmation', 'insights'];

const stepLabels = {
  lock: 'Tap fingerprint to unlock',
  intent: 'Select your intent',
  feed: `Browsing… (nudge at ${DRIFT_TRIGGER}s, limit at ${LIMIT_TRIGGER}s)`,
  drift: 'Drift detected — choose an action',
  alternatives: 'Usage limit — explore alternatives',
  confirmation: 'Great choice!',
  insights: 'Weekly insights dashboard',
};

export default function App() {
  const [screen, setScreen] = useState('lock');
  const [intent, setIntent] = useState(null);
  const [sessionTime, setSessionTime] = useState(0);
  const [selectedAlt, setSelectedAlt] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [driftDismissed, setDriftDismissed] = useState(false);
  const [altDismissed, setAltDismissed] = useState(false);
  const timerRef = useRef(null);

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

  useEffect(() => {
    return () => stopTimer();
  }, [stopTimer]);

  useEffect(() => {
    if (screen === 'feed' && sessionTime >= LIMIT_TRIGGER && driftDismissed && !altDismissed) {
      stopTimer();
      setScreen('alternatives');
    } else if (screen === 'feed' && sessionTime >= DRIFT_TRIGGER && !driftDismissed) {
      stopTimer();
      setScreen('drift');
    }
  }, [sessionTime, screen, driftDismissed, altDismissed, stopTimer]);

  const handleUnlock = () => setScreen('intent');

  const handleIntentSelect = (option) => {
    setIntent(option);
    setScreen('feed');
    setSessionTime(0);
    setDriftDismissed(false);
    setAltDismissed(false);
    startTimer();
  };

  const handleIntentSkip = () => {
    setIntent(null);
    setScreen('feed');
    setSessionTime(0);
    setDriftDismissed(false);
    setAltDismissed(false);
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
    setAltDismissed(true);
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
    setAltDismissed(false);
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

  const simulatedTime = sessionTime * TIME_MULTIPLIER;
  const hasOverlay = screen === 'drift' || screen === 'alternatives';
  const showNav = !['lock', 'intent'].includes(screen) && !hasOverlay;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#eceef0]">
      {/* Title */}
      <div className="mb-5 text-center">
        <div className="flex items-center justify-center gap-1.5">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <span className="text-white text-[11px]">✦</span>
          </div>
          <h1 className="text-[18px] font-bold text-gray-800 tracking-tight">
            Intent Assist
          </h1>
        </div>
        <p className="text-[10px] text-gray-400 mt-1 font-medium">Digital Wellbeing Prototype</p>
      </div>

      <PhoneFrame activeTab={activeTab} onTabChange={handleTabChange} showNav={showNav}>
        {screen === 'lock' && (
          <LockScreen onUnlock={handleUnlock} />
        )}

        {screen === 'intent' && (
          <div className="h-full bg-[#f8f9fa] relative overflow-hidden">
            <div className="px-5 pt-4">
              <p className="text-[12px] text-text-secondary/60 font-medium">Good {getGreeting()},</p>
              <h2 className="text-[17px] font-semibold text-text mt-0.5">Welcome back 👋</h2>
              <div className="grid grid-cols-4 gap-x-4 gap-y-3.5 mt-5">
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
                    <div className="w-[46px] h-[46px] rounded-[12px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex items-center justify-center text-[18px]">
                      {app.emoji}
                    </div>
                    <span className="text-[9px] text-text-secondary/50 font-medium truncate max-w-[46px]">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <IntentPrompt onSelect={handleIntentSelect} onSkip={handleIntentSkip} />
          </div>
        )}

        {(screen === 'feed' || screen === 'drift' || screen === 'alternatives') && (
          <div className="h-full relative overflow-hidden">
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

        {screen === 'confirmation' && (
          <ConfirmationScreen
            selectedAlternative={selectedAlt}
            onContinue={handleConfirmContinue}
          />
        )}

        {screen === 'insights' && (
          <WeeklyInsights onRestart={handleRestart} />
        )}
      </PhoneFrame>

      {/* Flow indicator */}
      <div className="mt-5 flex items-center gap-[5px]">
        {STEPS.map((step) => (
          <div
            key={step}
            className={`h-[4px] rounded-full transition-all duration-300 ${
              screen === step
                ? 'bg-primary w-5'
                : 'bg-gray-300/40 w-[4px]'
            }`}
          />
        ))}
      </div>
      <p className="text-[10px] text-gray-400/70 mt-2 font-medium">
        {stepLabels[screen]}
      </p>

      {/* Restart button — visible when past the lock screen */}
      {screen !== 'lock' && (
        <button
          onClick={handleRestart}
          className="mt-4 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-gray-700 text-[11px] font-medium transition-all duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.06)] active:scale-[0.97]"
        >
          <RotateCcw size={12} strokeWidth={2.2} />
          Restart Demo
        </button>
      )}
    </div>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
}
