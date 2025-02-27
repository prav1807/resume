import './App.css'

function HomePage() {
  return (
    <>
      <div>
        <a>
          <img src="src/assets/profilePicture.png" className="profile-picture" alt="Profile Picture" />
        </a>
      </div>
      <h1>Hello, Pravesh here ... <br/>Welcome to my personal portfolio</h1>
      <div className="card">
        <h2>
          My website is currently under construction. I apologise for any inconvenience
        </h2>
        <p>
          However, you can still find my details and experience in my resume. Hope to hear from you soon.
        </p>
        <button>
          Download Resume
        </button>
      </div>
      <p>
        Thank you for you comprehension... See you soon ...
      </p>
    </>
  )
}

export default HomePage;
