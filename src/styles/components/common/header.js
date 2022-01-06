import styled from "styled-components";
import theme from "../../utils/theme";

export const NavContainer = styled.section`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: ${(props) => props.height ? props.height : '68px'};
  padding: 0 20px;
  color: ${theme.colors.white};
  background-color: ${(props) => props.bgColor ? props.bgColor : 'rgba(255,255,255,0)'};
  transition: all 100ms ease-in-out;
  z-index: 30;

  // props > headerKind (scroll 시, header 변경)
  &.header-white {
    color: ${theme.colors.black1};
    background-color: ${theme.colors.white};
  }

  nav {
    
    .nav-list {
      display: flex;
    }

    .nav-item {
      ${theme.Body1};

      &.is-active {
        padding-bottom: 6px;
        ${theme.SubTitle1};
        font-weight: 600;
        border-bottom: 3px solid ${theme.colors.orange};
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .header-btn {
    margin-bottom: 2px;
  }
`;

export const BackContainer = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 68px;
  background: ${theme.colors.white};

  .btn-back-svg {
    position: absolute;
    top: 18px;
    left: 20px;
  }

  .btn-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    ${theme.H2};
    color: ${theme.colors.gray2};
  }
`;