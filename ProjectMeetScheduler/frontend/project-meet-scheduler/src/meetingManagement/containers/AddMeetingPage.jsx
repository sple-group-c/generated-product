import React, { useEffect, useContext } from 'react'
import * as Layouts from '@/commons/layouts';
import { HeaderContext } from "@/commons/components"
import FormTambahMeeting from '../components/FormTambahMeeting'

const AddMeetingPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Tambah Meeting")
  }, []);

  return (
    <Layouts.ViewContainerLayout buttons={<></>}>
      <Layouts.FormContainerLayout singularName="Meeting">
        <FormTambahMeeting />
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  )
}

export default AddMeetingPage
