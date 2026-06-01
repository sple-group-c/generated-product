
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormReminderForm from '../components/FormReminderForm'
import getTaskList from '../services/getTaskList'

const ReminderFormPage = props => {
  const [isLoading, setIsLoading] = useState({
	reminderForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("ReminderFormPage")
  }, []);


const [taskList, setTaskList] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, reminderForm: true}))
      const { data: taskListResponse } = await getTaskList({  })

	  setTaskList(taskListResponse.data)
	  setIsLoading(prev => ({...prev, reminderForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={""}
		isLoading={isLoading.reminderForm}
	>
		{taskList ? 
		(<>
		 <FormReminderForm
			{...{ 
				taskList
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ReminderFormPage

