import { Box, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import FooterImage from "../../public/native_react_brand_icon_211894.ico";
import FooterImage2 from "../../public/next.png";

export const Footer = () => {
  return (
    <Box 
    sx={{ bottom: 0,
       position: "fixed", 
       width: "100%", 
       display: "flex",
      flexDirection:{xs:'column', sm:'row'},
      justifyContent:'center',//propiedad para centrar el contenido
      alignItems:'center'
       }}
    >
      <Typography
        variant="caption"
        color="initial"
        sx={{ mx: 0.5 }}
      >
        Copyright ©2022. [Slayercorp7] Limited
      </Typography>
      <Typography sx={{ mt: 1, display:{xs:'none', sm:'block'}}}>
        <Image
          src={FooterImage}
          alt="logoFooter"
          className="IeRotateSvg"
          width={30}
          height={30}
        />
      </Typography>
      <Typography
        variant="caption"
        color="initial"
        sx={{ mx: 0.5 }}
      >
        Powered by NextJS
      </Typography>
      <Typography sx={{ mx: 1, display:{xs:'none', sm:'block'} }}>
        <Image
          src={FooterImage2}
          alt="logoNext"
          width={50}
          height={50}
        />
      </Typography>
    </Box>
  );
};
