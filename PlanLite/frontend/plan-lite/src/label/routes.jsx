
import React from 'react';
import TableLabelPage from './containers/TableLabelPage'
import FormLabel from './containers/FormLabel'

const labelRoutes = [
{ 
    path: "/label",
    element: <TableLabelPage />,
  }	
,
{ 
    path: "/label/tambah",
    element: <FormLabel />,
  }	

]

export default labelRoutes
