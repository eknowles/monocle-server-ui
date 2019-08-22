export const ORGANISATION = 'Monocle';
export const PROJECT = 'Server';

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
  },
  {
    id: 'sources',
    path: '/sources',
    label: 'Sources',
  }
];
