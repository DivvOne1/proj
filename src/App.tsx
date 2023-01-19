import {Route, Routes} from 'react-router-dom'
import {Page} from './pages/1page'
import {Page2} from './pages/2pages'
import {Navigation} from './components/Navigation'
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';



function App() {
  return (
    <>
     
      <Navigation />
      <Routes>
        <Route path="/" element={ <Page /> } />
        <Route path="/about" element={ <Page2 /> } />
      </Routes>
    </>
  )
}
export default App;
