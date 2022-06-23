import { useState } from "react";
import RoundCard from "./RoundCard";

export default function Dashboard() {
  const [rounds, setRounds] = useState([] as any[]);

  return (
    <div>
      <h1>Dashboard</h1>
      {rounds !== []
        ? rounds.map((round, key): any => (
            <RoundCard
              key={key}
              roundid={round.roundid}
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
