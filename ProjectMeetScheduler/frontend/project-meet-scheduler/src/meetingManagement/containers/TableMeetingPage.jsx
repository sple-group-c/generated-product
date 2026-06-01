import React, { useEffect, useState, useContext } from 'react'
import { Button } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components"
import { useAuth } from '@/commons/auth';
import MeetingTable from "../components/MeetingTable";
import getListMeeting from '../services/getListMeeting'

const TableMeetingPage = () => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({ tableMeeting: false });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Meeting Management")
  }, []);

  const [listMeeting, setListMeeting] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(prev => ({ ...prev, tableMeeting: true }))
        const { data } = await getListMeeting()
        setListMeeting(data.data)
      } finally {
        setIsLoading(prev => ({ ...prev, tableMeeting: false }))
      }
    }
    fetchData()
  }, [])

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerButtonLayout>
            <Link to="/meeting-management/tambah">
              <Button className="p-2" variant="primary">
                Tambah Meeting
              </Button>
            </Link>
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      <Layouts.ListContainerTableLayout
        title="Daftar Meeting"
        singularName="Meeting"
        items={[listMeeting]}
        isLoading={isLoading.tableMeeting}
      >
        <MeetingTable listMeeting={listMeeting} />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  )
}

export default TableMeetingPage
