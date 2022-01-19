import { Routes, Route, Link } from 'react-router-dom'

import { HomePage, NewsPage, DocsPage } from './pages/index'

function Pages()
{
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/news'>News</Link>
                    </li>
                    <li>
                        <Link to='/docs'>Docs</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/news' element={<NewsPage />} />
                <Route path='/docs' element={<DocsPage />} />
            </Routes>
        </>
    )
}
export default Pages