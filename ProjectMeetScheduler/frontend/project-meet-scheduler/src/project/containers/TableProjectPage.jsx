
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ProjectTable from "../components/ProjectTable";
import getListProject from '../services/getListProject'

const TableProjectPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableProject: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Project Page")
  }, []);


const [listProject, setListProject] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableProject: true}))
				const { data: listProject } = await getListProject()
				setListProject(listProject.data)
			} finally {
				setIsLoading(prev => ({...prev, tableProject: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/project/tambah
			  	`}>
			  		<Button id="_emrJsF19EfGZyZcHNmogjQ" className="p-2" variant="primary">
			  		  Add Project
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Project"}
	singularName={"Project"}
	items={[listProject]}
	isLoading={isLoading.tableProject}
>
	<ProjectTable
		listProject={listProject}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableProjectPage

