import { FC, memo } from "react";
import { useRecoilValue } from "recoil";
import { PairsTable } from "../../components/PairsTable/PairsTable";
import { IPair } from "../../components/PairsTable/PairsTable.interface";
import { pairsQuery } from "./PairsPage.selector";
import { Pair } from "./PairsPage.constant";

const PairsPageComponent: FC = () => {
  const pairs = useRecoilValue<IPair[]>(pairsQuery);
  let USDTPairs = pairs.filter((pair) => pair.counter === Pair.USDT);

  return <PairsTable pairs={USDTPairs} />;
};

export const PairsPage = memo(PairsPageComponent);
