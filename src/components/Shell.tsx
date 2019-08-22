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
  const render = ({ isSideNavExpanded, onClickSideNavExpand }: any) => {
    return (
      <>
        <Header aria-label={`${ORGANISATION} ${PROJECT}`}>
          <SkipToContent />
          <HeaderMenuButton aria-label="Open menu" onClick={onClickSideNavExpand} isActive={isSideNavExpanded} />
          <HeaderNameX element={ReachLink} to="/" prefix={ORGANISATION}>
            {PROJECT}
          </HeaderNameX>
          <HeaderNavigation aria-label={`${ORGANISATION} ${PROJECT}`}>
            {NAV_ITEMS.map((i) => <HeaderMenuItemX element={ReachLink} to={i.path} key={i.id}>{i.label}</HeaderMenuItemX>)}
          </HeaderNavigation>
        </Header>
        {
          isSideNavExpanded && (<SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
            <SideNavItems>
              <HeaderSideNavItems hasDivider={true}>
                {NAV_ITEMS.map((i) => <HeaderMenuItemX element={ReachLink} to={i.path} key={i.id}>{i.label}</HeaderMenuItemX>)}
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>)
        }
      </>
    );
  };

  return (
    <>
      <HeaderContainer render={render} />
      <Content>{children}</Content>
    </>
  );
};

export default Shell;
