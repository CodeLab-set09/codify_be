import { connect } from "mongoose";
// export const url: string = "mongodb://127.0.0.1:27017/startUpDB";
export const url: string =
  "mongodb+srv://ghettodeveloper:ghettodeveloper@ghettodev.rj9cymn.mongodb.net/codeifyDB?retryWrites=true&w=majority&appName=GhettoDev";

export const dbConfig = async () => {
  try {
    await connect(url).then(() => {
      console.clear();
      console.log("Connected... ❤️❤️🚀🚀🎮🎮");
    });
  } catch (error) {
    console.log("Error connecting to database: ", error);
    process.exit(1);
  }
};
