import React from 'react';
import styled from 'styled-components';

const ImgSection = styled.section`
    display: flex;
    width: 30%;
    `;

const ImgDiv = styled.div`
    flex: 1;
    background: #e1dfdf;
    border: 1px solid;
    margin: 1%;
`;


const Thumbnails = () => {
    return (
        <div>
            <h2>Yes, as you can see in these photos.</h2>
            <ImgSection>
                <ImgDiv>Img 1</ImgDiv>
                <ImgDiv>Img 2</ImgDiv>
                <ImgDiv>Img 3</ImgDiv>
            </ImgSection>
            <div>
                user info | Helpful | Report
            </div>
        </div>
    );
};

export default Thumbnails;