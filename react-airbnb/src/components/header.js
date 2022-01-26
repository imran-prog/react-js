import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Components
import Popup from "./Popup";
import Login from "./Login";
import Signup from "./Signup";
// Firebase
import { auth, db, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";

const Header = (props) => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [user, loader, error] = useAuthState(auth);
  const [profileDrop, setProfileDrop] = useState(false);
  const [popup, setPopup] = useState(false);
  const [caller, setCaller] = useState({});

  const showProfile = () => setProfileDrop(!profileDrop);
  const showPop = () => setPopup(!popup);

  const fetchUserNameAndPhoto = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setPhoto(data.photoURL);
    } catch (e) {
      console.error(e);
      alert("Eror while fetching user data");
    }
  };

  useEffect(() => {
    if (loader) return;
    if (!user) return;
    fetchUserNameAndPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loader, user]);

  const toggleLogIn = (e) => {
    setCaller(e.target.id);
    showProfile();
    showPop();
  };

  const toggleSignup = () => {
    setCaller("signup");
  };
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Link to="/">
            <img src="/images/airbnb.png" alt="airbnb" />
          </Link>
        </Logo>
        <UserList onClick={showProfile}>
          <Host>Become a Host</Host>
          <LangRegion>
            <span className="material-icons">language</span>
          </LangRegion>
          <UserData>
            <span className="material-icons">menu</span>
            {!user ? (
              <img src="/images/account.svg" alt="profile" />
            ) : (
              <img src={photo} alt={name} />
            )}
          </UserData>
          {profileDrop ? (
            <DropDown>
              {!user ? (
                <>
                  <div
                    id="login"
                    className="dropdown-list"
                    onClick={toggleLogIn}
                  >
                    <div className="dropdown-item">Log In</div>
                  </div>
                  <div
                    id="signup"
                    className="dropdown-list"
                    onClick={toggleLogIn}
                  >
                    <div className="dropdown-item">Sign Up</div>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/">
                    <div className="dropdown-item">{name}</div>
                  </Link>
                  <div className="dropdown-list" onClick={logout}>
                    <div className="dropdown-item">Log out</div>
                  </div>
                </>
              )}
              <hr />
              <Link to="/">
                <div className="dropdown-item">Host your home</div>
              </Link>
              <Link to="/">
                <div className="dropdown-item">Host an experience</div>
              </Link>
              <Link to="/">
                <div className="dropdown-item">Help</div>
              </Link>
            </DropDown>
          ) : null}
        </UserList>
      </Content>
      {popup && (
        <Popup
          handleClose={showPop}
          elementData={
            caller === "login" ? (
              <Login toggleSignup={toggleSignup} />
            ) : caller === "signup" ? (
              <Signup />
            ) : (
              "404 Error Try Again"
            )
          }
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #000;
  width: 100%;
  position: sticky;
  top: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  height: 80px;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const Logo = styled.div`
  img {
    width: 120px;

    @media (max-width: 768px) {
      width: 100px;
    }
  }
`;

const UserList = styled.div`
  display: flex;
`;

const Host = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  border-radius: 22px;
  font-weight: 600;
  padding: 0px 12px;
  line-height: 0px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const LangRegion = styled(Host)`
  margin-right: 8px;
  span {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 90px;
  background: #ffffff;
  width: 240px;
  right: 80px;
  border-radius: 20px;

  a,
  .dropdown-list {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    text-decoration: none;
    cursor: pointer;

    .dropdown-item {
      color: rgba(0, 0, 0, 0.8);
      font-size: 14px;
      font-weight: 600;
    }

    &:hover {
      background: rgb(140 140 140 / 20%);
    }
    &:first-child {
      margin-top: 10px;

      .dropdown-item {
        color: rgb(0, 0, 0);
        font-weight: 700;
      }
    }
    &:last-child {
      margin-bottom: 10px;
    }
  }
`;

const UserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 255, 255);
  border-radius: 22px;
  padding: 8px 12px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 2px 5px;
  }

  .material-icons {
    color: #222222;
    font-size: 20px;
    font-weight: 400;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    margin-left: 5px;
  }
`;
export default Header;
