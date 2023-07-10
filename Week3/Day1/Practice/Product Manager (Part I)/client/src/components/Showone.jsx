import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Showone = () => {
    const [oneProduct, setOneProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                setOneProduct(response.data.product);
            })
            .catch((err) => {
                console.log("There is an error: ", err);
            });
    }, [id]);

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

    return (
        <div>
            <fieldset>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{oneProduct.title}</td>
                            <td>{oneProduct.price}</td>
                            <td>{oneProduct.description}</td>
                            <td>
                                <Link to={`/products/edit/${id}`} className="btn btn-primary me-2">
                                    Edit
                                </Link>
                                <button onClick={handleDelete} className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
};

export default Showone;
