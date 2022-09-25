import { Box, Button, Container } from "@mui/material";
import { useRef } from "react";
import { CardCourse, CardStudio, CardSkill } from "../portfolio";

export const PortfolioPage = () => {
  const refCv = useRef<HTMLAnchorElement>(null);

  const onClickButtonCv = () => {
    refCv.current?.click()
  }
  return (
    <Box component={Container} justifyContent="center">
      <Box
        display="flex"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignContent: { xs: "inherit", md: "center" },
          alignItems: { xs: "center", md: "inherit" },
        }}
        justifyContent="center"
      >
        <CardStudio />
        <CardCourse />
        <CardSkill />
      </Box>
      <Box
        display="flex"
        sx={{ justifyContent: { xs: "center", md: "right" } }}
      >
        <a
          href={"cv2022.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          download
          ref={refCv}

        ></a>
        <Button
          variant="outlined"
          sx={{ zIndex: 2, width: 280 }}
          color="success"
          onClick={onClickButtonCv}
        >
          Descargar CV
        </Button>
      </Box>
    </Box>
  );
};
