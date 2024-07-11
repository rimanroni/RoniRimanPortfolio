import About from "./ui/About"
import Container from "./ui/Container"
import Footer from "./ui/Footer"
import Headers from "./ui/Headers"
import Resume from "./ui/Resume"
import Skills from "./ui/Skills"

function App() {
 
  return (
    <>
      <main className="">
        
          <Headers/>
          <Container id={'about'}>
            <About/>
          </Container>
          <Container id={'skills'}>
            <Skills/>
          </Container>
          <Container id={'resume'}>
           <Resume/>
          </Container>
             <Footer/>
          
       </main>
        
    </>
  )
}

export default App
