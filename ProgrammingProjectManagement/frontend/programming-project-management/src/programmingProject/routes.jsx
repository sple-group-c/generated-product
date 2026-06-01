
import React from 'react';
import TableProgrammingProjectPage from './containers/TableProgrammingProjectPage'
import AddProgrammingProjectPage from './containers/AddProgrammingProjectPage'
import DetailProgrammingProjectPage from './containers/DetailProgrammingProjectPage'

const programmingProjectRoutes = [
{ 
    path: "/programmingproject",
    element: <TableProgrammingProjectPage />,
  }	
,
{ 
    path: "/programmingproject/tambah",
    element: <AddProgrammingProjectPage />,
  }	
,
{ 
    path: "/programmingproject/:idProject",
    element: <DetailProgrammingProjectPage />,
  }	

]

export default programmingProjectRoutes
