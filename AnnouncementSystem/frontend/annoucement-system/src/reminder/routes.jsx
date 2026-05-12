
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
    path: "/reminer/tambah",
    element: <ReminderFormPage />,
  }	

]

export default reminderRoutes
