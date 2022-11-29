import styled from "styled-components";


export const Login = styled.div`
display:flex;
justify-content:center;
background: #E5E5E5;
width:100%;
min-height:100vh;
`
export const Container = styled.div`

&{
margin-top:10rem;
align-self:flex-start;
display: flex;
flex-direction: column;
align-items: center;
padding: 24px 32px 40px;
max-width: 72rem;
width:100%;
background: #FFFFFF;
border: 1px solid #F0F0F0;
border-radius: 8px;
& h2{
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 2.4rem;
line-height: 2.9rem;
color: #000000;
margin-bottom:.4rem;
}
& p{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 1.6rem;
line-height: 2rem;
color: #777777;
}
& form{
align-self:flex-start;
width:100%;
margin-top:3.1rem;
    & > .form_wrapper{
        display:flex;
        gap:1.6rem;
        margin-bottom:2.1rem;
        & .field{
            flex:1;
            display:flex;
            flex-direction: column;
            & input{
                padding: 10px 12px;
                height: 4rem;
                background: #FFFFFF;
                border: 1px solid #E1E1E1;
                border-radius: 4px;
            }

        }
    }
    & > .field{
        flex:1;
        display:flex;
        flex-direction: column;
        & input{
        padding: 10px 12px;
        height: 4rem;
        background: #FFFFFF;
        border: 1px solid #E1E1E1;
        border-radius: .4rem;
        margin-bottom:2.1rem;
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
}
`