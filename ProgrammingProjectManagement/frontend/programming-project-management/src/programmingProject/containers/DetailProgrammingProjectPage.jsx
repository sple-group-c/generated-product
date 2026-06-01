
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailProgrammingProject from '../components/DetailProgrammingProject'
import getDetailProgrammingProject from '../services/getDetailProgrammingProject'

const DetailProgrammingProjectPage = props => {
  const { idProject } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailProgrammingProject: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail ProgrammingProject Page")
  }, []);


const [detailProgrammingProject, setDetailProgrammingProject] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailProgrammingProject: true}))
				const { data: detailProgrammingProject } = await getDetailProgrammingProject({ idProject })
				setDetailProgrammingProject(detailProgrammingProject.data)
			} finally {
				setIsLoading(prev => ({...prev, detailProgrammingProject: false}))
			}
		}
		fetchData()
	}, [idProject])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail ProgrammingProject"}
	singularName={"ProgrammingProject"}
	items={{...detailProgrammingProject}}
	isLoading={isLoading.detailProgrammingProject}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailProgrammingProject {...{ data : { ...detailProgrammingProject }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailProgrammingProjectPage

