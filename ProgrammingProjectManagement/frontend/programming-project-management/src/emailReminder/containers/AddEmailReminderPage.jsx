
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEmailReminderForm from '../components/ModifiedFormEmailReminderForm'
import getTaskList from '../services/getTaskList'

const AddEmailReminderPage = props => {
  const [isLoading, setIsLoading] = useState({
	emailReminderForm: false,
  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Email Reminder Page")
  }, []);

  const [taskList, setTaskList] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(prev => ({...prev, emailReminderForm: true}))
        const response = await getTaskList({})
        if (response && response.data) {
          setTaskList(response.data.data || [])
        } else {
          setTaskList([])
        }
      } catch (err) {
        console.error(err)
        setTaskList([])
      } finally {
        setIsLoading(prev => ({...prev, emailReminderForm: false}))
      }
    }
    fetch()
  }, [])

  const noTasks = taskList !== null && taskList.length === 0

  return (
    <Layouts.ViewContainerLayout
      buttons={<></>}
    >
      <Layouts.FormContainerLayout
        singularName={"Reminder"}
        isLoading={isLoading.emailReminderForm}
      >
        {noTasks ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ marginBottom: '1rem', color: '#666' }}>
              Belum ada task yang tersedia. Silakan buat task terlebih dahulu sebelum membuat Email Reminder.
            </p>
            <Link to="/task/tambah">
              <Button variant="primary">Buat Task Baru</Button>
            </Link>
          </div>
        ) : taskList && taskList.length > 0 ? (
          <ModifiedFormEmailReminderForm taskList={taskList} />
        ) : null}
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  )
}
export default AddEmailReminderPage

