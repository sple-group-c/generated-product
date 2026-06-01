
import React from 'react';
import TaskList from './containers/TaskList'
import AddTask from './containers/AddTask'

const taskManagementRoutes = [
{ 
    path: "/taskmanagement",
    element: <TaskList />,
  }	
,
{ 
    path: "/task/tambah",
    element: <AddTask />,
  }	

]

export default taskManagementRoutes
