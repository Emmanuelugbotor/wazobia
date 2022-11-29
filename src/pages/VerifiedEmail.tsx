import {Wrapper, Container} from '../components/styled/VerifiedEmail.styled'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import {Link} from 'react-router-dom'
export default function VerifiedEmail() {
  return (
    <Container>
    <Wrapper>
    <CheckCircleOutlineOutlinedIcon/>
    <h2>Your email address has been verified.</h2>
    <div className="back_dashboard">
        <Link to='/dashboard'> Go to Dashboard</Link>
    <KeyboardArrowRightOutlinedIcon />
    </div>
    </Wrapper>
    </Container>
  )
}
