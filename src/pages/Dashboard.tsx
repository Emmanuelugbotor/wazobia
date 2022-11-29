import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Container} from '../components/styled/Dashboard.styled'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from 'react';
import CreateItemModal from '../components/CreateItemModal';
import {useContext} from 'react';
import AppContext from '../hooks/Context';
export default function Dashboard() {
    // const [open, setOpen] = useState(false);
    const { open, setOpen } = useContext(AppContext);
  return (
    
    <Container>
        {
            open && <CreateItemModal  />
        }
        <div className="email_notification">
        You have not verified your email address. Click <Link to="">here</Link>  to resend verification link.
        </div>
        <div className="dashboard_top">
            <h3>Dashboard</h3>
            <div className="toggle">
                <div>John Jones</div>
                <KeyboardArrowDownIcon/>
            </div>

        </div>
        <ul className="dashboard_content">
            {
                Array.from({ length: 5 }, (v, i) => i).map((item:any,index:number)=>{
                    return <li key={index} className='card'>
                        <div className="name">Name</div>
                        <div className="item">Item 1</div>
                        <div className="desc">Description</div>
                        <div className="main_card">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                        <div className="delete_edit">
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </li>
                })
            }
        </ul>
        <div className="add" onClick={()=>setOpen?.(!open)}>
            <AddOutlinedIcon/>
        </div>
    </Container>
  )
}
