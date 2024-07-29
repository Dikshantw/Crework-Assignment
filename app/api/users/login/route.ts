import { connectToMongo } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connectToMongo();

export async function POST(request: NextRequest) {
  try {
    //take data from body
    const reqBody = await request.json();
    const { email, password } = reqBody;
    //check if the email exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        error: "User not found",
      });
    }
    //check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" });
    }
    //JWT
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "Log in successfull",
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
