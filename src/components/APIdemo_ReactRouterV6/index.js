import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Weather from './Weather'

function Main() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/weather'>Weather</Link>
                    </li>
                    <li>
                        <Link to='/product'>Product</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='weather' element={<Weather />} />
                <Route path='product' element={<Product />} />
            </Routes>
        </>
    )
}

export default Main