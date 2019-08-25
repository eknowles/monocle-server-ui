import { Shell } from '@carbon/ibm-security';
import * as React from 'react';

import { PROJECT, ORGANISATION } from '../constants';

const ShellComponent: React.FC = ({ children }) => (
  <>
    <Shell
      header={{
        labels: {
          brand: {
            company: ORGANISATION,
            product: PROJECT
          },
          notifications: {
            button: 'Toggle notifications',
            clear: 'Clear',
            clear_all: 'Clear all notifications',
            link: 'View all',
            success: 'You\'re all caught up!',
            title: 'Notifications',
            today: 'Today',
            via: 'via'
          },
          profile: {
            account: 'Account',
            button: 'Toggle profile',
            edit_profile: 'Edit profile',
            link: 'Profile & account',
            registration: 'Create an account',
            sign_in: 'Sign in',
            sign_out: 'Sign out'
          }
        },
        links: {
          edit_profile: '#',
          notifications_preferences: '#',
          notifications_view_all: '#',
          product: '/',
          profile: '#',
          registration: '#',
          sign_in: '#',
          sign_out: '#'
        },
        totalNotifications: 0
      }}
      profile={{
        image_url: null,
        name: {
          first_name: ORGANISATION,
          surname: ''
        }
      }}
      renderAddons={[]}
      returnToBanner={null}
      skipToContent={null}
      toolbar={{
        labels: {
          menu: {
            button: 'Toggle menu',
            tooltip: 'Menu'
          },
          settings: {
            button: 'Toggle settings',
            tooltip: 'Settings'
          },
          support: {
            button: 'Toggle support',
            tooltip: 'Support'
          }
        },
        menu: [
          {
            id: '#18',
            navigation: [
              {
                content: undefined,
                href: '/recordings',
                icon: undefined,
                id: '#27',
                title: 'Recordings'
              }
            ],
            title: 'Server VMS'
          }
        ],
        settings: [
          {
            id: '#24',
            navigation: [
              {
                content: undefined,
                href: '/',
                icon: undefined,
                id: '#13',
                title: 'Account'
              }
            ],
            title: 'General settings'
          },
        ],
        support: [
          {
            id: '#23',
            navigation: [
              {
                content: undefined,
                href: 'https://www.monoclesecurity.com',
                icon: undefined,
                id: '#20',
                title: 'Monocle Website'
              }
            ],
            title: 'Support'
          }
        ]
      }}
    />
    <div
      id="main"
      style={{ padding: '1rem 2rem 1rem 5rem' }}
    >
      {children}
    </div>
  </>
);

export default ShellComponent;
