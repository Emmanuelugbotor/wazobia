import InputField from '../components/InputField'
import { useEffect, useState, useContext } from 'react';
import AuthScreenLayout from '../Layouts/AuthScreenLayout'
import { useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import axios from '../api/axios';
import Button from '../components/Button';
import {useSnackbar} from "notistack";
import {useNavigate} from 'react-router-dom';
import AppContext from '../hooks/Context';
type FormValues = {
    email: string;
    password: string;
  };

  const schema = yup.object({
    password:yup.string().required('please enter a valid password'),
    email:yup.string().email().required('Email is required').matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/, 'wrong email format'),
    first_name:yup.string().required('please enter a valid first name'),
    last_name:yup.string().required('please enter a valid last name'),
  })

export default function Registration() {
  const {state, dispatch} = useContext(AppContext);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit,watch, formState: { errors } } = useForm<FormValues>({ resolver:yupResolver(schema) });
  const {enqueueSnackbar} = useSnackbar();
  const onSubmit = handleSubmit((body) => {
    async function registerUser(){
      setLoading(true)
      try {
        const {data} = await axios.post('/me', {...body});
        dispatch({type:'USER_SUCCESS', payload:data});
        localStorage.setItem('register', JSON.stringify(data));
        setLoading(false);
      } catch (error:any) {
        const err = error.response ? error.response.data.message: error.message
        enqueueSnackbar(err,{variant:'error', autoHideDuration:3000})
        setErrorMessage(err);
        setLoading(false);
      }
   
    }
    registerUser()
  });
  // useEffect(()=>{
  //   const subscription = watch((data)=> {
  //       console.log(data['password']);
  //   })
  //   return ()=>{
  //       subscription.unsubscribe();
  //   }
  // }, [watch('password')])
  // redirect to dashboard when registration is successful
  useEffect(() => {
    if(localStorage.getItem('register')){
      navigate('/dashboard');
    }
  }, [navigate]);
  return (
    
    < AuthScreenLayout  heading="Create an Account" mainTitle='Already have an account?' additionTItle='Log in' path='/login'>
      <form onSubmit={onSubmit}>
        <div className="form_wrapper">
        <InputField 
        type='text' 
        placeholder='Type here' 
        label="First Name" 
        margin='0rem'
        register={register}
           name="first_name"
           rules={{
            required: 'Enter a valid First Name.'
          }}
          errors={errors}
        />
        <InputField type='text' 
        placeholder='Type here' 
        label="Last Name"
         margin='0rem'
         register={register}
           name="last_name"
           rules={{
            required: 'Enter a valid last Name.'
          }}
          errors={errors}
         />
        </div>
        <InputField type='email'
         placeholder='Type your email address here'
          label="Email Address" 
          margin='2rem'
          register={register}
          name="email"
          rules={{
           required: 'Enter a valid Email'
         }}
         errors={errors}
          />
        <InputField
         type={visible?'text':'password'} 
         placeholder='Type your password here' 
         label="Password" 
         margin='2rem' 
         icon={true} 
         visible={visible} 
         setVisible={setVisible}
         register={register}
         name="password"
         rules={{
          required: 'Enter a valid password.'
        }}
        errors={errors}/>
        <Button title='Sign Up' loading={loading}/>
      </form>
    </ AuthScreenLayout >
    
  )
}
