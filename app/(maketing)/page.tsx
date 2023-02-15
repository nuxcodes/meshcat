import GameIntroSection from '@/components/marketing/GameIntroSection';
import GameplaySection from '@/components/marketing/GameplaySection';
import MarketSection from '@/components/marketing/MapSection';

export default function Home() {
  return (
    <div className="lg:pl-[100px]">
      <GameIntroSection></GameIntroSection>
      <GameplaySection></GameplaySection>
      <MarketSection></MarketSection>
    </div>
  );
}
