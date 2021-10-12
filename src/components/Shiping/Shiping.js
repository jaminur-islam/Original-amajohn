import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shiping = () => {
  const {user} = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(watch('name'));
  const onSubmit = data => console.log(data);
  return (
    <div>
      <h1> this is shiping page </h1>
      <div style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center'}}>     
      
       <form onSubmit={handleSubmit(onSubmit)}>
           
      <input defaultValue={user.displayName} {...register("name")} />
      <br />
      
      <input defaultValue={user.email} {...register("email", { required: true })} />
      <br />

      <input type='password' defaultValue={user.password} {...register("password", { required: true })} />
      <br />

      {errors.email && <span style={{color: 'red'}}>This field is required</span>}
      <br />
      
      <input type="submit" />
    </form>
  </div>
    </div>
  );
};

export default Shiping;