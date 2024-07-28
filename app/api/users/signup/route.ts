import { connectToMongo } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
connectToMongo();

//create new user in db
export async function POST(request: NextRequest) {
  try {
    //taking data from body
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    const user = await User.findOne({ email });
    //if user already exists
    if (user) {
      return NextResponse.json({
        error: "User already exists",
      });
    }

    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    //saving user in db
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "user added",
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
