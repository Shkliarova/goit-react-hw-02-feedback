import styled from "styled-components";

export const FeedbackWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
font-size: x-large;
padding: 20px;
border: 1px solid ${p => {
    return p.theme.colors.blue}};
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
width: 500px;
margin: 0 auto;`

export const FeedbackBtn = styled.div`
display: flex;
gap: 8px;
justify-content: center;`