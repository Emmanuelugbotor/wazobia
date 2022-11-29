import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
min-height:100vh;
background: #E5E5E5;


`
export const Wrapper = styled.div`
max-width: 72rem;
width:100%;
background: #FFFFFF;
border: 1px solid #F0F0F0;
display:flex;
flex-direction: column;
align-items: center;
padding-bottom:17.3rem;
&{
    & > *:first-child{
        color:#07982F;
        font-size:6rem;
        margin-top:11.2rem;
    }
    & h2{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.4rem;
        color: #000000;
        margin-top:3.6rem;
    }
    & .back_dashboard{
        display:flex;
        align-items:center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2rem;
        color: #004CBD;
        gap:.986rem;
        margin-top:2.1rem;
        & a{
            color:inherit
        }

        
    }
}
`