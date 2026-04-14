import { useState } from 'react';
import { GameProvider } from './store/GameContext';
import { GirisEkrani } from './screens/GirisEkrani';
import { SeviyeSecimi } from './screens/SeviyeSecimi';
import { OyunEkrani } from './screens/OyunEkrani';
import { SonucEkrani } from './screens/SonucEkrani';
import { Ayarlar } from './screens/Ayarlar';
import type { Difficulty } from './types/game';

type AppScreen = 'giris' | 'seviye' | 'oyun' | 'sonuc' | 'ayarlar';

function App() {
  const [screen, setScreen] = useState<AppScreen>('giris');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('medium');
  const [showAyarlar, setShowAyarlar] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameTotal, setGameTotal] = useState(10);

  if (showAyarlar) {
    return <Ayarlar onBack={() => setShowAyarlar(false)} />;
  }

  switch (screen) {
    case 'giris':
      return (
        <GirisEkrani
          onBasla={() => setScreen('seviye')}
          onAyarlar={() => setShowAyarlar(true)}
        />
      );
    case 'seviye':
      return (
        <SeviyeSecimi
          onSec={(d: Difficulty) => {
            setSelectedDifficulty(d);
            setScreen('oyun');
          }}
          onAyarlar={() => setShowAyarlar(true)}
        />
      );
    case 'oyun':
      return (
        <OyunEkrani
          difficulty={selectedDifficulty}
          onTamamla={(score: number, total: number) => {
            setGameScore(score);
            setGameTotal(total);
            setScreen('sonuc');
          }}
          onAyarlar={() => setShowAyarlar(true)}
        />
      );
    case 'sonuc':
      return (
        <SonucEkrani
          score={gameScore}
          total={gameTotal}
          onTekrarOyna={() => setScreen('seviye')}
          onAnaSayfa={() => setScreen('giris')}
          onAyarlar={() => setShowAyarlar(true)}
        />
      );
    default:
      return <GirisEkrani onBasla={() => setScreen('seviye')} onAyarlar={() => setShowAyarlar(true)} />;
  }
}

function AppWrapper() {
  return (
    <GameProvider>
      <App />
    </GameProvider>
  );
}

export default AppWrapper;
