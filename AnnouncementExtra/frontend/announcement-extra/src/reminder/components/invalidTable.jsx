
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const invalidTable = ({ reminderList,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[reminderList]}
  	  itemsAttrs={[
          {
            id: "timeTrigger",
            condition: "",
            label: "timeTrigger",
            featureName: "timeTrigger",
            editable: false
          }
  ,        {
            id: "isDisabled",
            condition: "",
            label: "isDisabled",
            featureName: "isDisabled",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default invalidTable;
