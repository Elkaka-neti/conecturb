import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Atoms/Global/Input';
import LoginOpt from '../../Molecules/Login/LoginOpt.jsx';
import { loginUser } from '../../../api/auth.js';
import {useUser} from '../../hooks/useUser.jsx';
const LoginForm = () => {
  const navigate = useNavigate();
  const { login, user } = useUser();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    const response = await loginUser(email, password);
    console.log(response)
    login({name: response.data.name, email: response.data.email, telefone: response.data.telefone});
    navigate('/'); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="email" id="email" placeholder="seu@email.com" icon="person" />
      <br />
      <Input name="senha" id="pass" placeholder="••••••••" icon="pass" />
      <br />
      <LoginOpt />
      <br />
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
        >
          Conectar
        </button>
      </div>
    </form>
  );
}

export default LoginForm;