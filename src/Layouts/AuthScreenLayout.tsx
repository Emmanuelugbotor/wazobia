import {Login, Container} from '../components/styled/Login.styled'
import {Link} from 'react-router-dom'
type  AuthScreenLayoutProps = {
    children:React.ReactNode,
    heading:string,
    mainTitle:string,
    additionTItle:string,
    path:string,
}
export default function AuthScreenLayout({children, heading, mainTitle,additionTItle,path}:AuthScreenLayoutProps ) {
  return (
    
    <Login>
      <Container>
      <h2 className="title">{heading}</h2>
      <p>{mainTitle} <Link to={path}>{additionTItle}</Link>
      </p>
      {
        children
      }
      </Container>
    </Login>
    
  )
}
