import { Box, Divider, Grid, Typography } from "@mui/material";
import "animate.css";
import { ContactButtons, PropsButton } from "../ui";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const HomePage = () => {
  const buttons: PropsButton[] = [
    {
      name: "facebook",
      icon: <FacebookOutlinedIcon />,
      url: "https://www.facebook.com/slayercorp7",
      color: "#4267B2",
    },
    {
      name: "linkedin",
      icon: <LinkedCameraOutlinedIcon />,
      url: "https://www.linkedin.com/in/diego-caiza-43b795246",
      color: "#0A66C2",
    },
    {
      name: "whatsapp",
      icon: <WhatsAppIcon />,
      url: "https://api.whatsapp.com/send?phone=+593981704041&text=Hi",
      color: "#075e54",
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h2" sx={{ mb: 2 }}>
            Hola... Mi nombre es{" "}
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            className="animate__animated animate__fadeInLeftBig"
          >
            Diego Caiza
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ border: "solid 1px", mt: 2, mb: 1 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h3"
            component="h2"
            className="animate__animated animate__fadeInUp"
            sx={{ml:3}}
          >
            Software Developer
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ border: "solid 1px", mt: 2, mb: 1 }} />
        <Grid container >
          <Grid item xs sx={{ml:3, mr:2, fontSize:'20px'}}>
           Tecnólogo Superior en Desarrollo de Software.
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem sx={{border: '1px solid'}}/>
          <Grid item xs sx={{ml:3, mr:2}}>
            Especializacion: Desarrollo Web.(Frontend-Backend)
            (MERN Stack)
          </Grid>
        </Grid>

        <Divider variant="middle" sx={{ border: "solid 1px", mt: 2, mb: 1 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <ContactButtons buttons={buttons} />
        </Box>
      </Grid>
    </Grid>
  );
};
