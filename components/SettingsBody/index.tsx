import React, { useContext, useEffect, useState } from "react";
import { AddImageDiv, BodyHolder, Divider, DividerRight, EditLogoutBtn, EditProfileInput, HelperDiv, ImmageHolder, MainSettings } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCheck, faTimes, faEdit, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { AppTheme } from "../../Theme/AppTheme";
import { ThemeContext } from "../../pages/_app";
import { uploadFile } from "../../firebaseFunctions/storage";
import { db, IProfile } from "../../firebaseFunctions/firestore";
import { useAuth } from "../../Hooks/useAuth";
import { doc, setDoc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";



const SettingsBody = (children: any) => {
    const { auth } = useAuth();
    const [openForm, setOpenForm] = useState(false);
    const [image, setImage] = useState<File>();
    const { theme, setTheme } = useContext(ThemeContext);
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


    const onCancel = () => {
        setUserProfileEdit(userProfile);
    }

    const onEdit = async (userProfile: IProfile) => {
        if (auth) {
            await setDoc(
                doc(db.profiles, auth.userId),
                {
                    username: userProfile.username,
                    organization: userProfile.organization,
                    age: userProfile.age
                },
                { merge: true }
            );
        }
    }

    const themeToogle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const headerStyle: AppTheme = {
        dark: { backgroundColor: '#333', color: "#f2f2f2", boxShadow: "rgba(200, 200, 200, 0.25) 0px 2px 5px -1px, rgba(200, 200, 200, 0.3) 0px 1px 3px -1px" },
        light: { backgroundColor: '#f2f2f2', color: '#333' },
        common: { transition: 'all 1s ease' }
    }

    const themeStyle = {
        ...headerStyle.common,
        ...(theme === 'light' ? headerStyle.light : headerStyle.dark)
    }

    const hadleChange = (e: any) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    return (
        <BodyHolder style={themeStyle} >
            <Divider >
                <HelperDiv>
                    <ImmageHolder >
                        <AddImageDiv>
                            <label onChange={hadleChange}>
                                <FontAwesomeIcon icon={faCamera} onClick={() => uploadFile(image)} style={{ color: "#303030", fontSize: '30px' }}
                                />
                                <input type={"file"} style={{ display: "none" }} />
                            </label>
                        </AddImageDiv>
                    </ImmageHolder>
                </HelperDiv>
                <MainSettings>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', position: 'relative' }}>
                        {theme === "light" &&
                            < FontAwesomeIcon icon={faSun} style={{ color: 'yellow', fontSize: '24px', position: 'absolute', left: 0 }} />
                        }
                        <EditLogoutBtn onClick={() => themeToogle()}>Theme</EditLogoutBtn>
                        {theme === "dark" &&
                            <FontAwesomeIcon icon={faMoon} style={{ color: 'grey', fontSize: '24px', position: 'absolute', right: 0 }} />
                        }
                    </div>
                    <EditLogoutBtn onClick={() => setOpenForm(true)}><FontAwesomeIcon icon={faEdit} />Profile</EditLogoutBtn>
                </MainSettings>
            </Divider>
            <DividerRight>
                {!openForm &&
                    <>
                        <h3>Username: {userProfileEdit.username}</h3>
                        <h3>Organization: {userProfileEdit.organization}</h3>
                        <h3>Age: {userProfileEdit.age}</h3>
                    </>
                }
                {openForm &&
                    <>
                        <h3>Username:
                  <EditProfileInput
                                type="text"
                                value={userProfileEdit.username}
                                onChange={(e) =>
                                    setUserProfileEdit({ ...userProfileEdit, username: e.target.value })}
                            />
                        </h3>
                        <h3>Organization:
                <EditProfileInput type="text"
                                value={userProfileEdit.organization}
                                onChange={(e) => setUserProfileEdit({ ...userProfileEdit, organization: e.target.value })}
                            />
                        </h3>
                        <h3>Age:
                    <EditProfileInput type="text"
                                value={userProfileEdit.age}
                                onChange={(e) => setUserProfileEdit({ ...userProfileEdit, age: e.target.value })}
                            />
                        </h3>
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
                    </>
                }
            </DividerRight>

        </BodyHolder>
    )
};


export default SettingsBody;