const ListUserDisplay = ({ user, onUpdateUser, onRemoveUser }) => {
    return (
      <div>
        <h1>Current User queue</h1>
  
        {user.length === 0 ? (
          <p>No user name available</p>
        ) : (
          user.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
  
              <button
                onClick={() => {
                  const newName = prompt("Enter new name")
                  if (newName) onUpdateUser(user.id, newName)
                }}
              >
                Update
              </button>
  
              <button onClick={() => onRemoveUser(user.id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    )
  }


export default ListUserDisplay;