import React  from 'react'
import  {useUserContext}  from '../Context/UserContextProvider';
function Profile() {

    const {user} = useUserContext();

    if(!user) return<div className='items-center justify-center text-4xl text-blue-300'>Please Login</div>;

    return(
        <div className='items-center justify-center text-4xl text-blue-300'>
            Hello {user.username}!!!
        </div>
    )
}

export default Profile