import InputField from '../components/InputField'
import { useState } from 'react';
import AuthScreenLayout from '../Layouts/AuthScreenLayout'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Button from '../components/Button';

type FormValues = {
  email: string;
  password: string;
};
const schema = yup.object({
  password:yup.string().required('please enter a valid password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, ''),
  email:yup.string().email().required('Email is required').matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/, 'wrong email format'),
})
export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

export default function Login() {
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver:yupResolver(schema)});
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    
    < AuthScreenLayout  heading="Log in" mainTitle='If you have no account,' additionTItle='Sign up' path='/register'>
      <form onSubmit={onSubmit}>
        <InputField
        type='email'
         placeholder='Type your email address here'
          label="Email Address" margin='2rem'
           register={register}
           name="email"
           rules={{
            required: 'You must enter your email address.',
          }}
          errors={errors}
           />
        <InputField 
        type={visible?'text':'password'} 
        placeholder='Type your password here' 
        label="Password" margin='2rem'
         icon={true} visible={visible}
         setVisible={setVisible} 
         register={register} 
         name="password"
         rules={{
          required: 'You must enter a valid password.',
        }}
        errors={errors}
         />
        <Button title='Log in' />
      </form>
    </ AuthScreenLayout >
    
  )
}
