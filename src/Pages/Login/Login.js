import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from './Login.module.css';

export default function Login() {
  const [show, changeShow] = useState(true);
  const toggler = () => changeShow(!show);
  return (
    <>
      <div>SignUp Page reached</div>
      <button type="button" onClick={toggler}>
        Toggl
      </button>
      {show ? <SignIn /> : <SignUp />}
    </>
  );
}

const SignIn = () => {
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
          name="password"
          placeholder="Password"
          type="password"
          ref={register({
            required: 'Required',
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
        />
        {errors.password && errors.password.message}

        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

const SignUp = () => {
  const { handleSubmit, register, errors } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (values) => console.log(values);

  return (
    <div className={classes.big1}>
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
          placeholder="Username"
          ref={register({
            required: 'Required',
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
        />

        {errors.username && errors.username.message}
        <input
          className={classes.input}
          name="password"
          placeholder="Password"
          type="password"
          ref={register({
            required: 'Required',
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
        />
        {errors.password && errors.password.message}

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};
