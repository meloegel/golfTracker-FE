import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [request, data] = useFetch<any>();

  const onSubmit = () => {
    const headers = {
      "Content-Type": "application/json",
    };
    request(``, {
      method: "POST",
      headers: headers,
    });
  };

  useEffect(() => {
    if (data) {
      navigate("/dashboard");
    }
  });

  return (
    <div>
      <h1>Login Page</h1>
      <form>
      <input value="username" onChange={() => {}} name="username" type="text" />
      <input value="password" onChange={() => {}} name="password" type="text" />
      <button onClick={() => onSubmit()}>Login</button>
      </form>
    </div>
  );
}
