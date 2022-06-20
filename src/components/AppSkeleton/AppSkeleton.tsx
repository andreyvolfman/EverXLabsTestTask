import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Page } from "../Page/Page";
import { PairsPageSekeleton } from "../../pages/pairs/PairsPage.skeleton";
import { PairDetailPageSkeleton } from "../../pages/pairDetail/PairDetailPage.skeleton";

const AppSkeletonComponent: FC = () => {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<PairsPageSekeleton />} />
        <Route path=":poolAddress" element={<PairDetailPageSkeleton />} />
      </Routes>
    </Page>
  );
};

export const AppSkeleton = memo(AppSkeletonComponent);
