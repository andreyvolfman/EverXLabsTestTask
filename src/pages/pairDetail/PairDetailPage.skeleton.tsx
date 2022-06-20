import { FC, memo } from "react";
import { PairDetail } from "../../components/PairDetail/PairDetail";

const PairDetailPageSkeletonComponent: FC = () => {
  return <PairDetail loading />;
};

export const PairDetailPageSkeleton = memo(PairDetailPageSkeletonComponent);
