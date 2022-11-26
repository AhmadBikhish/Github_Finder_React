import { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from '../../Context/Github/GithubContext';
import { AnimatePresence, motion } from "framer-motion";

const UserList = () => {
    
    const { users, loading } = useContext(GithubContext);

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                        {users.map((user, i) => <UserItem key={i} user={user} loading={loading} />)}
                    </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default UserList;