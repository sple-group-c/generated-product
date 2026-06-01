import React, { useEffect, useState, useContext } from 'react'
import * as Layouts from '@/commons/layouts';
import { HeaderContext } from "@/commons/components"
import { useParams } from "@/commons/hooks/useParams"
import FormEditReminderForm from '../components/FormEditReminderForm'
import getEditReminderFields from '../services/getEditReminderFields'

const EditReminder = props => {
  const { id_reminder } = useParams()
  const [isLoading, setIsLoading] = useState({ editReminderForm: false })
  const { setTitle } = useContext(HeaderContext)

  useEffect(() => {
    setTitle("Edit Reminder")
  }, [])

  const [editReminderFields, setEditReminderFields] = useState()

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(prev => ({ ...prev, editReminderForm: true }))
      const { data: editReminderFieldsResponse } = await getEditReminderFields({ idReminder: id_reminder })
      setEditReminderFields(editReminderFieldsResponse.data)
      setIsLoading(prev => ({ ...prev, editReminderForm: false }))
    }
    fetch()
  }, [id_reminder])

  return (
	<Layouts.ViewContainerLayout buttons={<></>}>
	  <Layouts.FormContainerLayout singularName={"Reminder"} isLoading={isLoading.editReminderForm}>
		{editReminderFields ? (
		  <FormEditReminderForm reminder={editReminderFields} />
		) : (<></>)}
	  </Layouts.FormContainerLayout>
	</Layouts.ViewContainerLayout>
  )
}

export default EditReminder
