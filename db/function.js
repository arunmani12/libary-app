import data from "../data/data.json";
import itData from "../data/itData.json"
import mongoose from 'mongoose'
// let Book = mongoose.model('Book')
import Book from '../models/Book'
import User from '../models/User'
import Admin from '../models/Admin'

export const addBooks = async () => {
  for (let d of data) {
    let bk = new Book({
      Title: d["Title of the book"],
      Authors: d.Authors,
      Publishers:`${d.Publishers ? d.Publishers : 'none' }`,
      currentHolder:"libary"
    });
    await bk.save()
  }
};

export const addUsers = async() =>{
  // await User.deleteMany({})
   for (let d of itData){
     let itUser = new User({
      Regno:d.Regno,
      Name:d.Name,
      DOB:d.DOB,
      Department:d.Department,
     });
     await itUser.save()
   } 
}

export const addAdmin = async() =>{
  let admin = new Admin({
    ID:123,
    PWD:'123',
    Name:'Arunmani'
  })

  await admin.save()
}