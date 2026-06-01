
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import EmailReminderTable from "../components/EmailReminderTable";
import getListEmailReminder from '../services/getListEmailReminder'

const TableEmailReminderPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableEmailReminder: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Email Reminder Page")
  }, []);


const [listEmailReminder, setListEmailReminder] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableEmailReminder: true}))
				const { data: listEmailReminder } = await getListEmailReminder()
				setListEmailReminder(listEmailReminder.data)
			} finally {
				setIsLoading(prev => ({...prev, tableEmailReminder: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to="/emailreminder/add">
			  		<Button id="_OT6BcFObEfGrfJrQ5Xvm_B" className="p-2" variant="primary">
			  		  Tambah Email Reminder
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table EmailReminder"}
	singularName={"EmailReminder"}
	items={[listEmailReminder]}
	isLoading={isLoading.tableEmailReminder}
>
	<EmailReminderTable
		listEmailReminder={listEmailReminder}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableEmailReminderPage

