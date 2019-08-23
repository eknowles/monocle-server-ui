import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  Content,
  SideNav,
  SideNavItems,
  SkipToContent,
} from 'carbon-components-react';
import React from 'react';
import {PROJECT, ORGANISATION, NAV_ITEMS} from '../constants';
import { Link as ReachLink } from '@reach/router';

const HeaderMenuItemX = HeaderMenuItem as any;
const HeaderNameX = HeaderName as any;

const Shell: React.FC = ({ children }) => {
  return (
    <>
      <HeaderContainer render={() => (
        <Header aria-label={`${ORGANISATION} ${PROJECT}`}>
          <SkipToContent />
          <HeaderNameX element={ReachLink} to="/" prefix={ORGANISATION}>
            {PROJECT}
          </HeaderNameX>
          <HeaderNavigation aria-label={`${ORGANISATION} ${PROJECT}`}>
            {NAV_ITEMS.map((i) => <HeaderMenuItemX element={ReachLink} to={i.path} key={i.id}>{i.label}</HeaderMenuItemX>)}
          </HeaderNavigation>
        </Header>
      )} />
      <Content>{children}</Content>
    </>
  );
};

export default Shell;
