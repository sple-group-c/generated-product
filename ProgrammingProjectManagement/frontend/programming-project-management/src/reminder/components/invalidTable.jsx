
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const invalidTable = ({ 
    reminderList}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[reminderList]}
  	  itemsAttrs={[
          {
            id: "hour",
            condition: "",
            label: "hour",
            featureName: "hour",
            editable: false
          }
            ,        {
            id: "minute",
            condition: "",
            label: "minute",
            featureName: "minute",
            editable: false
          }
  ,        {
            id: "isDisabled",
            condition: "",
            label: "isDisabled",
            featureName: "isDisabled",
            editable: false
          }
  ,        {
            id: "reminderId",
            condition: "",
            label: "Reminder Id",
            featureName: "idReminder",
            editable: false
          }
  ]}
        itemsEvents={(Item) => [
          <Link to={`/reminder/${Item.idReminder}`}>
            <Button id="_VtLUQF2PEfGoIKyHUqClpA" size="sm" variant="primary">
              Edit Reminder
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default invalidTable;
