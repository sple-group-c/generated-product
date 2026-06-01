import React from 'react';
import TableMeetingPage from './containers/TableMeetingPage'
import AddMeetingPage from './containers/AddMeetingPage'

const meetingManagementRoutes = [
  {
    path: "/meeting-management",
    element: <TableMeetingPage />,
  },
  {
    path: "/meeting-management/tambah",
    element: <AddMeetingPage />,
  },
]

export default meetingManagementRoutes
