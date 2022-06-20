import { FC, memo } from "react";
import { Box } from "@mui/material";
import { IPageProps } from "./Page.interface";
import { pageStyle } from "./Page.style";

const PageComponent: FC<IPageProps> = (props) => {
  const { children } = props;

  return (
    <Box sx={pageStyle.container}>
      <Box sx={pageStyle.inner}>{children}</Box>
    </Box>
  );
};

export const Page = memo(PageComponent);
