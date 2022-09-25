import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { FondoSvg, Footer, SideMenu } from "../ui";
import { Navbar } from "../ui/Navbar";

interface props {
  title: string,
  name: string,
  description: string
}

export const HomeLayout: FC<PropsWithChildren<props>> = ({ children, description, name,title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={name} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>

        <link
          rel="icon"
          type="image/x-icon"
          href="native_react_brand_icon_211894.ico"
        />
      </Head>
      <FondoSvg classComponent="svg-up" src="wave(1).svg"/>

      <nav>
        <Navbar />
      </nav>
      
      <SideMenu />

      <main
        style={{ margin: "90px auto", maxWidth: "1440px", padding: "0px 30px" }}
      >
        {children}
        
      </main>

      <footer style={{maxWidth: '1440px',alignContent:'center'}}>
        <Footer />
      </footer>
      
      <FondoSvg classComponent="svg-down" src="wave(2).svg"/>

      
    </>
  );
};
