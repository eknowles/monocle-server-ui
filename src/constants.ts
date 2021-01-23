export const ORGANISATION = 'MonocleVMS';
export const PROJECT = 'Server';
export const GRPC_SERVER = 'http://:8080';
export const LOCALSTORAGE_AUTH_TOKEN_KEY = 'monocle-auth-token';

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
