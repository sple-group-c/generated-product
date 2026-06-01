import React, { useEffect, useState, useContext } from 'react'
import * as Layouts from '@/commons/layouts';
import { HeaderContext } from "@/commons/components"
import { useParams } from "@/commons/hooks/useParams"
import ModifiedFormEmailReminderEditForm from '../components/ModifiedFormEmailReminderEditForm'
import getEmailEditFields from '../services/getEmailEditFields'

const EmailReminderEditPage = props => {
  const { id_reminder } = useParams()
  const [isLoading, setIsLoading] = useState({ emailReminderEditForm: false })
  const { setTitle } = useContext(HeaderContext)

  useEffect(() => {
    setTitle("Email Reminder Edit Page")
  }, [])

  const [emailEditFields, setEmailEditFields] = useState()

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(prev => ({ ...prev, emailReminderEditForm: true }))
      const { data: emailEditFieldsResponse } = await getEmailEditFields({ idReminder: id_reminder })
      setEmailEditFields(emailEditFieldsResponse.data)
      setIsLoading(prev => ({ ...prev, emailReminderEditForm: false }))
    }
    fetch()
  }, [id_reminder])

  return (
	<Layouts.ViewContainerLayout buttons={<></>}>
	  <Layouts.FormContainerLayout singularName={"Reminder"} isLoading={isLoading.emailReminderEditForm}>
		{emailEditFields ? (
		  <ModifiedFormEmailReminderEditForm emailEditFields={emailEditFields} />
		) : (<></>)}
	  </Layouts.FormContainerLayout>
	</Layouts.ViewContainerLayout>
  )
}

export default EmailReminderEditPage
