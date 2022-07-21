import { userAgent } from "next/server"

export default async function signup(req, res) {
  console.log("el body:", req.body)
  const {user, psswd, email, termsConditions} = req.body
  if ( user && psswd && email && termsConditions ) {
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