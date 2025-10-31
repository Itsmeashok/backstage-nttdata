import { Navigate, Route } from 'react-router-dom';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import { CatalogEntityPage, CatalogIndexPage, catalogPlugin } from '@backstage/plugin-catalog';
import { CatalogImportPage, catalogImportPlugin } from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { techdocsPlugin, TechDocsReaderPage, TechDocsIndexPage } from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
// no direct settings page route; routed via HomeLayout
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { Root } from './components/Root';

import {
  AlertDisplay,
  OAuthRequestDialog,
  SignInPage,
} from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';
import { NotificationsPage } from '@backstage/plugin-notifications';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { SignalsDisplay } from '@backstage/plugin-signals';
import HomeLayout from './components/custom/HomeLayout';
import { SearchPage } from '@backstage/plugin-search';
import { searchPage } from './components/search/SearchPage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@backstage/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const app = createApp({
  apis,
  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
      createFromTemplate: scaffolderPlugin.routes.selectedTemplate,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
  components: {
    SignInPage: props => <SignInPage {...props} auto providers={['guest']} />,
  },
});

const routes = (
  <FlatRoutes>
    <Route path="/" element={<Navigate to="home" />} />
    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    >
      <TechDocsAddons>
        <ReportIssue />
      </TechDocsAddons>
    </Route>
    <Route path="/create/" element={<ScaffolderPage />} />
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route path="/catalog-import" element={
      <RequirePermission permission={catalogEntityCreatePermission}>
        <CatalogImportPage />
      </RequirePermission>
    } />
    <Route path="/search" element={<SearchPage />}>{searchPage}</Route>
    <Route path="/settings" element={<UserSettingsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />
    <Route path="/notifications" element={<NotificationsPage />} />
    <Route path="/home/*" element={<HomeLayout />} />
  </FlatRoutes>
);

const baseTheme = createMuiTheme(lightTheme);
const muiTheme = createMuiTheme({
  palette: {
    ...baseTheme.palette,
    primary: {
      main: '#C00000',
    },
  },
  typography: {
    fontFamily:
      "'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
  },
  shadows: Array(25).fill('none') as any,
  overrides: {
    MuiPaper: {
      root: { boxShadow: 'none' },
      rounded: { boxShadow: 'none' },
      elevation0: { boxShadow: 'none' },
      elevation1: { boxShadow: 'none' },
      elevation2: { boxShadow: 'none' },
      elevation3: { boxShadow: 'none' },
      elevation4: { boxShadow: 'none' },
      elevation5: { boxShadow: 'none' },
    },
    MuiTableCell: {
      root: {
        fontSize: '1rem',
      },
      head: {
        fontSize: '1rem',
      },
      body: {
        fontSize: '1rem',
      },
    },
    MuiAppBar: {
      root: { boxShadow: 'none' },
    },
    MuiCard: {
      root: { boxShadow: 'none' },
    },
    MuiPopover: {
      paper: { boxShadow: 'none' },
    },
    MuiDialog: {
      paper: { boxShadow: 'none' },
    },
    MuiMenu: {
      paper: { boxShadow: 'none' },
    },
  },
});

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <SignalsDisplay />
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppRouter>
        <Root>{routes}</Root>
      </AppRouter>
    </ThemeProvider>
  </>,
);
