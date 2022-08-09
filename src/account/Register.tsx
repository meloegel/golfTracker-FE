import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Register(): JSX.Element {
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
      navigate("/");
    }
  });

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          value="username"
          onChange={() => {}}
          name="username"
          type="text"
        />
        <input
          value="password"
          onChange={() => {}}
          name="password"
          type="text"
        />
        <input value="email" onChange={() => {}} name="email" type="text" />
        <button onClick={() => onSubmit()}>Register</button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
