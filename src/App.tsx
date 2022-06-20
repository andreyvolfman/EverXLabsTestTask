import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Page } from "./components/Page/Page";
import { PairDetailPage } from "./pages/pairDetail/PairDetailPage";
import { PairsPage } from "./pages/pairs/PairsPage";

const AppComponent: FC = () => {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<PairsPage />} />
        <Route path=":poolAddress" element={<PairDetailPage />} />
      </Routes>
    </Page>
  );
};

export const App = memo(AppComponent);
