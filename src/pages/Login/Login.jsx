import LoginForm from "../../components/LoginForm/LoginForm";

const users = [
    {
      id: 12,
      photo: '/src/assets/users/karl.jpg',
      firstName: 'Karl',
    },
    {
      id: 18,
      photo: '/src/assets/users/cecilia.png',
      firstName: 'Cecilia',
    },
  ];

const Login = () => {
  return (
    <div>
      <div className="login-page">
      <h1>Choisissez un utilisateur</h1>
      <LoginForm users={users} /> 
    </div>
    </div>
  )
}

export default Login
