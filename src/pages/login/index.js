import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';

// undefined

export default function PagesLogin() {
  const history = useHistory();
  const [value, setValue] = useState(
    () => {
      return window.localStorage.getItem('github_username') || ''
    }
  );

  function onSubmit(e) {
    e.preventDefault();

    window.localStorage.setItem('github_username', value);
    history.push("/dashboard");
  }

  return (
    <div className="PagesLogin">
      <form className="PagesLogin__form" onSubmit={onSubmit}>
      <div className="PagesLogin__form-control">
          <label htmlFor="username">Github Username</label>
          <input className="PagesLogin__form-input"
           id="username"
            name="username"
            type="text"
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            type="text"
          />
        </div>
        <button  className="PagesLogin__submit-button" type="submit">Acessar</button>
      </form>
    </div>
  );
}