import React from 'react';

const UsersList = ({ listUsers, deleteUser, userSelected, modalDelete, setModalDelete }) => {



  return (
    <div className='container-list'>
      {listUsers.map(user => (
        <section key={user.id} className='user-card'>
          <h3> <span className="material-symbols-outlined">
            person
          </span> 
            {user.first_name} {user.last_name}</h3>
          <hr />
          <h4> <span className="material-symbols-outlined">
            mail
          </span> {user.email} </h4>
          <h4>
            <span className="material-symbols-outlined">
              celebration
            </span>
            {user.birthday}
          </h4>

          <button id='edit' onClick={() => userSelected(user)}>
            <span className="material-symbols-outlined">
              edit
            </span>
          </button>

          <button id='delete' onClick={() => setModalDelete(true)}>
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>

          {modalDelete &&
            (
              <div className='modal'>
            <div>
              <h5>Do you want delete this user?</h5>
              <button onClick={() => {deleteUser(user); console.log(user)}}>Confirm</button>
              <button onClick={() => setModalDelete(false)}>Cancel</button>
            </div>
            </div>)
          }

        </section>
      ))}
    </div>
  );
};

export default UsersList;