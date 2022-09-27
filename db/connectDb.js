import mongoose from 'mongoose'

let DB_URL="db url"

async function dbConnect() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // await mongoose.connect('mongodb://localhost:27017/libaryappnew', { useNewUrlParser: true,useUnifiedTopology: true, });
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect
