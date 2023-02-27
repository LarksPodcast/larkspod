import Nav from "./Nav"
import Footer from "./footer"

export default function Layout({component}: any) {
  return (
    <div>
       <Nav />
        {component}
       <Footer />
    </div>
  )
}
