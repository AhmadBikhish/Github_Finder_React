import { AnimatePresence, motion } from 'framer-motion';

const About = () => {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className='text-6xl'>Github Finder</h1>
                <p className='mb-4 text-2xl font-light mt-20'>
                    A React app to search GitHub profiles and see profile details. This project is part of the
                    <a href='https://www.udemy.com/course/modern-react-front-to-back/'>{' '}React Front To Back</a>{' '}
                    Udemy course by
                    <strong><a href='https://traversymedia.com'> Ahmad Bikhish</a></strong>
                    .
                </p>
                <p className='text-lg text-gray-400 mt-16'>Version <span className='text-white'>1.0.0</span></p>
                <p className='text-lg text-gray-400 mt-16'>Layout By :
                    <a className='text-white' href='https://twitter.com/hassibmoddasser'> Fava Gostar</a>
                </p>
            </motion.div>
        </AnimatePresence>
    );
}

export default About;