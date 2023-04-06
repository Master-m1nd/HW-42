import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Input({title, paragraph}) {
    return(
    <>
        <h2 className="inputTitle">{title}</h2>
        <p className="paragraph">{paragraph}</p>
        
        {/* <form action="" className="form">

            <label for="username">Name</label>
            <input type="text" id="username" name="username" required></input> <br />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input> <br />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required></input> <br />

        </form> */}

        <Formik className="form"
            initialValues={{ name: '', email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                
                if(!values.name || values.name.length < 2) {
                    errors.name = 'Required';
                } else if (
                    /\d+/i.test(values.name)
                ) {
                    errors.name = 'Incorrect name';
                }

                if(!values.password) {
                    errors.password = 'Required';
                }

                return errors;
            }
            }
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
            {({isSubmitting }) => (
                <Form className="form">
                    <label className='label' htmlFor="name">Name</label>
                    <Field className="input" type="name" name="name" />
                    <ErrorMessage name="name" component="div" />

                    <label className='label' htmlFor="email">Email</label>
                    <Field className="input" type="email" name="email" />
                    <ErrorMessage name="email" component="div" />

                    <label className='label' htmlFor="password">Password</label>
                    <Field className="input" type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button className='btn create-btn' type="submit" disabled={isSubmitting}>
                        Create Account
                    </button>
                </Form>
            )}
        </Formik>
    </>
    )
}

export default Input;