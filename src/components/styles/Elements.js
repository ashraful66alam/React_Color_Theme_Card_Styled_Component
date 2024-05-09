import styled from "styled-components";

export const Tag = styled.span`
    display: inline-block;
    /* color: #fff; */
    color: ${(props)=>props.theme.cardtheme.color};
    background: ${(props) => props.color};
    /* background: ${(props)=> props.theme.cardtheme.bg}; */
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.7em;
`;

export const H1 = styled.h1`
     /* color: #fff; */
     color: ${(props)=>props.theme.cardtheme.color};

`;


export const P = styled.p`
    width: 300px;
    font-size: 13px;
    line-height: 1.4;
    /* color: #aaa; */
    color: ${(props)=>props.theme.cardtheme.color};
    margin: 20px 0;
`;


export const Image = styled.img`
    position: absolute;
    /* top: 30px; */
    right: 0px;
    z-index: 0;
    /* width: 300px; */
    
`;

