
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailProject from '../components/DetailProject'
import getDetailProject from '../services/getDetailProject'

const DetailProjectPage = props => {
  const { idProject } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailProject: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Project Page")
  }, []);


const [detailProject, setDetailProject] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailProject: true}))
				const { data: detailProject } = await getDetailProject({ idProject })
				setDetailProject(detailProject.data)
			} finally {
				setIsLoading(prev => ({...prev, detailProject: false}))
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
	title={"Detail Project"}
	singularName={"Project"}
	items={{...detailProject}}
	isLoading={isLoading.detailProject}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailProject {...{ data : { ...detailProject }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailProjectPage

