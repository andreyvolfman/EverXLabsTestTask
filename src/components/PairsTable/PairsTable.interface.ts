export interface IPair {
  base: string;
  counter: string;
  baseAddress: string;
  counterAddress: string;
  poolAddress: string;
}

export interface IPairsTableProps {
  pairs: IPair[];
  loading?: boolean;
}
