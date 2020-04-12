import { RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';

type Props = { component: FunctionComponent } & RouteComponentProps;

const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

export default Route;
