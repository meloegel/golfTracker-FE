import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import RoundCard from "./round/RoundCard";

export default function Dashboard() {
  const [request, data] = useFetch<any>();
  const [rounds, setRounds] = useState([] as any[]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
    };
    request("http://localhost:8080/rounds", {
      method: "GET",
      headers: headers,
    });
  }, [request]);

  useEffect(() => {
    if (data) {
      setRounds(data);
    }
  }, [data]);

  return (
    <div>
      <h1>Dashboard</h1>
      {rounds !== []
        ? rounds.map((round, key): any => (
            <RoundCard
              key={key}
              roundId={round.roundId}
              date={round.date}
              totalScore={round.totalScore}
              courseName={round.courseName}
              description={round.description}
              user={round.user}
            />
          ))
        : null}
    </div>
  );
}
