import { FC, memo } from "react";
import { PairsTable } from "../../components/PairsTable/PairsTable";

const PairsPageSekeletonComponent: FC = () => {
  return <PairsTable pairs={[]} loading />;
};

export const PairsPageSekeleton = memo(PairsPageSekeletonComponent);
