import styled from "@emotion/styled";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    // background-color: antiquewhite;
    max-width: 1158px;
    padding: 100px 15px;
    margin-left:  auto;
    margin-right: auto;
`;
export const TitlePhonebook = styled.h1`
    font-size: 50px;
    color: rgb(26 29 32);
`;
export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 660px;
    align-items: center;
    justify-content: center;
    border: 4px solid rgb(173 89 227);
    box-shadow: 10px 10px 10px rgba(46, 47, 66, 0.08),
    10px 10px 10px rgba(46, 47, 66, 0.16), 
    10px 10px 10px rgba(46, 47, 66, 0.08), 
    30px 30px 30px rgba(46, 47, 66, 0.08);
`;
export const TitleContact = styled.h2`
    font-size: 45px;
    color: rgb(26 29 32);
`;