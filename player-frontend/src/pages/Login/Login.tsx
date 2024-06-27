import { useState } from "react";
import { Input } from "../../components";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex justify-center items-center h-svh">
      <div className="bg-slate-100 border border-slate-700 rounded-md p-6 h-fit flex flex-col gap-2">
        <Input
          type="email"
          label="Email"
          value={email}
          name="email"
          placeholder="email"
          error
          onChange={(event) => {
            setEmail(event.target.value);
            console.log(email);
          }}
        />
        <Input
          type="password"
          label="Password"
          value={password}
          name="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
            console.log(password);
          }}
        />
      </div>
    </div>
  );
};

export default Login;
