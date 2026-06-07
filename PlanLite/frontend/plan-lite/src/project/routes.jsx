
import React from 'react';
import TableProjectPage from './containers/TableProjectPage'
import AddProjectPage from './containers/AddProjectPage'
import DetailProjectPage from './containers/DetailProjectPage'

const projectRoutes = [
{ 
    path: "/project",
    element: <TableProjectPage />,
  }	
,
{ 
    path: "/project/tambah",
    element: <AddProjectPage />,
  }	
,
{ 
    path: "/project/:idProject",
    element: <DetailProjectPage />,
  }	

]

export default projectRoutes
