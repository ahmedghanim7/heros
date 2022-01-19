import styled from "styled-components";

interface IProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  alignItems?: string;
  justifyContent?: string;  
}

export const CardSection = styled.div<IProps>`
    /* position: relative; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    /* height: ${(props) => props.height || "400px"}; */
    background-color: #fff;
    border-radius: ${(props) => props.borderRadius || "10px"};
    overflow: hidden;
    /* padding: 35px 4px; */
    /* width: ${(props) => props.width}; */
    /* @media (max-width: 768px) {
    width: 100%;
  } */
`;

export const Img = styled.img<IProps>`
  /* width: ${(props) => (props.width ? props.width : "300px")}; */
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  object-fit: cover;
  position: relative;
  top: 0;
  margin-bottom: 10px;
  max-height:300px; 
  min-height:300px; 
`;
export const ContainerButton = styled.div`
  display: flex;

`;

export const ContainerShopping = styled.div`
  background-color: #f2f2f2;
  display: flex;
  border-radius:16px; 
  position:relative; 
 align-items:center; 
 overflow: hidden;

  &:hover {
    box-shadow: 0px 4px 8px #00000017;
  }
`;
export const ContainerClose = styled.div`
position:absolute; 
top:10px; 
right:12px; 

`;

export const ItemImg = styled.div<IProps>` 
width:20%;
height:150px; 
overflow: hidden;
object-fit:cover; 
display:flex;
align-items: ${props => props.alignItems || null}  ;
justify-content: ${props => props.justifyContent || null} ; 
/* padding:5px 10px;  */

`
export const ItemCounter = styled.div` 
width:30%;
display:flex; 
align-items:center; 
`
export const ItemTypo = styled.div` 
width:30%; 
align-self:flex-start; 
padding:30px 5px; 
`
export const Itemprice = styled.div`
 width:40%

align-self:center; 
`