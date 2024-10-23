import { Helmet } from 'react-helmet-async'
import Footer from './Layout/Common/Footer'
import Navbar from './Layout/Common/Navbar'
import Banner from './Layout/Home/Banner'
import CategorySection from './Layout/Home/CategorySection'
import FaqSection from './Layout/Home/FaqSection'

function App() {
 

  return (
    <>
    <Helmet>
          <title>Moviebazar| Home</title>
    </Helmet>
      <Banner/>
      <CategorySection/>
      <FaqSection/>
      
    </>
  )
}

export default App
