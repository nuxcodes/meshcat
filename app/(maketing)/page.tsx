import EditorSection from '@/components/marketing/EditorSection';
import GameIntroSection from '@/components/marketing/GameIntroSection';
import GameplaySection from '@/components/marketing/GameplaySection';
import MainHero from '@/components/marketing/MainHero';
import MarketSection from '@/components/marketing/MapSection';

export default function Home() {
  return (
    <div className="">
      <div className="relative z-10">
        <GameIntroSection></GameIntroSection>
      </div>
      <MainHero></MainHero>
    </div>
  );
}
