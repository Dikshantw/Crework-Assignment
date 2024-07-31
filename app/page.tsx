import SignUp from "@/components/SignUp";
import axios from "axios";

axios.post("/api/users/signup");
export default function Home() {
  return <SignUp />;
}
