import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Loader/UserContext';
import MyreviewCard from './MyreviewCard';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext)
    const { email } = user;
    const [myreview, setMyreview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${email}`, {
            headers: { authorization: `Bearer ${localStorage.getItem('food-token')}` }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }

                return res.json();
            })
            .then(data => setMyreview(data))

    }, [email, logOut])

    const  update=() => {

    }

    const deleteReview = id => {
        console.log('review deleting id :', id)
        const proceed = window.confirm('Are you sure to delete ?');

        if (proceed) {
            console.log('deleting user with id: ', id)
            fetch(`http://localhost:5000/minereviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                     console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        console.log(myreview)
                        const newReview = myreview.filter(review=> review._id !== id )
                        setMyreview(newReview)

                    }
                });
        }


    }

    return (
        <div>
            {
                myreview.map(review => <MyreviewCard
                    key={review._id}
                    deleteReview={deleteReview}
                    review={review}
                    update={update}
                ></MyreviewCard>)
            }

        </div>
    );
};

export default MyReview;