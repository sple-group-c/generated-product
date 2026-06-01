
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CobaTable from "../components/CobaTable";
import getListCoba from '../services/getListCoba'

const TableCobaPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCoba: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Coba Page")
  }, []);


const [listCoba, setListCoba] = useState()

useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCoba: true}))
				const { data: listCoba } = await getListCoba()
				setListCoba(listCoba.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCoba: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Coba"}
	singularName={"Coba"}
	items={[listCoba]}
	isLoading={isLoading.tableCoba}
>
	<CobaTable
		listCoba={listCoba}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableCobaPage

