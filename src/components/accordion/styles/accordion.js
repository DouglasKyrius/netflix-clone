import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px 0;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  max-width: 670px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  /* min-height: 1200px; */
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8em 2.2em;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  } ;
`;

export const StyledOpen = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: white;
    border-radius: 10px;
    transition: all 0.15s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open ? "rotate(45deg)" : "rotate(90deg) translateY(-16px)"};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "0")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg)" : "rotate(0) translateX(1px) translateY(-6px)"};
    }
  }
`;
