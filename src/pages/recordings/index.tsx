import { Card, StatusIcon } from '@carbon/ibm-security';
import { DataTable } from 'carbon-components-react';
import React, { useContext } from 'react';
import Shell from '../../components/Shell';
import DataContext from '../../core/data/data.context';
import { SourceTrackState } from '../../types';
import recordingSelectors from './lib/recording-selectors';

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
  { key: 'name', header: 'Name' },
  { key: 'location', header: 'Location' },
  { key: 'token', header: 'Token' },
  { key: 'activeJob', header: 'Active Job' },
  { key: 'retentionTime', header: 'Retention Time' },
];

const RECORDINGS_TABLE_TITLE = 'Recordings';

const trackStatus = {
  [SourceTrackState.Error]: 'error',
  [SourceTrackState.Idle]: 'info',
  [SourceTrackState.Active]: 'success'
};

const Recordings: React.FC = () => {
  const data = useContext(DataContext);
  const selector = recordingSelectors(data);

  const rows = data
    .recordings.allIds
    .map((id) => data.recordings.byId[id])
    .map((recording) => ({
      id: recording.token,
      token: recording.token,
      name: (
        <StatusIcon
          message={recording.name}
          description={recording.name}
          status={trackStatus[selector.getRecordingErrorState({
            ...recording,
            id: recording.token
          })]}
        />
      ),
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
                  {headers.map((header) => (
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
                              {selector.getActiveSourceTrackCards(row).map((t) => (
                                <li className={`ms-list-item`} key={row.id + t.trackId}>
                                  <Card
                                    header={{
                                      tag: `ID: ${t.trackId}`,
                                      title: t.track.trackType,
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

export default Recordings;
