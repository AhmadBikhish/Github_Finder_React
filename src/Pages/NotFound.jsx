import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const NoutFound = () => {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, marginTop: '-100px' }} animate={{ opacity: 1, marginTop: '0px' }}
                transition={{ duration: 1 }}>
                <div className="hero">
                    <div className="text-center hero-content">
                        <div className="max-w-lg">
                            <h1 className="text-8xl font-bold mb-8">Oops!</h1>
                            <p className="text-5xl mb-8">404 - Page not found!</p>
                            <Link to="/" className='btn btn-primary mt-10'><FaHome className='mr-2' />Back To Home</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
} 

export default NoutFound;