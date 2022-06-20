export interface IPairsTableBodyProps {
  loading?: boolean;
  pair: {
    base: string;
    counter: string;
    baseAddress: string;
    counterAddress: string;
    poolAddress: string;
  };
  index: number;
  favouritePairs: string[];
  handleRemoveFavourite: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleAddFavourite: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
