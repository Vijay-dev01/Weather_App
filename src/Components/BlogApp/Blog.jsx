import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export default function Blog() {
    const [cards, setCards] = useState([]);
    const [newPost, setNewPost] = useState({
        title: '',
        body: ''
    });

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setCards(response.data))
            .catch((error) => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(() => {
                const updatedDelete = cards.filter((card) => card.id !== id);
                setCards(updatedDelete);
                console.log('Updated Delete', updatedDelete);
            })
            .catch((error) => console.error('Error', error));
    };

    const handleCreatePost = () => {
        axios
            .post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then((response) => {
                setCards([...cards, response.data]);
                console.log('Post created:', response.data);
            })
            .catch((error) => console.error('Error creating post:', error));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({
            ...newPost,
            [name]: value
        });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 mb-4"> 
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">New Post</h5>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    name="title"
                                    value={newPost.title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    placeholder="Body"
                                    name="body"
                                    value={newPost.body}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={handleCreatePost}
                            >
                                Create Post
                            </button>
                        </div>
                    </div>
                </div>

                {/* {cards.map((card) => ( */}
                    {/* {cards.reverse().map((card) => ( */}
                    {[...cards].reverse().map((card) => (
                    <div className="col-md-4 mb-4" key={nanoid()}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.body}</p>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(card.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}