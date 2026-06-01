
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import BeritaTable from "../components/BeritaTable";
import getListBerita from '../services/getListBerita'

const TableBeritaPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableBerita: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Berita Page")
  }, []);


const [listBerita, setListBerita] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableBerita: true}))
				const { data: listBerita } = await getListBerita()
				setListBerita(listBerita.data)
			} finally {
				setIsLoading(prev => ({...prev, tableBerita: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/berita/tambah
			  	`}>
			  		<Button id="_25GhsEw4EfG1qvAbnuoO6w" className="p-2" variant="primary">
			  		  Tambah Berita
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Berita"}
	singularName={"Berita"}
	items={[listBerita]}
	isLoading={isLoading.tableBerita}
>
	<BeritaTable
		listBerita={listBerita}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableBeritaPage

