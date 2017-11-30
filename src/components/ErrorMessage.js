import React from 'react';
import { Alert } from 'reactstrap';

const ErrorMessage = ({error}) => <Alert color="danger">Error: {error}</Alert>;

export default ErrorMessage;
