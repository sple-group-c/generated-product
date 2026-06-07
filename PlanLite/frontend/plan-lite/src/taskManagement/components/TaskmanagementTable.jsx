
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const TaskmanagementTable = ({ listTaskmanagement,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listTaskmanagement]}
  	  itemsAttrs={[
          {
            id: "title",
            condition: "",
            label: "title",
            featureName: "title",
            editable: false
          }
  ,        {
            id: "description",
            condition: "",
            label: "description",
            featureName: "description",
            editable: false
          }
  ,        {
            id: "status",
            condition: "",
            label: "status",
            featureName: "status",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default TaskmanagementTable;
