import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './Login.module.css';

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (values) => console.log(values);

  return (
    <div className={classes.big}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.Container}>
        <input
          className={classes.input}
          name="email"
          placeholder="xyz@abc.com"
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        {errors.email && errors.email.message}

        <input
          className={classes.input}
          name="username"
          placeholder="Password"
          type="password"
          ref={register({
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
        />
        {errors.username && errors.username.message}

        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default Login;
