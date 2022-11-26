import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import NoutFound from './Pages/NotFound';
import { GithubProvider } from './Context/Github/GithubContext';
import { AlertProvider } from './Context/Alert/AlertContext';
import Alert from './Components/Layout/Alert';
import User from './Pages/User';

const App = () => {
    return (
        <GithubProvider>
            <AlertProvider>
                <BrowserRouter>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar />
                        <main className='container mx-auto px-3 pb-12'>
                            <Alert />
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/user/:login' element={<User />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/*' element={<NoutFound />} />

                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </BrowserRouter>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;