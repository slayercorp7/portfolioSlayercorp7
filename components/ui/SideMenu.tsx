import { useContext } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { UiContext } from "../../context";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import { useRouter } from 'next/router';

export const SideMenu = () => {
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  const router  = useRouter()

  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.replace(url);
  };

  return (
    <Drawer
      open={isMenuOpen}
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
      onClose={toggleSideMenu}
      anchor="right"
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem sx={{ mb: 2 }} button onClick={() => navigateTo("/")}>
            <ListItemIcon>
              <MapsHomeWorkOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem sx={{ mb: 2 }} button onClick={() => navigateTo("/service")}>
            <ListItemIcon>
              <RoomServiceOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Servicio"} />
          </ListItem>
          <ListItem sx={{ mb: 2 }} button onClick={() => navigateTo("/portfolio")}>
            <ListItemIcon>
              <DocumentScannerOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"PortaFolio"} />
          </ListItem>
          <ListItem sx={{ mb: 2 }} button onClick={() => navigateTo("/contact")}>
            <ListItemIcon>
              <ConnectWithoutContactOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Contacto"} />
          </ListItem>
        </List>
        <Typography sx={{ position: "fixed", bottom: 10, ml:10 }} variant='caption' component='footer'>
          ®Slayercorp7
        </Typography>
      </Box>
    </Drawer>
  );
};
