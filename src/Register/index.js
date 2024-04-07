import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Icon } from "@iconify/react";
import loadingLoop from "@iconify/icons-line-md/loading-loop";
import style from "./index.module.css";
import {Link} from "react-router-dom";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
            .required('username is required'),
        email: Yup.string()
            .email('Invalid email address')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email Address')
            .required('Email Address is required'),
        password: Yup.string()
            .matches(/^[a-zA-Z1-9\s]+$/)
            .required('password is required')
    });

    const handleSubscribe = async (values, { resetForm }) => {
        try {
            setIsLoading(true);
            const payload = {
                username: values.username,
                email: values.email,
                password: values.password
            };
            const url = "http://localhost:6767/api/v1/user/register"
            const response = await axios.post(url, payload);

            if (response) {
                toast.success(`Hi ${values.username}, You have been registered successfully`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsLoading(false);
                console.log(response);
                resetForm();
            } else {
                toast.error('Registration failed. Please try again', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('Registration failed. Please try again', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubscribe}
            >
                {({ values, errors , touched, handleChange, handleBlur }) => (
                    <Form>
                        <div className={style.subCont}>
                            <div className={style.innerCont}>
                                <div className={style.contentCont}>
                                    <div className={style.socialimg}>
                                        <div className={style.contentSection}>
                                            <p className={style.topic}>Welcome to Ravera</p>
                                        </div>
                                    </div>

                                    <div className={style.inputSection}>
                                        <p className={style.text}>
                                            Register with valid details to stay connected to our network,
                                            get insights and updates on what's happening in our community!
                                        </p>
                                        <div className={style.username}>
                                            <label>
                                                Username:
                                            </label>
                                            <Field
                                                type="text"
                                                name="username"
                                                placeholder="Enter username"
                                                value={values.username}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{
                                                    borderColor: errors.username && touched.username ? "red" : "inherit",
                                                    height: "30px",
                                                    border: "1px solid black",
                                                    outline: "none",
                                                    borderRadius: '5px',
                                                    paddingLeft: '20px',
                                                    fontSize: "14px"
                                                }}
                                            />
                                            {errors.username && touched.username && (
                                                <div className={style.error}>{errors.username}</div>
                                            )}
                                        </div>

                                        <div className={style.email}>
                                            <label>
                                                Email:
                                            </label>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Enter email address"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{
                                                    borderColor: errors.email && touched.email ? "red" : "inherit",
                                                    height: "30px",
                                                    border: "1px solid black",
                                                    outline: "none",
                                                    borderRadius: '5px',
                                                    paddingLeft: '20px',
                                                    fontSize: "14px"
                                                }}
                                            />
                                            {errors.email && touched.email && (
                                                <div className={style.error}>{errors.email}</div>
                                            )}
                                        </div>

                                        <div className={style.password}>
                                            <label>
                                                Password:
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Enter password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{
                                                    borderColor: errors.password && touched.password ? "red" : "inherit",
                                                    height: "30px",
                                                    border: "1px solid black",
                                                    outline: "none",
                                                    borderRadius: '5px',
                                                    paddingLeft: '20px',
                                                    fontSize: "14px"
                                                }}
                                            />
                                            {errors.password && touched.password && (
                                                <div className={style.error}>{errors.password}</div>
                                            )}
                                        </div>

                                        <div className={style.btn}>
                                            <button type="submit" className={style.btn} style={{
                                                backgroundColor: "burlywood",
                                                border: "none",
                                                borderRadius: "5px"
                                            }}>
                                                {isLoading ? (
                                                    <div className="flex items-center justify-center">
                                                        <Icon width={24} height={24} icon={loadingLoop}/>
                                                    </div>
                                                ) : (
                                                    "Sign Up"
                                                )}
                                            </button>
                                        </div>
                                        <div className={style.last}>
                                            <p color={"rgba(196, 196, 196, 1)"}>Already have an Account?</p>
                                            <Link to={"/login"} className={style.linking} style={{ color:"burlywood",fontWeight:"500"}}>Sign in</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer/>
        </div>
    );
};

export default Register;
