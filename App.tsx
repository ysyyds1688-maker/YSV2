import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { GamesIndexPage } from './pages/games/GamesIndexPage';
import { BaccaratPage } from './pages/games/BaccaratPage';
import { SlotsPage } from './pages/games/SlotsPage';
import { SportsPage } from './pages/games/SportsPage';
import { PokerPage } from './pages/games/PokerPage';
import { LotteryPage } from './pages/games/LotteryPage';
import { RegisterGuidePage } from './pages/guides/RegisterGuidePage';
import { WithdrawalGuidePage } from './pages/guides/WithdrawalGuidePage';
import { USDTDepositGuidePage } from './pages/guides/USDTDepositGuidePage';
import { ForgotPasswordGuidePage } from './pages/guides/ForgotPasswordGuidePage';
import { ScamPreventionGuidePage } from './pages/guides/ScamPreventionGuidePage';
import { PromotionsPage } from './pages/PromotionsPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/trust/AboutPage';
import { SecurityPage } from './pages/trust/SecurityPage';
import { ContactPage } from './pages/trust/ContactPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
          <Navbar />
          <main className="relative">
            <Routes>
              {/* 首頁 */}
              <Route path="/" element={<HomePage />} />

              {/* 遊戲專區 */}
              <Route path="/games" element={<GamesIndexPage />} />
              <Route path="/games/baccarat" element={<BaccaratPage />} />
              <Route path="/games/slots" element={<SlotsPage />} />
              <Route path="/games/sports" element={<SportsPage />} />
              <Route path="/games/poker" element={<PokerPage />} />
              <Route path="/games/lottery" element={<LotteryPage />} />
              <Route path="/games/fishing" element={<SlotsPage />} /> {/* 捕魚機暫時使用相同頁面 */}
              <Route path="/games/esports" element={<SportsPage />} /> {/* 電競暫時使用相同頁面 */}

              {/* 新手教學 */}
              <Route path="/guides/register" element={<RegisterGuidePage />} />
              <Route path="/guides/withdrawal" element={<WithdrawalGuidePage />} />
              <Route path="/guides/usdt-deposit" element={<USDTDepositGuidePage />} />
              <Route path="/guides/forgot-password" element={<ForgotPasswordGuidePage />} />
              <Route path="/guides/scam-prevention" element={<ScamPreventionGuidePage />} />

              {/* 優惠活動 */}
              <Route path="/promotions" element={<PromotionsPage />} />

              {/* 最新消息 */}
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsPage />} />

              {/* 可信任信號頁 */}
              <Route path="/trust/about" element={<AboutPage />} />
              <Route path="/trust/security" element={<SecurityPage />} />
              <Route path="/trust/contact" element={<ContactPage />} />

              {/* 註冊頁面（暫時導向首頁） */}
              <Route path="/register" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
