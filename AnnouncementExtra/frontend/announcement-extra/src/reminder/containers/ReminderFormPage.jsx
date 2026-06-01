
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormReminderForm from '../components/FormReminderForm'

const ReminderFormPage = props => {
  const [isLoading, setIsLoading] = useState({
	reminderForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("ReminderFormPage")
  }, []);

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
		
	>
		<FormReminderForm
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ReminderFormPage

