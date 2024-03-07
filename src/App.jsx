import './App.css';
import Header from './Header';
import MyCard from './Mycard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'



function App() {
  
  return (
    <>
      <Header title="Adopta un perrito" />
      
      <div className= "galeria">

      <MyCard
      imagen = "https://img.freepik.com/foto-gratis/pequeno-perrito-lindo-casa_144627-10931.jpg?t=st=1709690980~exp=1709694580~hmac=8bc9e723dcf2b85a382e04888f511ca810070039f6c4f5ca5f9477d237aa7794&w=360"
      nombre = "Gala"
      descripcion = "Es una perrita muy juguetona y llena de energía, estará feliz en tu hogar "
      color="danger"
      text="Yorkshire"
      />
      <MyCard
      imagen = "https://img.freepik.com/free-photo/beagle-dog-sitting-with-white-background_53876-30186.jpg?t=st=1709770681~exp=1709774281~hmac=7f7cd1ebedc429067ba1e65c20ffd4eb36667d677376596fa7a7b10aa2e12017&w=740"
      nombre = "Milo"
      descripcion = "Milo es muy tranquilo y obediente, dale un lindo hogar para que sea feliz "
      color="success"
      text="Beagle"
      />
      <MyCard
      imagen = "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?t=st=1709770797~exp=1709774397~hmac=cd413a27f8a74f6f3eb6d2028753e9b352b1c228cd603901da2fe3f11de1f443&w=360"
      nombre = "Roco"
      descripcion = "Es amigable y le encanta jugar, no te arrepentirás de llevarlo a tu hogar "
      color="primary"
      text="Pug"
      />
      <MyCard
      imagen = "https://img.freepik.com/free-photo/little-dog-sitting-bathroom_23-2148755296.jpg?t=st=1709770863~exp=1709774463~hmac=fb6fa37cd7ae291bac992f6dc188c2dfd2f764f1139e5db640997249b1ab04f2&w=360"
      nombre = "Coco"
      descripcion = "Coco es de tamaño pequeño, le gusta pasear y regalonear con sus amos, será tu compañero fiel"
      color="warning"
      text="Poodle"
      />

      </div>

      <Footer/>
    </>
  )
}

export default App
