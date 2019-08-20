import React, { Component } from 'react';
import {
  HeaderContainer,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavMenu,
  Header,
  HeaderMenu,
  HeaderSideNavItems,
  SideNavMenuItem,
  SideNavItems,
} from 'carbon-components-react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }: any) => (
            <>
              <Header aria-label="Monocle Server">
                <SkipToContent />
                <HeaderMenuButton
                  aria-label="Open menu"
                  onClick={onClickSideNavExpand}
                  isActive={isSideNavExpanded}
                />
                <HeaderName href="#" prefix="Monocle">
                  Server
                </HeaderName>
                <HeaderNavigation aria-label="Monocle Server">
                  <HeaderMenuItem href="#">Recordings</HeaderMenuItem>
                </HeaderNavigation>
                <SideNav
                  aria-label="Side navigation"
                  expanded={isSideNavExpanded}
                >
                  <SideNavItems>
                    <HeaderSideNavItems hasDivider={true}>
                      <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                      <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                      <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                      <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                        <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                        <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                        <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                      </HeaderMenu>
                    </HeaderSideNavItems>
                    <SideNavMenu title="Category title">
                      <SideNavMenuItem href="#">
                        Link
                      </SideNavMenuItem>
                      <SideNavMenuItem href="#">
                        Link
                      </SideNavMenuItem>
                      <SideNavMenuItem href="#">
                        Link
                      </SideNavMenuItem>
                    </SideNavMenu>
                  </SideNavItems>
                </SideNav>
              </Header>
            </>
          )}
        />
      </div>
    );
  }
}

export default App;
