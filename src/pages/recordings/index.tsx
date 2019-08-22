import * as React from 'react';
import { DataTable } from 'carbon-components-react';

import Shell from '../../components/Shell';

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
} = DataTable;

const TableExpandRowX: any = TableExpandRow;

const rows = [
  {
    id: '1',
    name: 'DOOR-1',
    state: 'OK',
    location: 'Warehouse East Entrance',
    retentionTime: '1h',
  },
  {
    id: '2',
    name: 'DOOR-2',
    state: 'OK',
    location: 'Warehouse East External',
    retentionTime: '1h',
  },
  {
    id: '3',
    name: 'SHOP-1',
    state: 'OK',
    location: 'Till 1',
    retentionTime: '1h',
  },
];

const headers = [
  { key: 'location', header: 'Location' },
  { key: 'name', header: 'Name' },
  { key: 'state', header: 'Status' },
  { key: 'retentionTime', header: 'Retention Time' },
];

const RECORDINGS_TABLE_TITLE = 'Recordings';

const Recordings: React.FC = () => {
  return (
    <Shell>
      <DataTable
        rows={rows}
        headers={headers}
        render={({ rows, headers, getHeaderProps, getRowProps }) => (
          <TableContainer title={RECORDINGS_TABLE_TITLE}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableExpandHeader />
                  {headers.map(header => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) => (
                  <React.Fragment key={row.id}>
                    <TableExpandRowX {...getRowProps({ row })}>
                      {row.cells.map((cell: any) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableExpandRowX>
                    {row.isExpanded && (
                      <TableExpandedRow colSpan={headers.length + 1}>
                        <h1>Track 1</h1>
                        <p>Audio</p>
                      </TableExpandedRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </Shell>
  );
};

export default Recordings;
