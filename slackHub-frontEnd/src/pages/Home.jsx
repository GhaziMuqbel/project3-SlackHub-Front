import { useNavigate } from "react-router-dom"

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <img src={Welcome} alt="welcome" />

      <section className="welcome-signin">
        <button onClick={() => navigate("/signin")}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )
}

export default Home
