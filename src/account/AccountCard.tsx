export type AccountType = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

export default function AccountCard({
  username,
  email,
  firstName,
  lastName,
}: AccountType): JSX.Element {
  return (
    <div>
      <h2>Account</h2>
      <h3>Username: {username}</h3>
      <h3>Email: {email}</h3>
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
    </div>
  );
}
