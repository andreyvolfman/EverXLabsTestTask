import { FC, memo, useState } from "react";
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  Typography,
  TableFooter,
  TablePagination,
  Tabs,
  Tab,
  Skeleton,
} from "@mui/material";
import { IPairsTableProps } from "./PairsTable.interface";
import { pairsTableStyle } from "./PairsTable.styles";
import { PairsTableBody } from "../PairsTableBody/PairsTableBody";

enum TabValues {
  All,
  Favourites,
}

const PairsTableComponent: FC<IPairsTableProps> = (props) => {
  const rowsPerPage = 10;
  const [page, setPage] = useState(0);
  const [tab, setTab] = useState(0);
  const [favouritePairs, setFavouritePairs] = useState<string[]>([]);

  const { loading } = props;

  let pairs;
  if (loading) {
    pairs = new Array(10).fill({});
  } else if (tab === TabValues.Favourites) {
    pairs = props.pairs.filter((pair) => {
      return favouritePairs.includes(pair.poolAddress);
    });
  } else {
    pairs = props.pairs;
  }

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleAddFavourite =
    (poolAddress: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setFavouritePairs(favouritePairs.concat(poolAddress));
    };

  const handleRemoveFavourite =
    (poolAddress: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setFavouritePairs(
        favouritePairs.filter((pair) => {
          return pair !== poolAddress;
        })
      );
    };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(0);
    setTab(newValue);
  };

  return (
    <>
      <Typography variant="h1" component="h1" sx={pairsTableStyle.title}>
        {loading ? (
          <Skeleton
            sx={{ bgcolor: "#191e3e" }}
            animation="wave"
            width={160}
            height={36}
          />
        ) : (
          "USDT Pairs"
        )}
      </Typography>

      <Tabs value={tab} onChange={handleTabChange}>
        <Tab label="All" sx={pairsTableStyle.tabButton} />
        <Tab label="Favourites" sx={pairsTableStyle.tabButton} />
      </Tabs>

      <TableContainer sx={pairsTableStyle.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={pairsTableStyle.bodyCell}>#</TableCell>
              <TableCell sx={pairsTableStyle.bodyCell}>Pair</TableCell>
              <TableCell sx={pairsTableStyle.bodyCell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pairs
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((pair, index) => (
                <PairsTableBody
                  loading={loading}
                  key={pair?.baseAddress ?? index}
                  pair={pair}
                  index={index}
                  favouritePairs={favouritePairs}
                  handleRemoveFavourite={handleRemoveFavourite(
                    pair.poolAddress
                  )}
                  handleAddFavourite={handleAddFavourite(pair.poolAddress)}
                />
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10]}
                count={pairs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                sx={pairsTableStyle.pagination}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export const PairsTable = memo(PairsTableComponent);
