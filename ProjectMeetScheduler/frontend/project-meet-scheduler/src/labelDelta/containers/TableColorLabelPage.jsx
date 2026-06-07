
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ListTable from "../components/ListTable";
import getModifiedDataBinding from '../services/getModifiedDataBinding'

const TableColorLabelPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	modifiedList: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Color Label Page")
  }, []);


const [modifiedDataBinding, setModifiedDataBinding] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, modifiedList: true}))
				const { data: modifiedDataBinding } = await getModifiedDataBinding()
				setModifiedDataBinding(modifiedDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, modifiedList: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/labeldelta/tambah`}>
			  		<Button id="_z1L-UF4LEfGlAbCz2XZjWQ" className="p-2" variant="primary">
			  		  Tambah LabelDelta
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Modified List"}
	singularName={"List"}
	items={[modifiedDataBinding]}
	isLoading={isLoading.modifiedList}
>
	<ListTable
		modifiedDataBinding={modifiedDataBinding}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableColorLabelPage

