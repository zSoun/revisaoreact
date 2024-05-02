import "./Hero.css"
import Tenis from "../../assets/Tenis.png"

export default function Hero() {

   return (
       <>
           <h2>Isso é um Hero</h2>
           <img className="imagem" src={Tenis} alt="" />
       </>
   )
}