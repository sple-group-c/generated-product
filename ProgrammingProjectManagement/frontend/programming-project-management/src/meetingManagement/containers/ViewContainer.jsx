
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormTambahMeeting from '../components/FormTambahMeeting'

const ViewContainer = props => {
  const [isLoading, setIsLoading] = useState({
	tambahMeeting: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("ViewContainer")
  }, []);

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Meeting"}
		
	>
		<FormTambahMeeting
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ViewContainer

