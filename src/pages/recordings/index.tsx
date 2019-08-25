import * as React from 'react';
import { DataTable } from 'carbon-components-react';

import { WEB_SOCKET_URI } from '../../constants';
import Shell from '../../components/NewShell';
import useRecordings from './use-recordings';
import { Monocle } from '../../types';

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
  { key: 'activeJob', header: 'Active Job' },
  { key: 'retentionTime', header: 'Retention Time' },
];

const RECORDINGS_TABLE_TITLE = 'Recordings';

const Recordings: React.FC = () => {
  const { recordings } = useRecordings(WEB_SOCKET_URI);

  console.log(recordings);

  const rows = recordings.map((recording: Monocle.IRecording) => ({
    id: recording.token,
    token: recording.token,
    name: recording.name,
    activeJob: recording.activeJob,
    location: recording.location,
    retentionTime: recording.retentionTime,
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
