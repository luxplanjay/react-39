import { useState } from 'react';
import { Form } from './Form';

export const App = () => {
  const [user, setUser] = useState('guest');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = newUsername => {
    setUser(newUsername);
    setIsEditing(false);
  };

  return (
    <div>
      <h2>Create new user</h2>
      <Form onSubmit={setUser} />
      <div>
        {isEditing ? (
          <>
            <h2>Edit this user</h2>
            <Form onSubmit={handleEdit} initialValue={user} />
          </>
        ) : (
          <>
            <p>Username: {user}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};
