import { StyledUserMenu } from "./StyledUserMenu";

const UserMenu = ({ userEmail, onLogout }) => {
  return (
    <StyledUserMenu>
      <span>{userEmail || "User"}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </StyledUserMenu>
  );
};

export default UserMenu;