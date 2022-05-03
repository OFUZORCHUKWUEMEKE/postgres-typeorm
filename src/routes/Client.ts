import express, { Request, Response } from "express";
import { Client } from '../Entitites/Client';


const router = express.Router()

router.post('/api/client',async(req:Request,res:Response)=>{
  const {firstname,lastName,email,cardNumber,balance} = req.body
  try {
    // const client = Client.create({
    //     firstname,
    //     lastName,
    //     email,
    //     cardNumber,
    //     balance
    // })
    const allClient = await Client.findBy({email:'uniben2018@gmil.com'}) 
    // await client.save() 
    return res.json(allClient)
  } catch (error) {
      console.log(error)
      res.json(error)
  }



})

export {router as ClientRouter}
