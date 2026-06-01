
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import TaskmanagementTable from "../components/TaskmanagementTable";
import getListTaskmanagement from '../services/getListTaskmanagement'

const TaskList = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableTaskmanagement: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("TaskList")
  }, []);


const [listTaskmanagement, setListTaskmanagement] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableTaskmanagement: true}))
				const { data: listTaskmanagement } = await getListTaskmanagement()
				setListTaskmanagement(listTaskmanagement.data)
			} finally {
				setIsLoading(prev => ({...prev, tableTaskmanagement: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/task/tambah
			  	`}>
			  		<Button id="_7Rtt0EBdEfG_EbYrkoLnzw" className="p-2" variant="primary">
			  		  save
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Taskmanagement"}
	singularName={"Taskmanagement"}
	items={[listTaskmanagement]}
	isLoading={isLoading.tableTaskmanagement}
>
	<TaskmanagementTable
		listTaskmanagement={listTaskmanagement}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TaskList

