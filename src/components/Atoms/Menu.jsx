import React from 'react';
import {useState} from 'react';


/*
* @description O contexto que fará o componente saber entre si o estado, (aberto, fechado), e definir o mesmo.
*/

const DropdownContext = React.createContext(null);


/*
* @description Hook personalizado que evita o reuzo de React.useContext diversas vezes.
*/
const useDropdown = () => {
  const context = React.useContext(DropdownContext);
  if(!context) console.log('Erro! Nao esta dentro de um dropdown');
  return context;
}

/*
* @description Define o elemento que ativa ou desativa o dropdown, React.cloneElement cria um clone de qualquer elemento que seja inserido dentro do Trigger e adiciona a função para alterar o estado do dropdown (aberto, fechado)
*/
const DropdownTrigger = ({children}) => {
  const {toggle} = useDropdown();
  return React.cloneElement(children, {
    onClick: () => toggle()
  })
}

const DropdownContent = ({children, className, style}) => {
  const {isOpen} = useDropdown();
  return (
    <>
      {
        isOpen && (
        <div
        className={className}
        style= {{
          position: 'absolute',
          top: "0",
          margin: "0",
          ...style
        }}
        >
          {children}
        </div>
        )
      }
    </>
    )
}


const DropdownItem = ({onPress, children, disabled, className}) => {
  const {isOpen} = useDropdown();
  return (
    <div onClick={() => onPress()} className={className}>
      {children}
    </div>
    )
}

/*
* @description Fazemos uma atribuição para termos no final apenas um elemento Dropdown com sub-elementos. Usamos o operador & para atribuir as props já criadas de DropdownRootsProps à os sub-elementos (Trigger, Content, Item)
*/


const Dropdown = ({children}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  
  const toggle = () => setOpen(preState => !preState);
  
  return (
    <DropdownContext.Provider value={{isOpen, setOpen, toggle}}>
    <div style={{position: 'relative'}}>
      {children}
    </div>
    </DropdownContext.Provider>
    );
}

/*
* @description Atribuimos o objeto Dropdown com seus subObjetos, criando uma forma de usar os elementos juntos.
*
*
* @usage
* <Dropdown>
* <Dropdown.Trigger><button>Clique</button></Dropdown.Trigger>
* <Dropdown.Content>
* <Dropdown.Item>Item1</Dropdown.Item>
* <Dropdown.Item>Item2</Dropdown.Item>
* </Dropdown.Content>
* </Dropdown>
*/

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;


export default Dropdown;
