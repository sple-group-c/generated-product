
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const MeetingTable = ({ listMeeting,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listMeeting]}
  	  itemsAttrs={[
          {
            id: "idMeeting",
            condition: "",
            label: "Id Meeting",
            featureName: "idMeeting",
            editable: false
          }
  ,        {
            id: "name",
            condition: "",
            label: "Name",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "startDate",
            condition: "",
            label: "Start Date",
            featureName: "startDate",
            editable: false
          }
  ,        {
            id: "endDate",
            condition: "",
            label: "End Date",
            featureName: "endDate",
            editable: false
          }
  ,        {
            id: "location",
            condition: "",
            label: "Location",
            featureName: "location",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default MeetingTable;
