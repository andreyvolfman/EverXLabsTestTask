import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { PairDetail } from "../../components/PairDetail/PairDetail";
import { pairDetailQuery } from "./PairDetailPage.selector";
import { IPair } from "../../components/PairsTable/PairsTable.interface";

const PairDetailPageComponent: FC = () => {
  const { poolAddress } = useParams();
  const pairs = useRecoilValue<IPair[]>(pairDetailQuery);

  // TODO: Can't get pair data from API because of 403. Use this hack instead.
  const pair = pairs.find((item) => item.poolAddress === poolAddress);
  if (pair === undefined) {
    return <div>Pair not found</div>;
  }
  return <PairDetail pair={pair} />;
};

export const PairDetailPage = memo(PairDetailPageComponent);
