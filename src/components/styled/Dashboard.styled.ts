import styled from "styled-components";

export const Container = styled.div`
    &{
        background: #E5E5E5;
        min-height:100vh;
        position:relative;

        & .email_notification{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 1.7rem;
            color: #131415;
            background: #FFF0CB;
            min-height:4.4rem;
            width:100%;
            text-align:center;
            display:flex;
            justify-content: center;
            align-items: center;
            margin-bottom:2.5rem;
            & a{
                margin:0 .5rem;
            }

        }
        & .dashboard_top{
            min-height: 7.2rem;
            background: #FFFFFF;
            border: 1px solid #F0F0F0;
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:0 3.3rem 0 5.8rem;
            & h3{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 1.6rem;
                line-height: 2rem;
                color: #000000;
            }
            
            & .toggle{
                display:flex;
                align-items: center;
                gap:1.3rem;
                & > div{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.6rem;
                    line-height: 2rem;
                    color: #131415;
                }
            }
        }

        & .dashboard_content{
            padding:0 5.8rem;
            margin-top:3.2rem;
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(42rem, 1fr));
            gap:3.2rem;
            & li{
                width:100%;
                padding:2rem;
                background: #FFFFFF;
                border: 1px solid #F0F0F0;
                border-radius: 8px;
                display:flex;
                flex-direction: column;
                align-items:flex-start;
                & .name{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.2rem;
                    line-height: 1.5rem;
                    color: #555658;
                    margin-bottom:.4rem;
                }
                & .item{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.6rem;
                    line-height: 2rem;
                    color: #000000;
                    margin-bottom:1.6rem;
                }
                & .desc{
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.2rem;
                    line-height: 1.5rem;
                    color: #555658;
                    margin-bottom:.4rem;
                }
                & .main_card{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 1.4rem;
                line-height: 1.7rem;
                color: #131415;
                margin-bottom:2.4rem;
                }
                & .delete_edit{
                    align-self:flex-end;
                    & button{
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 1.4rem;
                        line-height: 1.7rem;
                        text-align: center;
                        padding:1rem;
                        min-height:3.6rem;
                        border:none;
                        display: inline-block;
                        &:last-of-type{
                            background: #555658;
                            border-radius: 4px;
                            color: #FFFFFF;
                            margin-left:2rem;
                        }
                    }
                }
            }
        }
        & .add{
            position:absolute;
            width:4.2rem;
            height:4.2rem;
            border-radius:50%;
            right: 6.1rem;
            bottom: 4.3rem;
            background: #004CBD;
            display:flex;
            justify-content:center;
            align-items:center;
            cursor:pointer;
            & *{
                color:#fff;
                font-size:3rem;
            }
        }

    }
`