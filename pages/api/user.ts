export interface User {
  username : string;
  password : string;
  email? : string;
  termsConditions? : boolean;
}

export default async function signup(req, res) {

  const {username, password, email, termsConditions} : User = req.body
  
  if ( username && password && email && termsConditions ) {
    res.status(200).send({ done: true })
  } else {
    res.status(500).end("Error en los campos")
  }
  /*try {
    await createUser(req.body)
    res.status(200).send({ done: true })
  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }*/
}