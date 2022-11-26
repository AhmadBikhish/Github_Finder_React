import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const UserItem = ({ user: { login, avatar_url }, loading }) => {
    
    if(loading) return (
        <SkeletonTheme baseColor="white" highlightColor="#ddd">
            <div className='card shadow-md compact side bg-base-100'>
                <div className='flex-row items-center space-x-4 card-body'>
                    <div>
                        <div className='avatar'>
                            <Skeleton circle width={50} height={50} />
                            <div className='rounded-full shadow w-14 h-14'>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='card-title'>
                            <Skeleton width={150} height={20} />
                        </h2>
                        <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>
                            <Skeleton width={100} height={15} />
                        </Link>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
    else {
        return (
            <div className='card shadow-md compact side bg-base-100'>
                <div className='flex-row items-center space-x-4 card-body'>
                    <div>
                        <div className='avatar'>
                            <div className='rounded-full shadow w-14 h-14'>
                                <img src={avatar_url} alt='Profile' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='card-title'>
                            {login}
                        </h2>
                        <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>
                            Visit Profile
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;