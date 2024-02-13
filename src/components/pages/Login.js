import React, { useContext,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "lexio9211@gmai.com",
        password: "Pink9211!",
    });

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(formData, navigate);
    };

    return (
        <div className='d-flex col-12'>
            <img
            src=""
        </div>
    )