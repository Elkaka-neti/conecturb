import axios from 'axios';

export async function registerUser(event) {
  console.log(event);
    event.preventDefault();
      const name = (event.target[0].value.toLowerCase().trim() + " " + event.target[1].value.toLowerCase().trim())
        const email = event.target[2].value;
          const password = event.target[3].value;
            //4 --> confirm pass
              const telefone = event.target[5].value;

                console.log({data: {name, email,  password, telefone}})
                  try {
                      const response = await axios.post("https://automatic-space-robot-7qj4v7xgrfww5q-3000.app.github.dev/users", {data: {
                            name,
                                  email,
                                        password,
                                              telefone
                                                }});
                                                    
                                                      //Salvar informações basicas e logged:true no localStorage
                                                        localStorage.setItem('user', JSON.stringify({name, email, telefone}));
                                                          localStorage.setItem('logged', true);

                                                              //res.token
                                                                  //res.refreshToken
                                                                      console.log(response)
                                                                          //Alguma funcao de salvar em cookies os tokens
                                                                            }catch(err) {
                                                                                console.error(err)
                                                                                  }
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}

export async function checkUserRegistration() {
  try {
    // Verifica se existem tokens salvos nos cookies
    const token = getCookie('token');
    const refreshToken = getCookie('refreshToken');
    
    if (!token || !refreshToken) {
      console.log('Usuário não está cadastrado/logado');
      return false;
    }


    
    console.log('Usuário está autenticado:', token);
    return true;
  } catch (err) {
    console.error('Erro ao verificar autenticação:', err);
    // Limpar tokens inválidos (se necessário)
    return false;
  }
}