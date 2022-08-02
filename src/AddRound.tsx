import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function AddRound() {
  const navigate = useNavigate();
  const [request, data] = useFetch<any>();

  const onSubmit = () => {
    const headers = {
      "Content-Type": "application/json"
    }
    request(``, {
      method: "POST",
      headers: headers,
    })
  }

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  });

  return (
    <div>
      <h1>Add Round</h1>
      <form>
        <input value="date" onChange={() => {}} name="" type="text" />
        <input value="totalScore" onChange={() => {}} name="" type="text" />
        <input value="courseName" onChange={() => {}} name="" type="text" />
        <input value="description" onChange={() => {}} name="" type="text" />
      </form>
    </div>
  );
}
