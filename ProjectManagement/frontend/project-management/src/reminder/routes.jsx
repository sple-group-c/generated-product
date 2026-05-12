
import React from 'react';
import ReminderNotificationPage from './containers/ReminderNotificationPage'
import ReminderFormPage from './containers/ReminderFormPage'

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

]

export default reminderRoutes
