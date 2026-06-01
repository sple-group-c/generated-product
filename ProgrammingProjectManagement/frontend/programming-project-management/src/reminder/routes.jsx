
import React from 'react';
import ReminderNotificationPage from './containers/ReminderNotificationPage'
import ReminderFormPage from './containers/ReminderFormPage'
import EditReminder from './containers/EditReminder'

const reminderRoutes = [
{
    path: "/reminder",
    element: <ReminderNotificationPage />,
  }
,
{
    path: "/reminder/tambah",
    element: <ReminderFormPage />,
  }
,
{
    path: "/reminder/:id_reminder",
    element: <EditReminder />,
  }

]

export default reminderRoutes
