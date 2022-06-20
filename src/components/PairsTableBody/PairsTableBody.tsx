import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { TableCell, TableRow, IconButton, Skeleton } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { IPairsTableBodyProps } from "./PairsTableBody.interface";
import { pairsTableBodyStyle } from "./PairsTableBody.style";

const PairsTableBodyComponent: FC<IPairsTableBodyProps> = (props) => {
  const {
    loading,
    pair,
    index,
    favouritePairs,
    handleRemoveFavourite,
    handleAddFavourite,
  } = props;

  return (
    <TableRow component={Link} to={pair.poolAddress ?? "/"}>
      <TableCell
        sx={{
          ...pairsTableBodyStyle.tableCell,
          width: "100px",
        }}
      >
        {index + 1}
      </TableCell>
      <TableCell sx={pairsTableBodyStyle.tableCell}>
        {loading ? (
          <Skeleton
            sx={{ bgcolor: "#050b2e" }}
            animation="wave"
            width={600}
            height={36}
          />
        ) : (
          `${pair.base}/${pair.counter}`
        )}
      </TableCell>
      <TableCell sx={pairsTableBodyStyle.tableCell} align="right">
        {favouritePairs.includes(pair.poolAddress) ? (
          <IconButton onClick={handleRemoveFavourite}>
            <Star sx={pairsTableBodyStyle.startColor} />
          </IconButton>
        ) : (
          <IconButton onClick={handleAddFavourite}>
            <StarBorder sx={pairsTableBodyStyle.startColor} />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};

export const PairsTableBody = memo(PairsTableBodyComponent);
