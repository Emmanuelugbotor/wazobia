import styled from "styled-components";

export const DialogContainer = styled.div`
&{
    .css-1t1j96h-MuiPaper-root-MuiDialog-paper{
        max-width:50rem!important;
        width:100%!important;;
    }
}

`

export const DialogTitle = styled.h2`
font-family: 'Avenir';
font-style: normal;
font-weight: 400;
font-size: 1.4rem;
line-height: 1.9rem;
color: #000000;
padding:1.6rem 0 1.5rem 2.4rem;
border-bottom:1px solid #EFEFF0;
`
export const DialogForm = styled.form`

& {
    margin-top:1.6rem;
    padding:0 2.4rem 3.2rem 2.4rem; 
    & .field{
        display:flex;
        flex-direction: column;
        margin-bottom:1.6rem;
        & input{
            flex:1;
            font-family: 'Avenir';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 1.9rem;
            color: #ACADAF;
            min-height:4rem; 
            padding:1rem;
        }
        & textarea{
            padding:1rem;
        }
    }
}
`
export const Label = styled.label`
font-family: 'Avenir';
font-style: normal;
font-weight: 400;
font-size: 1.4rem;
line-height: 1.9rem;
color: #5F6166;
margin-bottom:1rem;
`
export const DialogActions = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
gap:3.2rem;
margin-top:2rem;
`
export const Button  = styled.button`
display:inline-block;
background: #EFEFF0;
border-radius: 4px;
padding:.9rem 2.1rem;
font-style: normal;
font-weight: 500;
font-size: 1.6rem;
line-height: 2.2rem;
border:none;
color: #20262F;
cursor: pointer;
&{
    &:last-of-type{
        background: #999A9B;
        color: #FFFFFF;
    }
}

`