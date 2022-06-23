type RoundCardType = {
  roundid: number;
  date: Date;
  totalScore: number;
  courseName: string;
  description: string;
  user: string;
};

export default function RoundCard({
  roundid,
  date,
  totalScore,
  courseName,
  description,
  user,
}: RoundCardType): JSX.Element {
  return <div>
    <h3>{roundid}</h3>
    <h3>{date.toDateString()}</h3>
    <h3>{totalScore}</h3>
    <h3>{courseName}</h3>
    <h3>{description}</h3>
    <h3>{user}</h3>
  </div>;
}
