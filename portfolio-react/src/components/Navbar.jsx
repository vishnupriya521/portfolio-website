import { Link } from "react-router-dom";


function Navbar(){

return (

<nav className="
bg-gray-900
text-white
p-5
flex
justify-center
gap-6
">


<Link to="/">
Home
</Link>


<Link to="/projects">
Projects
</Link>


<Link to="/about">
About
</Link>


<Link to="/skills">
Skills
</Link>


<Link to="/contact">
Contact
</Link>


<Link to="/admin">
Admin
</Link>


</nav>

);

}


export default Navbar;