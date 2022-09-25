import { Paper } from "@mui/material";
import { FC } from "react";

interface Props {
  classComponent: string;
  src: string;
}

export const FondoSvg: FC<Props> = ({ classComponent, src}) => {
  return (
    <Paper variant="outlined">
       <img src={src}
      className={classComponent} /> 
       </Paper>
  );
};
