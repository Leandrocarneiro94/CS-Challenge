import styled from "styled-components";

export const Results = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 25px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    color: black;
`;

export const Avatar = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
    margin-left: 130px;
`;

export const UserInfo = styled.div`
    margin: 100px;
    display: flex;
    flex-direction: column;

        p {
            margin: 20px 0;
        }
`;

export const NotFoundText = styled.div`
    color: var(--light-grey);
    margin: 20px 0;

`;

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LinkRepo = styled.div`
    display: flex;
    align-items: center;
    background-color: #4682B4;
    color: var(--white);
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    height: 60px;
    width: 220px;    

        p {
            padding: 20px;
        }  
`;

export const LinkVoltar = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--light-grey);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    height: 60px;
    width: 120px;
    padding: 27px;
    
`;

export const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const UserNotFound = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
`;
