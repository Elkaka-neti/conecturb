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
    
    //res.token
    //res.refreshToken
    console.log(response)
    //Alguma funcao de salvar em cookies os tokens
  }catch(err) {
    console.error(err)
  }
}