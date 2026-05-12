
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const ProjectTable = ({ listProject,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listProject]}
  	  itemsAttrs={[
          {
            id: "idProject",
            condition: "",
            label: "Id Project",
            featureName: "idProject",
            editable: false
          }
  ,        {
            id: "projectName",
            condition: "",
            label: "Project Name",
            featureName: "name",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default ProjectTable;
