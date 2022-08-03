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
    <h3>Round id: {roundid}</h3>
    <h3>Date: {date.toDateString()}</h3>
    <h3>Total Score: {totalScore}</h3>
    <h3>Course Name: {courseName}</h3>
    <h3>Description{description}</h3>
    <h3>User: {user}</h3>
  </div>;
}
