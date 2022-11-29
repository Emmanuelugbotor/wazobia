import {Container} from './styled/Input.styled'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import get from 'lodash.get';
import { ErrorMessage } from '@hookform/error-message';
import { UseFormRegister, Path,  RegisterOptions, DeepMap, FieldError, FieldValues } from 'react-hook-form';
import { FormErrorMessage } from './FormErrorMessage';
type InputProps<TFormValues extends FieldValues> = {
    type: string,
    placeholder:string,
    label:string,
    margin:string,
    icon?:boolean,
    visible?:boolean,
    name:string,
     rules?: RegisterOptions,
    errors?: Partial<DeepMap<TFormValues, FieldError>>,
    register?: UseFormRegister<TFormValues>,
    // register?:string,
    setVisible?:(visible:boolean)=> void
}

export default function InputField({type,placeholder, label, margin,rules,name, icon,errors, visible, setVisible, register}:InputProps<any> ) {
  
    const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);
    return (
    <Container mg={margin}>
    <label htmlFor={label}>{label}</label>
    <div className="input">
    <input type={type} placeholder={placeholder} {...(register && register(name, rules))}/>
    {
        icon &&  
        <div className='icon_wrapper' onClick={()=>setVisible?.(!visible)}>
            {
                visible ?  < VisibilityOutlinedIcon/> : <VisibilityOffOutlinedIcon/>
            }
        </div>
    }
    </div>
    <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => (
          <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
        )}
      />
  </Container>
  )
}
