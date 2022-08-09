export default function Register(): JSX.Element {
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
      </form>
    </div>
  );
}
