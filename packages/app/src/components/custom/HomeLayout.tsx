import React, { PropsWithChildren, useCallback, useState } from 'react';
import { Link as RouterLink, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CatalogIndexPage } from '@backstage/plugin-catalog';
import { ApiExplorerPage } from '@backstage/plugin-api-docs';
import { TechDocsIndexPage } from '@backstage/plugin-techdocs';
import { ScaffolderPage } from '@backstage/plugin-scaffolder';
import { SearchPage } from '@backstage/plugin-search';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { NotificationsPage } from '@backstage/plugin-notifications';
import { CatalogImportPage } from '@backstage/plugin-catalog-import';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';
import { useApi } from '@backstage/core-plugin-api';
import { identityApiRef } from '@backstage/core-plugin-api';
import Styles from './HomeLayout.styles';
const { Page, ContentRow, Topbar, TopbarLeft, TopbarRight, LogoImg, TitleText, LogoDivider, IconButton, SearchInput, SearchIconImg, UserMenu, Sidebar, NavList, NavItem, Main } = Styles as any;

const ChartIcon = '/icons/Icon-Chart.svg';
const SearchIcon = '/icons/Icon-Search.svg';
const BellIcon = '/icons/Icon-Bell.svg';
const MenuIcon = '/icons/Icon-Menu.svg';
const GeneralitatLogo = '/logos/Logo-Generalitat.svg';
const HelpIcon = '/icons/Icon-Info.svg';
const ChevronIcon = '/icons/Icon-Chevron.svg';

const SidebarLinks: Array<{ to: string; label: string }> = [
  { to: '/home/catalog', label: 'Home' },
  { to: '/home/api-docs', label: 'APIs' },
  { to: '/home/docs', label: 'Docs' },
  { to: '/home/create', label: 'Create' },
];

const TopbarSection = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const identityApi = useApi(identityApiRef);
  const [userInfo, setUserInfo] = useState<{ name: string; email?: string } | null>(null);

  React.useEffect(() => {
    identityApi.getBackstageIdentity().then(identity => {
      const profile = identity.userEntityRef.split('/');
      const name = profile[profile.length - 1];
      setUserInfo({ name: name || 'Usuario' });
    }).catch(() => {
      setUserInfo({ name: 'Usuario' });
    });
  }, [identityApi]);

  const triggerSearch = useCallback(() => {
    const trimmed = query.trim();
    if (trimmed.length > 0) {
      navigate(`/search?query=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/search');
    }
  }, [navigate, query]);

  return (
    <Topbar>
      <TopbarLeft>
        <RouterLink to="/home">
          <LogoImg src={GeneralitatLogo} alt="Logo" />
        </RouterLink>
      <LogoDivider />
      <TitleText>Portal del Desenvolupador</TitleText>
      </TopbarLeft>
      <TopbarRight>
        <SearchInput
          placeholder="Buscar..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') triggerSearch();
          }}
          aria-label="Search"
        />
        <SearchIconImg
          src={SearchIcon}
          alt="Search"
          onClick={triggerSearch}
          role="button"
          aria-label="Submit search"
        />
        <UserMenu onClick={() => navigate('/catalog/development/user/guest')}>
          <span>
            {userInfo?.name && userInfo.name.length > 3
              ? `${userInfo.name.substring(0, 3)}...`
              : userInfo?.name || 'Usuario'}
          </span>
          <img src={ChevronIcon} alt="Dropdown" />
        </UserMenu>
        <IconButton aria-label="Notifications" onClick={() => navigate('/notifications')}>
          <img src={BellIcon} alt="Notifications" />
        </IconButton>
        <IconButton 
          aria-label="Help" 
          onClick={() => window.open('https://backstage.io/docs/overview/support/', '_blank', 'noopener,noreferrer')}
        >
          <img src={HelpIcon} alt="Help" />
        </IconButton>
        <IconButton aria-label="Menu" onClick={() => navigate('/settings')}>
          <img src={MenuIcon} alt="Menu" />
        </IconButton>
      </TopbarRight>
    </Topbar>
  );
};

export const HomeLayout: React.FC = () => {
  return (
    <CommonShell>
      <Routes>
        <Route index element={<Navigate to="catalog" replace />} />
        <Route path="catalog" element={<CatalogIndexPage />} />
        <Route path="api-docs" element={<ApiExplorerPage />} />
        <Route path="docs" element={<TechDocsIndexPage />} />
        <Route path="create/*" element={<ScaffolderPage />} />
        <Route
          path="catalog-import"
          element={
            <RequirePermission permission={catalogEntityCreatePermission}>
              <CatalogImportPage />
            </RequirePermission>
          }
        />
        <Route path="search/*" element={<SearchPage />} />
        <Route path="settings" element={<UserSettingsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Routes>
    </CommonShell>
  );
};

export default HomeLayout;

export const CommonShell = ({ children }: PropsWithChildren<{}>) => (
  <Page>
    <TopbarSection />
    <ContentRow>
      <Sidebar>
        <NavList>
          {SidebarLinks.map(link => (
            <NavItem key={link.to} to={link.to} component={RouterLink as any}>
              <img src={ChartIcon} alt="link" />
              {link.label}
            </NavItem>
          ))}
        </NavList>
      </Sidebar>
      <Main>{children}</Main>
    </ContentRow>
  </Page>
);


