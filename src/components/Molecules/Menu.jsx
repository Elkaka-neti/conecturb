import * as React from 'react';
import Dropdown from "@c/Atoms/Menu";

const Menu = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button className="h-full flex align-center text-center justify-end text-3xl w-10 h-full">
         <i className="bi bi-list self-center"></i>
        </button>
      </Dropdown.Trigger>

      <Dropdown.Content className="bg-black text-white rounded-tr-lg rounded-br-lg flex flex-col gap-10">
        <Dropdown.Item onPress={() => alert('Abrindo perfil...')}>
          Ver Perfil
        </Dropdown.Item>
          Configurações
        <Dropdown.Item onPress={() => alert('Configurações...')}>
        </Dropdown.Item>
        <Dropdown.Item onPress={() => alert('Saindo...')}>
          Sair
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
    )
}

export default Menu;