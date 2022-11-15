import React, { useEffect, useState } from 'react';

const UsersForm = ({ newUser, selected, editedUser }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");

  const [modalSubmit, setModalSubmit] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      "email": email,
      "password": password,
      "first_name": firstName,
      "last_name": lastName,
      "birthday": birthday
    };

    if (selected !== null) {
      editedUser(user)
      
    } else {
      newUser(user)
    };

    const emptyField = (email && password && firstName && lastName && birthday) === "";

    if (emptyField) {
      alert('Upload error: missing data fields')
    } else {
      setModalSubmit(true)
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setBirthday("")
    }
  };

  useEffect(() => {

    if (selected !== null) {
      setEmail(selected.email);
      setPassword(selected.password);
      setFirstName(selected.first_name);
      setLastName(selected.last_name);
      setBirthday(selected.birthday)
    }
  }, [selected]);

  const [visibility, setVisibility] = useState(false);


  return (
    <>

      <form action="" className='form-user' onSubmit={submit}>
        <h1>New User</h1>
        <div className='inputs inputs-name'>
          <label htmlFor="first_name">
            <span className="material-symbols-outlined">
              person
            </span>
          </label>
          <input type="text" name="first_name"
            id="first_name"
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input type="text" name="last_name"
            id="last_name"
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className='inputs'>
          <label htmlFor="email">
            <span className="material-symbols-outlined">
              mail
            </span>
          </label>
          <input type="email" name="email"
            id="email"
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='field-date inputs inputs-password'>
          <label htmlFor="password">
            <span className="material-symbols-outlined">
              lock
            </span>
          </label>
          <input type={visibility ? "text" : "password"} name="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='button'
            className='icon button-visibility'
            onClick={() => setVisibility(!visibility)}>
            <span className="material-symbols-outlined">
              {visibility ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        </div>

        <div className='field-date inputs'>
          <label htmlFor="birthday">
            <span className="material-symbols-outlined">
              celebration
            </span>
          </label>
          <input type="date" name="birthday"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <label htmlFor="birthday" >
            <span className="material-symbols-outlined icon">
              calendar_month
            </span>
          </label>
        </div>

        <div className='submit_icon'>
          <button type='submit' id='submit'>Upload
            <span className="material-symbols-outlined">
              cloud_upload
            </span>
          </button>
        </div>
      </form>


      {modalSubmit && (
        <div className="container-modal" >
          <div className='modal-submit' >
            <h3>The user has been loaded successfully.</h3>
            <span className="material-symbols-outlined">
              check
            </span>
            <button onClick={() => setModalSubmit(false)}>OK</button>
          </div>
        </div>
      )}

    </>
  );
};

export default UsersForm;