import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from './Form';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((err) => {
                console.log('There is an error:', err);
            });
    }, []);

    const handleDel = (productId) => {
        axios
            .delete(`http://localhost:8000/api/products/${productId}`)
            .then((msg) => {
                console.log(msg);
                setProducts(products.filter((sglProduct) => sglProduct._id !== productId));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleView = (data) => {
        setProducts([...products, data]);
    };

    return (
        <div>
            <fieldset>
                <Form handleView={handleView} />
                <h2>Product List</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((oneProduct) => (
                            <tr key={oneProduct._id}>
                                <td>
                                    <Link to={`/products/${oneProduct._id}`}>{oneProduct.title}</Link>
                                </td>
                                <td>{oneProduct.price}</td>
                                <td>{oneProduct.description}</td>
                                <td>
                                    <Link to={`/products/edit/${oneProduct._id}`} className="btn btn-primary me-2">
                                        Edit
                                    </Link>
                                    <button onClick={() => handleDel(oneProduct._id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
};

export default Main;
