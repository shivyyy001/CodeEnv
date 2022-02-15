import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ item, isDeleted, setIsDeleted }) => {
    const loggedinUser = useSelector(
        (state) => state.userReducer.userDetails
    ).username;

    const removeComment = () => {
        fetch(`http://localhost:3002/comment/delete/${item._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-key'),
            },
        })
            .then((response) => {
                if (!response.ok) {
                    console.log('Error while getting response');
                    return null;
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (isDeleted) setIsDeleted(false);
                else setIsDeleted(true);
            });
    };

    return (
        <div
            style={{
                backgroundColor: 'white',
                padding: '14px',
                borderRadius: '10px',
            }}
            className="mb-4"
        >
            <div className="mb-0" style={{ fontFamily: 'Handlee,cursive' }}>
                <div className="d-flex justify-content-between">
                    <div>
                        <span
                            style={{
                                fontWeight: '700',
                                marginRight: '20px',
                                fontSize: '14px',
                            }}
                        >
                            {item.username}
                        </span>
                        <span style={{ color: '#878787', fontSize: '12px' }}>
                            {new Date(item.date).toDateString()}
                        </span>
                    </div>
                    {loggedinUser === item.username ? (
                        <div>
                            <img
                                src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-lineal-color-kiranshastry.png"
                                alt="deletecomment"
                                title="Delete comment"
                                style={{
                                    height: '30px',
                                    width: '30px',
                                    cursor: 'pointer',
                                }}
                                onClick={removeComment}
                            />
                        </div>
                    ) : (
                        ``
                    )}
                </div>
            </div>
            <div>
                <span>{item.comments}</span>
            </div>
        </div>
    );
};

export default Comment;
