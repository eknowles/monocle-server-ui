import * as React from 'react';
import { DataTable } from 'carbon-components-react';
import { Card, StatusIcon } from '@carbon/ibm-security';

import { WEB_SOCKET_URI } from '../../constants';
import Shell from '../../components/Shell';
import useRecordings from './use-recordings';
import { Monocle } from '../../types';

import './recordings.scss';

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
          <TableContainer
            title={RECORDINGS_TABLE_TITLE}
            description={`View the available recording configurations`}
          >
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
                        <ul className={`ms-list`}>
                          <li className={`ms-list-item`}>
                            <h4>Jobs</h4>
                            <ul className={`ms-list`}>
                              {recordings.find((r) => r.token === row.id)!.jobs.map((j) => (
                                <li className={`ms-list-item`}>
                                  <Card
                                    header={{
                                      tag: j.name,
                                      title: j.name,
                                    }}
                                    body={{
                                      text: 'yo'
                                    }}
                                    footer={{
                                      children: (
                                        <StatusIcon
                                          description={'footerDescription'}
                                          message={'footerDescription'}
                                          status="success"
                                        />
                                      )
                                    }}
                                  />
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className={`ms-list-item`}>
                            <h4>Tracks</h4>
                            <ul className={`ms-list`}>
                              {recordings.find((r) => r.token === row.id)!.tracks.map((j) => (
                                <li className={`ms-list-item`}>
                                  <Card
                                    header={{
                                      tag: j.trackType,
                                      title: j.trackType,
                                    }}
                                    body={{
                                      text: j.description
                                    }}
                                    footer={{
                                      children: (
                                        <StatusIcon
                                          description={'footerDescription'}
                                          message={'footerDescription'}
                                          status="success"
                                        />
                                      )
                                    }}
                                  />
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
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
