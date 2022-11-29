import {Container} from './styled/Button.styled';
import Progress from './Progress'
type ButtonProps = {
    title:string,
    loading?:boolean
}
export default function Button({title, loading}:ButtonProps) {
  return (
    <Container>
    {
    loading ? <Progress/>: <span>{title}</span> 
    }
  </Container>
  )
}
