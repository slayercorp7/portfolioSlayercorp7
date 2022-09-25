import { ImportantDevicesOutlined, TerminalOutlined, WebhookOutlined } from "@mui/icons-material";
import { Divider, Container } from "@mui/material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export const ServicePage = () => {
  return (
    <Box component={Container} alignContent='center'>
      <Typography variant="h2">Servicios</Typography>
      <Box display="flex" sx={{flexDirection:{xs:'column', sm:'row'}}} justifyContent='center'>
        <Card sx={{ maxWidth: 350, mt: 1 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#101b7a" }} aria-label="recipe">
                DC
              </Avatar>
            }
            title="Servicios disponibles"
          />
          <CardMedia
            component="img"
            sx={{ maxHeight: 190, minHeight: 120 }}
            image="web-design.PNG"
            alt="web-design"
          />
          <Divider orientation="horizontal" />
          <CardContent>
            <Typography variant="body1" color="InfoText" textAlign="center">
              Desarrollo web escalable
            </Typography>
            <Typography variant="body2" color="InfoText" textAlign="center">
              Desarrollo acompañado de tecnólogias fuertemente establecidas en
              el mercado, implementando frameworks y servicios solidos para el
              objetivo de un producto de calidad.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 350, mt: 1, minWidth:220}}>
          <CardHeader title="Desarrollo Web" sx={{ textAlign: "center" }} />
          <Divider orientation="horizontal"/>
          <CardContent>
            <Box display="flex" flexDirection="row" justifyContent='center' sx={{mt:2}}>
              <TerminalOutlined fontSize="large" sx={{mt:0.5, mx:1, paddingLeft:1, display:{xs:'none',sm:'block'}}}/>
              <Typography
                variant="subtitle1"
                color="InfoText"
                textAlign="center"
                sx={{mt:1, mr:1}}
              >
                Backend:
              </Typography>
              <img src="node.png" width={50} height={50} />
              <Typography
                variant="subtitle2"
                color="InfoText"
                sx={{mt:1.5, ml:1}}
              >
                NodeJS
              </Typography>
            </Box>

          <Divider orientation="horizontal" sx={{mt:1}}/>
          <Box display="flex" flexDirection="row" justifyContent='center' sx={{mt:2}}>
              <ImportantDevicesOutlined fontSize="large" sx={{mt:0.5, mx:1, display:{xs:'none',sm:'block'}}}/>
              <Typography
                variant="subtitle1"
                color="InfoText"
                textAlign="center"
                sx={{mt:1.5, mr:1}}
              >
                Frontend:
              </Typography>
              <img src="hexagon.png" width={50} height={55} />
              <Typography
                variant="subtitle2"
                color="InfoText"
                sx={{mt:2, ml:1}}
              >
                ReactJS
              </Typography>
            </Box>
          <Divider orientation="horizontal" sx={{mt:1}}/>
          <Box display="flex" flexDirection="row" justifyContent='center' sx={{mt:2}}>
              <WebhookOutlined fontSize="large" sx={{mt:0.5, mx:1, display:{xs:'none',sm:'block'}}}/>
              <Typography
                variant="subtitle1"
                color="InfoText"
                textAlign="center"
                sx={{mt:1.5, mr:2}}
              >
                Híbrido:
              </Typography>
              <img src="next.png" width={50} height={50} />
              <Typography
                variant="subtitle2"
                color="InfoText"
                sx={{mt:2, ml:1}}
              >
                NextJS
              </Typography>
            </Box>
            
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
