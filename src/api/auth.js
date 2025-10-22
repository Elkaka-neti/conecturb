import 'axios';

export async function registerUser(event) {
  console.log(event);
  
  try {
    const response = await axios.post("", {
      name,
      email,
      password,
      telefone
    });
    
    //res.token
    //res.refreshToken
    
    //Alguma funcao de salvar em cookies os tokens
  }catch(err) {
    
  }
}