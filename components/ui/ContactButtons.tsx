import React, { FC, ReactElement } from "react";
import { useRouter } from "next/router";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export interface PropsButton {
  name: string;
  url: string;
  icon: ReactElement;
  color: string
}
interface props {
  buttons: PropsButton[];
}
export const ContactButtons: FC<props> = ({ buttons }) => {

  const router = useRouter();

  const onClickButton = (url: string) => {
    router.push(url)
  }

  return (
    <BottomNavigation sx={{ width: 450, height:50 }}>
      {buttons.map((prop) => (
        <BottomNavigationAction
          key={prop.name}
          label={prop.name}
          value={prop.name}
          icon={prop.icon}
          onClick={() => onClickButton(prop.url)}
          sx={{
            ":hover": {
              animation: "spin 0.5s linear normal",
              "@keyframes spin": {
                "0%": {
                  transform: "rotate(0deg)",
                },
                "100%": {
                  transform: "rotate(360deg)",
                },
              },
            },
            color:`${prop.color}`,
          }}
        />
      ))}
    </BottomNavigation>
  );
};
