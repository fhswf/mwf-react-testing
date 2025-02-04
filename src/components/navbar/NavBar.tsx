import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getItemCount } from "../../features/cart/cartSlice";

const NavBar = () => {

    const navigate = useNavigate();

    const itemCount = useSelector(getItemCount);

    return (
        <nav className="flex justify-between p-4 border-b-2 border-gray-300">
			<div className="flex gap-2 justify-start mt-2">

				{/* Aufgabe: Home-Icon soll "http://localhost:3000/" aufrufen */}
				<Link to={'/'}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
					</svg>
				</Link>
				
				<div className="flex space-x-8 ml-10">

                    {/* Aufgabe: Products soll "http://localhost:3000/products" aufrufen */}
					<Link to={'/products'}>Products</Link>

                    {/* Add the following divs */}
					<Link to={'/playground'}>Playground</Link>

                    {/* Add the following divs */}
					<Link to={'/admin'}>Admin</Link>
					
				</div>
			</div>
			<div className="flex gap-2 justify-center">
				<div className="flex gap-1 justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
					</svg>
					<span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{ itemCount }</span>
				</div>
				<select id="location" name="location" value="Canada" className="block rounded-md border-0 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
					<option>United States</option>
					<option>Canada</option>
					<option>Mexico</option>
				</select>

                {/* Aufgabe: Register-Button soll "http://localhost:3000/register" aufrufen. Verwenden Sie hierzu den useNavigate-Hook */}
                <button type="button" onClick={() => navigate('/register')} className="nav-register rounded-md bg-indigo-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>

                {/* Aufgabe: Login-Button soll "http://localhost:3000/login" aufrufen. Verwenden Sie hierzu den useNavigate-Hook */}
				<button type="button" onClick={() => navigate('/login')} className="nav-login rounded-md bg-indigo-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>

			</div>
		</nav>
    )
};

export { NavBar };