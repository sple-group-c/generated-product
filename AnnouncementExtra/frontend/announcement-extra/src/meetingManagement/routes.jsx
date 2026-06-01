
import React from 'react';
import TableMeetingPage from './containers/TableMeetingPage'
import ViewContainer from './containers/ViewContainer'

const meetingManagementRoutes = [
{ 
    path: "/meeting-management",
    element: <TableMeetingPage />,
  }	
,
{ 
    path: "/meeting-management/add",
    element: <ViewContainer />,
  }	

]

export default meetingManagementRoutes
