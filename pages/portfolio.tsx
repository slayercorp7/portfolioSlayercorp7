import { HomeLayout } from "../components"
import { PortfolioPage } from '../components/pages/PortfolioPage';

const portfolio = () => {
  return (
        <HomeLayout title={"Portafolio"} name={"Slayercorp7"} description={"Datos de interes"}>
            <PortfolioPage/>
        </HomeLayout>
    )
}

export default portfolio