export type RoundType = {
  roundId: number;
  date: Date;
  totalScore: number;
  courseName: string;
  description: string;
  user: string;
};

export default function RoundCard({
  roundId,
  date,
  totalScore,
  courseName,
  description,
  user,
}: RoundType): JSX.Element {
  return (
    <div>
      <h3>Round id: {roundId}</h3>
      <h3>Date: {date.toDateString()}</h3>
      <h3>Total Score: {totalScore}</h3>
      <h3>Course Name: {courseName}</h3>
      <h3>Description{description}</h3>
      <h3>User: {user}</h3>
    </div>
  );
}
