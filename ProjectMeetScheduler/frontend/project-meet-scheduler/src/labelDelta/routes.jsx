
import React from 'react';
import TableColorLabelPage from './containers/TableColorLabelPage'
import FormColorLabel from './containers/FormColorLabel'

const labelDeltaRoutes = [
{ 
    path: "/labeldelta",
    element: <TableColorLabelPage />,
  }	
,
{ 
    path: "/labeldelta/tambah",
    element: <FormColorLabel />,
  }	

]

export default labelDeltaRoutes
