import { connectToMongo } from "@/dbConfig/dbConfig";
import { User } from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connectToMongo();

//create new user in db
export async function POST(request: NextRequest) {
  try {
    //taking data from body
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    const existingemail = await User.findOne({ email });
    //if user already exists

    if (existingemail) {
      return NextResponse.json({
        error: "Email already exists",
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
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    console.log(reqBody);
    console.log("saved in db"); // delete later
    const response = NextResponse.json({
      message: "Sign up successfull",
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
