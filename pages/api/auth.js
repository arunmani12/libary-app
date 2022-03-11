// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../db/connectDb"
// import Book from '../../models/Book'
import User from '../../models/User'

import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = 'arunmani';

export default async function handler(req, res) {
  dbConnect()
  const { method } = req
  if(method === "POST"){
    let {Regno,DOB} = req.body
    const user = await User.findOne({ Regno,DOB})
    if(user){
      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
          Regno,
        },
        secret
      );

      
    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
       res.setHeader("Set-Cookie", serialised);
       res.status(200).json({ message: "Success!" });
    }
    if(!user){
        res.status(200).json({"data":"no user to be found"})
    }
  }
//   let dats = await Book.find({})
	// let dats = await User.find({})
}