import styled from "styled-components";
type InputProps = {
    mg:string
}

export const Container = styled.div<InputProps >`
   &{
    display:flex;
    flex-direction: column;
    margin-bottom:${(props)=> props.mg};
    width:100%;
    & .input{
        width:100%;
        height: 4rem;
        position:relative;
       
        & input{
            padding: 10px 12px;
            height: 100%;
            width:100%;
            background: #FFFFFF;
            border: 1px solid #E1E1E1;
            border-radius: .4rem;   
        }
        & .icon_wrapper{
            position: absolute;
            top:50%;
            transform:translateY(-50%);
            right:2rem;
            z-index:10000;
        }
    }

    & label{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.7rem;
        color: #1A1A1A;
        font-style: normal;
        margin-bottom:.4rem;
        }
}
`