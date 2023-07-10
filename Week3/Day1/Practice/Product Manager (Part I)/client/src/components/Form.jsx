import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    console.log(props.handleView)
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const newProduct = {
        title,
        price,
        description,
    };

    const navigate = useNavigate();

    const handleSub = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/products", newProduct)
            .then((product) => {
                props.handleView(newProduct);
                setTitle('');
                setPrice(0);
                setDescription('');
                navigate('/products');
            })
            .catch((err) => {
                console.log("There is an error: ", err);
            });
    };

    return (
        <div>
            <fieldset>
                <form onSubmit={handleSub}>
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
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
            </fieldset>
        </div>
    );
};

export default Form;
