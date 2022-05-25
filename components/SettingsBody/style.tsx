import styled from "styled-components";

export const BodyHolder = styled.div({
    position: 'relative',
    width: '60vw',
    height: '80vh',
    marginLeft: '20vw',
    marginTop: '5vh',
    display: 'flex',
    boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    "@media (max-width: 950px)": {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },

})

export const Divider = styled.div({
    float: 'left',
    // position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
    width: '50%'
})

export const HelperDiv = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
})

export const ImmageHolder = styled.div({},
    {
        position: 'relative',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        background: `url("../../img/profileDefault.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        "@media (max-width: 400px)": {
            width: '100px',
            height: '100px'
        }
    },
);

export const AddImageDiv = styled.div({
    position: 'absolute',
    top: '95%',
    left: '95%',
    borderRadius: '50%',
    border: '1px solid #fff',
    width: '50px',
    height: '50px',
    transform: 'translate(-95%, -95%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "@media (max-width: 400px)": {
        width: '30px',
        height: '30px',
        top: '100%',
        left: '100%'
    }
},

)

export const MainSettings = styled.div({
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '60%',
},
);


export const EditLogoutBtn = styled.button({
    color: "#fff",
    fontWeight: 600,
    backgroundColor: "#229ED9",
    width: "100px",
    height: "30px",
    fontSize: "1rem",
    border: "2px solid transparent",
    outline: 0,
    cursor: "pointer",
    boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    transition: "all 1s ease",
    "&:hover": {
        color: "#22333B",
        backgroundColor: "#fff",
        border: "2px solid #2229ED9",
        transition: "all 1s ease",
    },
})

export const DividerRight = styled.div({
    float: 'right',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column',
    width: '50%',
    "@media (max-width: 400px)": {
        width: '100%',
    }
})

export const EditProfileInput = styled.input({
    fontSize: '1.2rem',
    border: 0,
    outline: 0,
    borderBottom: '2px solid #229ED9',
    "&:focus": {
        borderBottom: '2px solid #229ED9',
    },

})

