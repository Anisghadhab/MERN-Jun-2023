import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((product) => {
                setTitle(product.data.product.title);
                setPrice(product.data.product.price);
                setDescription(product.data.product.description);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }, [id]);

    const handleEdit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/products/${id}`, {
                title,
                price,
                description,
            })
            .then((editedProduct) => {
                console.log(editedProduct);
                navigate('/products');
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    const handleDelete = () => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((msg) => {
                console.log(msg);
                navigate('/products');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleGoBack = ()=> {
        navigate('/products')
    }

    return (
        <div>
            <h3>Edit Product</h3>
            <form onSubmit={handleEdit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary me-2">
                    Apply
                </button>
                <button onClick={handleDelete} className="btn btn-danger">
                    Delete
                </button>
                <button onClick={handleGoBack} className="btn btn-primary me-2">
                    Go Back
                </button>
            </form>
        </div>
    );
};

export default Edit;
