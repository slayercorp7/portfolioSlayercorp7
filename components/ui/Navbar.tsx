import { useContext } from "react";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { UiContext } from "../../context";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

export const Navbar = () => {
  const { pathname, push } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar sx={{mt:4}}>
      <Toolbar>
        <NextLink href={"/"} passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Diego Caiza | </Typography>
            <Typography sx={{ ml: 0.5, fontFamily: "cursive" }}>
            Slayercorp7
            </Typography>
          </Link>
        </NextLink>
        <Box flex={1} textAlign="end" sx={{ mr: 2 }}>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <NextLink href={"/"} passHref>
              <Link>
                <Button
                  variant="outlined"
                  color={pathname === "/" ? "primary" : "secondary"}
                >
                  <HomeOutlinedIcon sx={{mr:1}}/>
                  Home
                </Button>
              </Link>
            </NextLink>
            <NextLink href={"/service"} passHref>
              <Link>
                <Button
                  variant="outlined"
                  color={pathname === "/service" ? "primary" : "secondary"}
                  sx={{ ml: 1 }}
                >
                  <RoomServiceOutlinedIcon sx={{mr:1}}/>
                  Servicios
                </Button>
              </Link>
            </NextLink>
            <NextLink href={"/portfolio"} passHref>
              <Link>
                <Button
                  variant="outlined"
                  color={pathname === "/portfolio" ? "primary" : "secondary"}
                  sx={{ ml: 1 }}
                >
                  <DocumentScannerOutlinedIcon sx={{mr:1}}/>
                  Portafolio
                </Button>
              </Link>
            </NextLink>
            <NextLink href={"/contact"} passHref>
              <Link>
                <Button
                  variant="outlined"
                  color={pathname === "/contact" ? "primary" : "secondary"}
                  sx={{ ml: 1 }}
                >
                  <ConnectWithoutContactOutlinedIcon sx={{mr:1}}/>
                  Contacto
                </Button>
              </Link>
            </NextLink>

            <Box />
          </Box>
        </Box>
        <Button
          className="circular-btn"
          variant="outlined"
          sx={{ display: { xs: "flex", sm: "flex", md: "none", zIndex:1200 } }}
          onClick={toggleSideMenu}
        >
          <MapsHomeWorkOutlinedIcon sx={{mr:0.5}}/>
          Menú
        </Button>
      </Toolbar>
    </AppBar>
  );
};
