
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import Table from "../components/invalidTable";
import getReminderList from '../services/getReminderList'

const ReminderNotificationPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	reminderNotificationTable: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("ReminderNotificationPage")
  }, []);


const [reminderList, setReminderList] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, reminderNotificationTable: true}))
				const { data: reminderList } = await getReminderList()
				setReminderList(reminderList.data)
			} finally {
				setIsLoading(prev => ({...prev, reminderNotificationTable: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/reminer/tambah
			  	`}>
			  		<Button id="_dEwZYEiUEfGoJul5bIxc2g" className="p-2" variant="primary">
			  		  Tambah Reminder
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"ReminderNotificationTable"}
	singularName={""}
	items={[reminderList]}
	isLoading={isLoading.reminderNotificationTable}
>
	<invalidTable
		reminderList={reminderList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ReminderNotificationPage

