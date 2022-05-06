import styled from "styled-components";

export const HeaderContainerSet = styled.div({
    position: 'relative',
    height: '8vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingLeft: '2rem',
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});

export const ArrowHolder = styled.div({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    zIndex: 1,
    transition: 'all 0.5s ease',
    "&:hover": {
        backgroundColor: '#555',
        transition: 'all 0.5s ease',

    }
})

