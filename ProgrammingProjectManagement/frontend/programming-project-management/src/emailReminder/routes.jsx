import React from 'react';
import TableEmailReminderPage from './containers/TableEmailReminderPage'
import AddEmailReminderPage from './containers/AddEmailReminderPage'
import EmailReminderEditPage from './containers/EmailReminderEditPage'

const emailReminderRoutes = [
{
    path: "/emailreminder",
    element: <TableEmailReminderPage />,
  }
,
{
    path: "/emailreminder/add",
    element: <AddEmailReminderPage />,
  }
,
{
    path: "/emailreminder/:id_reminder",
    element: <EmailReminderEditPage />,
  }

]

export default emailReminderRoutes
