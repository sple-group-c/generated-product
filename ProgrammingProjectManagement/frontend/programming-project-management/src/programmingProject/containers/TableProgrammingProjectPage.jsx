
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ProgrammingProjectTable from "../components/ProgrammingProjectTable";
import getListProgrammingProject from '../services/getListProgrammingProject'

const TableProgrammingProjectPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableProgrammingProject: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table ProgrammingProject Page")
  }, []);


const [listProgrammingProject, setListProgrammingProject] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableProgrammingProject: true}))
				const { data: listProgrammingProject } = await getListProgrammingProject()
				setListProgrammingProject(listProgrammingProject.data)
			} finally {
				setIsLoading(prev => ({...prev, tableProgrammingProject: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/programmingproject/tambah
			  	`}>
			  		<Button id="_lL3UAF2IEfGZyZcHNmogjQ" className="p-2" variant="primary">
			  		  Add ProgrammingProject
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table ProgrammingProject"}
	singularName={"ProgrammingProject"}
	items={[listProgrammingProject]}
	isLoading={isLoading.tableProgrammingProject}
>
	<ProgrammingProjectTable
		listProgrammingProject={listProgrammingProject}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableProgrammingProjectPage

