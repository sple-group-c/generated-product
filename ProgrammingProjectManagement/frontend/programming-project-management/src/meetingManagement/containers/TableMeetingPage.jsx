
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import MeetingTable from "../components/MeetingTable";
import getListMeeting from '../services/getListMeeting'

const TableMeetingPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableMeeting: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Meeting Page")
  }, []);


const [listMeeting, setListMeeting] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMeeting: true}))
				const { data: listMeeting } = await getListMeeting()
				setListMeeting(listMeeting.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMeeting: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/meeting-management/add
			  	`}>
			  		<Button id="_6zGk8EzvEfGSBdf0iay4xQ" className="p-2" variant="primary">
			  		  Add Meeting Management
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Meeting"}
	singularName={"Meeting"}
	items={[listMeeting]}
	isLoading={isLoading.tableMeeting}
>
	<MeetingTable
		listMeeting={listMeeting}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableMeetingPage

