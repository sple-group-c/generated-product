
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "react-router";
import { HeaderContext } from "@/commons/components"

import DetailBerita from '../components/DetailBerita'
import getDetailBerita from '../services/getDetailBerita'

const DetailBeritaPage = props => {
  const { id_berita } = useParams();
  const [isLoading, setIsLoading] = useState({
	detailBerita: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Berita Page")
  }, []);


const [detailBerita, setDetailBerita] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailBerita: true}))
				const { data: detailBerita } = await getDetailBerita({ beritaid: id_berita })
				setDetailBerita(detailBerita.data)
			} finally {
				setIsLoading(prev => ({...prev, detailBerita: false}))
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
<Layouts.DetailContainerLayout
	title={"Detail Berita"}
	singularName={"Berita"}
	items={{...detailBerita}}
	isLoading={isLoading.detailBerita}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailBerita {...{ data : { ...detailBerita }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailBeritaPage

