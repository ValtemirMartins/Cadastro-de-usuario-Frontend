import { useEffect, useState } from "react";
import api from "../../services/api";
import  Button  from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { Container, Title, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from "./style";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function ListUsers() {
const [users, setUsers] = useState([])
const navigate = useNavigate()


  useEffect(() => {
    async function getUsers() {
      const {data} = await api.get('/usuarios')
      setUsers(data)
    }
    getUsers()
  
  }, [])
  
// Toda vez que a tela for renderizada, o useEffect vai ser executado
// Toda vez que uma determinada variável mudar, o useEffect vai ser executado
  
async function deleteUser(id) {
  await api.delete(`/usuarios/${id}`)
  const newUsers = users.filter((user) => user.id !== id)
  setUsers(newUsers)
}
  return (
  <Container>
    <TopBackground />
    <Title>Lista de Usuários</Title>

    <ContainerUsers>

      {users.map((user) => (

        <CardUsers key={user.id}>
          <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
        <div >
          <h3>{user.name}</h3>
          <p>{user.age}</p>
          <p>{user.email}</p>
        </div>
        <TrashIcon src={Trash} alt="Lixeira" onClick={() => deleteUser(user.id)}/>
        </CardUsers>
      ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate('/')}> Voltar </Button>
  </Container>
  )

}
export default ListUsers;