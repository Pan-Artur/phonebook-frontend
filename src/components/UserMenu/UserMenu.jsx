const UserMenu = ({ userEmail, onLogout }) => {
  return (
    <div>
      <div>
        <span>{userEmail || "User"}</span>
      </div>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
