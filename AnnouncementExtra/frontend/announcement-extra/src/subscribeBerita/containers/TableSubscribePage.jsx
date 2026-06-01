
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import SubscribeCard from "../components/SubscribeCard";
import getListSubscribe from '../services/getListSubscribe'

const TableSubscribePage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	listSubscribe: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Subscribe Page")
  }, []);


const [listSubscribe, setListSubscribe] = useState()

useEffect(() => {

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listSubscribe: true}))
				const { data: listSubscribe } = await getListSubscribe()
				const mapped = (listSubscribe.data || []).map(item => ({
					...item,
					subscription: String(item.subscription)
				}))
				setListSubscribe(mapped)
			} finally {
				setIsLoading(prev => ({...prev, listSubscribe: false}))
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
	title={"Subscribe Berita"}
	singularName={"Subscribe"}
	items={[listSubscribe]}
	isLoading={isLoading.listSubscribe}
>
	<SubscribeCard
		listSubscribe={listSubscribe}

	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableSubscribePage
