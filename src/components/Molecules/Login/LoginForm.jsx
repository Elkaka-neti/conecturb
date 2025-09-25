import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Atoms/Global/Input';
import LoginOpt from '../../Molecules/Login/LoginOpt.jsx';

const LoginForm = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    console.log('Email:', email);
    console.log('Password:', password);

    var formData = { email: email, password: password };

    localStorage.setItem('login', JSON.stringify(formData));
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