export const ORGANISATION = 'MonocleVMS';
export const PROJECT = 'Server';
export const WEB_SOCKET_URI = 'ws://151.80.44.148:9854';

interface IMonocleNavItem {
  id: string;
  path: string;
  label: string;
  children?: IMonocleNavItem[]
}

export const NAV_ITEMS: IMonocleNavItem[] = [
  {
    id: 'recordings',
    path: '/recordings',
    label: 'Recordings',
  }
];
