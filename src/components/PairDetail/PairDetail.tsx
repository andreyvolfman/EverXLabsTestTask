import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { CompareArrows } from "@mui/icons-material";
import { Typography, Skeleton, TextField, IconButton } from "@mui/material";
import { IPairDetailProps } from "./PairDetail.interface";
import { pairDetailStyle } from "./PairDetail.style";

const PairDetailComponent: FC<IPairDetailProps> = (props) => {
  const { pair, loading } = props;
  const [base, setBase] = useState("");
  const [quote, setQuote] = useState("");

  const handleClick = () => {};
  console.log(base);
  return (
    <div>
      <Link to="/" style={{ color: "#fff" }}>
        Back
      </Link>
      <div>
        <Typography variant="h1" component="h1" sx={pairDetailStyle.pair}>
          {loading ? (
            <Skeleton
              sx={{ bgcolor: "#191e3e" }}
              animation="wave"
              width={190}
              height={50}
            />
          ) : (
            `${pair?.base}/${pair?.counter}`
          )}
        </Typography>
      </div>
      <div>
        <TextField
          type="number"
          sx={{ background: "#fff" }}
          value={base}
          onChange={(event) => {
            setBase(event.target.value);
          }}
          disabled={quote.length > 0}
        />
        <IconButton onClick={handleClick}>
          <CompareArrows sx={pairDetailStyle.iconColor} />
        </IconButton>
        <TextField
          type="number"
          sx={{ background: "#fff" }}
          value={quote}
          onChange={(event) => {
            setQuote(event.target.value);
          }}
          disabled={base.length > 0}
        />
      </div>
    </div>
  );
};

export const PairDetail = memo(PairDetailComponent);
