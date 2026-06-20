export default function Login() {
  return (
    <div className="page">
      <h1>AB 900 – Login</h1>
      <p>Demo login (geen echte verificatie)</p>
      <button onClick={() => (window.location.href = "/dashboard")}>
        Inloggen
      </button>
    </div>
  );
}
