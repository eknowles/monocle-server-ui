import * as React from 'react';
import { DataTable } from 'carbon-components-react';

import { WEB_SOCKET_URI } from '../../constants';
import Shell from '../../components/Shell';
import useRecordings from './use-recordings';

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

const headers = [
  { key: 'token', header: 'Token' },
  { key: 'location', header: 'Location' },
  { key: 'name', header: 'Name' },
  { key: 'state', header: 'Status' },
  { key: 'retentionTime', header: 'Retention Time' },
];

const RECORDINGS_TABLE_TITLE = 'Recordings';

const Recordings: React.FC = () => {
  const { recordingIds } = useRecordings(WEB_SOCKET_URI);

  console.log(recordingIds);

  const rows = recordingIds.map((token) => ({
    id: token,
    token,
    name: '',
    state: '',
    location: '',
    retentionTime: '',
  }));

  return (
    <Shell>
      <DataTable
        rows={rows}
        headers={headers}
        render={({ rows, headers, getHeaderProps, getRowProps }) => (
          <TableContainer title={RECORDINGS_TABLE_TITLE} description={`View the available recording configurations`}>
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
