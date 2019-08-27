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

const trackStatus = {
  Error: 'error',
  Idle: 'info',
  Active: 'success'
};

const Recordings: React.FC = () => {
  const { recordings } = useRecordings(WEB_SOCKET_URI);

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
                            <h5>Active Source Tracks</h5>
                            <ul className={`ms-list`}>
                              {getActiveSourceTrackCards(recordings, row.id).map((t) => (
                                <li className={`ms-list-item`} key={row.id + t.trackId}>
                                  <Card
                                    header={{
                                      tag: t.track.trackType,
                                      title: `ID: ${t.trackId}`,
                                    }}
                                    body={{
                                      text: t.track.description
                                    }}
                                    footer={{
                                      children: (
                                        <StatusIcon
                                          description={t.state}
                                          message={t.state}
                                          status={trackStatus[t.state]}
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

const getActiveSourceTrackCards = (recordings: Monocle.IRecording[], recordingToken: Monocle.IRecording['token']) => {
  const { jobs, activeJob, tracks } = recordings.find((r) => r.token === recordingToken)!;
  const sourceTracks = jobs.find((j) => j.token === activeJob)!.sources.reduce((a: Monocle.ISourceTrack[] = [], b) => ([...a, ...b.sourceTracks]), []);

  return sourceTracks.map((st) => ({...st, track: tracks.find((t) => t.id === st.trackId)!}));
};

export default Recordings;
