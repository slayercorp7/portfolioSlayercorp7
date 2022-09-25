import { HomeLayout, ContactPage } from "../components"

const contact = () => {
  return (
    <HomeLayout title={"Contactos"} name={"Slayercorp7"} description={"Página de Contacto"}>
        <ContactPage/>
    </HomeLayout>
  )
}

export default contact