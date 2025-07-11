import {
    FaSearch,
    FaApple,
    
} from "react-icons/fa"


function Navbar()
{
   return(
    
    <nav>
    <div className="container items-center">
    <ul className="flex space-x-10 px-4 text-xs items-center text-center justify-center">
        <li>
            <FaApple/>
        </li>
        <li className="hover: cursor-pointer decoration-solid">Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>Watch</li>
        <li>Airpods</li>
        <li>TV&Home</li>
        <li>Entertainment</li>
        <li>Accessories</li>
        <li>Support</li>
        <li>
           <FaSearch className="text-lg" />
        </li>
          
    </ul>
    <p className="text-xs py-4">Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards</p>
    </div>
    </nav>
    
    
    
   )
}

export default Navbar