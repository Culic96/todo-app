import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import {
  HeaderContainer,
  HeaderLogo,
  UserInfo,
  UserMenu,
  UserMenuList,
} from "./style";
import { db, IProfile } from "../../firebaseFunctions/firestore";
import { doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
const Header = () => {
  const { auth, logoutUser } = useAuth();
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const [userProfile, setUserProfile] = useState<IProfile>({
    username: "",
    organization: "",
    age: "",
  });
  const [userProfileEdit, setUserProfileEdit] = useState({
    username: "",
    organization: "",
    age: "",
  });



  const [userDoc] = useDocumentData<IProfile>(auth ? doc(db.profiles, auth.userId) : null);

  useEffect(() => {
    if (userDoc) {
      setUserProfile(userDoc);
      setUserProfileEdit(userDoc);
    }
  }, [userDoc]);

  // const handleForm = (e:FormEvent) => {
  //   e.preventDefault();
  //   try {


  //   } catch (error) {
  //     console.log(error?.message)
  //   }
  // }
  // const createUserProfile = async () => {
  //   const docRef = await addDoc(db.profile, userProfile);
  // }
  const onCancel = () => {
    setUserProfileEdit(userProfile);
  }

  const onEdit = async (userProfile: IProfile) => {
    console.log('[onEditProfile] profile id = ', userProfile.id);
    if (auth) {
      await setDoc(
        doc(db.profiles, auth?.userId),
        {
          username: userProfile.username,
          organization: userProfile.organization,
          age: userProfile.age
        },
        { merge: true }
      );
    }
  }

  useEffect(() => {
    console.log("fired")
  }, [])

  return (
    <>
      <HeaderContainer>
        <HeaderLogo>
          <h1>
            <span>TODO</span>app
          </h1>
        </HeaderLogo>
        {auth && (
          <UserInfo>
            <UserMenu onClick={() => setIsUserMenuOpened(!isUserMenuOpened)} />
            <UserMenuList isOpened={isUserMenuOpened}>
              <button onClick={() => setOpenForm(true)}>Profile</button>
              {!openForm &&
                <>
                  <p>Username: {userProfileEdit.username}</p>
                  <p>Organization: {userProfileEdit.organization}</p>
                  <p>Age: {userProfileEdit.age}</p>
                </>
              }
              {openForm &&
                <>
                  {/* <form onSubmit={handleForm}> */}
                  <p>Username:
                  <input
                      type="text"
                      value={userProfileEdit.username}
                      onChange={(e) =>
                        setUserProfileEdit({ ...userProfileEdit, username: e.target.value })}
                    />
                  </p>
                  <p>Organization:
                <input type="text"
                      value={userProfileEdit.organization}
                      onChange={(e) => setUserProfileEdit({ ...userProfileEdit, organization: e.target.value })}
                    />
                  </p>
                  <p>Age:
                    <input type="text"
                      value={userProfileEdit.age}
                      onChange={(e) => setUserProfileEdit({ ...userProfileEdit, age: e.target.value })}
                    />
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }}
                      onClick={() => {
                        setOpenForm(false);
                        onEdit(userProfileEdit)
                      }} />
                    <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }}
                      onClick={() => {
                        setOpenForm(false);
                        onCancel();
                      }} />
                  </div>

                  {/* </form> */}
                </>
              }

              <button onClick={logoutUser}>Logout</button>
            </UserMenuList>
          </UserInfo>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
