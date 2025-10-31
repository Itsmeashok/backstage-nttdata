import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Layout containers
const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f7f7f9;
  /* Prevent body from scrolling; inner content scrolls instead */
  overflow: hidden;
`;

const ContentRow = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
`;

// Navbar
const Topbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 2.5rem 16px;
  background: #ffffff;
  border-bottom: 2px solid #333333;
`;

const TopbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 30px;
`;

const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 30px;
`;

const LogoImg = styled.img`
  height: 32px;
  width: auto;
`;

const TitleText = styled.span`
  color: #000000;
  font-size: 18px;
  font-weight: 500;
`;

const LogoDivider = styled.span`
  display: inline-block;
  width: 1px;
  background: #dddddd;
  height: 60px;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  width: 37px;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  padding: 0;

  img {
    height: 43px;
    width: 43px;
  }

  &:hover {
    background: #f7f7f9;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  min-width: 300px;
  font-size: 14px;
  border: 1px solid #939393;
  padding: 6px 8px 6px 10px;
  border-radius: 8px;
  background: transparent;
  height: 38px;
  &::placeholder {
    color: #6e6e6e;
    font-size: 16px;
    font-weight: 400;
  }
`;

const SearchIconImg = styled.img`
  height: 37px;
  width: 37px;
  margin-right: 1rem;
  cursor: pointer;
`;

// Sidebar
const Sidebar = styled.aside`
  width: 220px;
  background: #ffffff;
  padding: 16px 10px;
  overflow-y: auto;
`;

const NavList = styled.nav`
  display: grid;
  gap: 6px;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  color: #333333;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;

  &:hover {
    background: #f5f5f8;
  }

  img {
    height: 23px;
    width: 23px;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0; /* allow child to shrink and manage its own scroll */
  overflow: hidden; /* prevent nested scrollbars */

  & > * {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto; /* single, unified scrollbar on the top-level child */
  }
`;

export default {
  Page: Page,
  ContentRow: ContentRow,
  Topbar: Topbar,
  TopbarLeft: TopbarLeft,
  TopbarRight: TopbarRight,
  LogoImg: LogoImg,
  TitleText: TitleText,
  LogoDivider: LogoDivider,
  IconButton: IconButton,
  SearchInput: SearchInput,
  SearchIconImg: SearchIconImg,
  Sidebar: Sidebar,
  NavList: NavList,
  NavItem: NavItem,
  Main: Main,
};
