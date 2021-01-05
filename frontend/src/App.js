import { useState } from 'react';
import axios from 'axios';
import './App.css';
import MessageBox from './MessageBox';

function App() {
  const [username, setusername] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  async function submitHandler(event) {
    event.preventDefault();
    try {
      const { data } = await axios.post("/login", { username, password })
      setMessage(data)
      console.log("data recived form bakend in frontend", data)
    } catch (err) {
      console.log(err);
      setError(err.message);

    }

  }

  return (
    <div>
      {
        loading ? "Loading..." :
          error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (

              <form className="form" onSubmit={submitHandler}>
                <div>
                  <h1>Sign In</h1>
                  <h3>

                    {message ? `user is : ${message.message}  , ` : null}
                    {message ? `  Company Id ${message.companyId}  ` : null}
                  </h3>
                </div>
                <div>
                  <label htmlFor="email">UserName</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="username"
                    value={username}
                    required
                    onChange={(e) => setusername(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label />
                  <button className="primary" type="submit">
                    Sign In
        </button>
                </div>
                <div>
                  <label />

                </div>
              </form>

            )
      }
    </div>
  );
}

export default App;
