import GameIntroSection from '@/components/marketing/GameIntroSection';
import MarketSection from '@/components/marketing/MarketSection';

export default function Home() {
  return (
    <div className="lg:pl-[100px]">
      <GameIntroSection></GameIntroSection>
      <MarketSection></MarketSection>
    </div>
  );
}
