import a from "./a.png"
import  './Header.css'

function Header() {
  return (
    <header className="container">
    <div className="bosh">
     <img src={a} alt="" />
     <nav>
         <ul>
             <li>
                 <a href="#">Home</a>
             </li>
             <li>
                 <a href="#">Product</a>
             </li>
             <li>
                 <a href="#">Faq</a>
             </li>
             <li>
                 <a href="#">Contact</a>
             </li>
         </ul>
     </nav>
    </div>
 </header>
  )
}

export default Header
