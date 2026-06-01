
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import Table from "../components/invalidTable";
import getListLabel from '../services/getListLabel'

const TableLabelPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableLabel: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Label Page")
  }, []);


const [listLabel, setListLabel] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableLabel: true}))
				const { data: listLabel } = await getListLabel()
				setListLabel(listLabel.data)
			} finally {
				setIsLoading(prev => ({...prev, tableLabel: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`invalid
			  	`}>
			  		<Button id="_Olce4EiOEfGg0fy8ktMBQg" className="p-2" variant="primary">
			  		  ViewElement Event
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"TableLabel"}
	singularName={""}
	items={[listLabel]}
	isLoading={isLoading.tableLabel}
>
	<invalidTable
		listLabel={listLabel}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableLabelPage

