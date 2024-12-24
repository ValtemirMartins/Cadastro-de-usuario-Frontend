import { useRef } from 'react';
import { Container, Form, Title, ContainerInputs, Input, InputLabel } from './styles';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import  Button  from '../../components/Button';
import TopBackground from '../../components/TopBackground';

function Home() {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const emailInputRef = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
   await api.post('/usuarios', {
      name: nameInputRef.current.value,
      age: parseInt(ageInputRef.current.value),
      email: emailInputRef.current.value,
    })

    navigate('/lista-de-usuarios')

  }

  return (
    <Container>
      <TopBackground />

      
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuario" ref={nameInputRef} />
            </div>

            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuario" ref={ageInputRef} />
            </div>
        </ContainerInputs>


        <div style={{width: '100%'}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do Usuario" ref={emailInputRef} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary" >
          Cadastrar Usuário</Button>
      </Form>
      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuarios </Button>
    </Container>
  )
}export default Home
