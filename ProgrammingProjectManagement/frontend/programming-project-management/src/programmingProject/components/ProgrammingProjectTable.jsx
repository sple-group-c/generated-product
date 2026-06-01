
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const ProgrammingProjectTable = ({ 
    listProgrammingProject}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (programmingProjectItem) => {
    isMobile() && navigate(`/programmingproject/${programmingProjectItem.idProject}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listProgrammingProject]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "idProject",
            condition: "",
            label: "idProject",
            featureName: "idProject",
            editable: false
          }
  ,        {
            id: "name",
            condition: "",
            label: "name",
            featureName: "name",
            editable: false
          }
  ]}
        itemsEvents={(programmingProjectItem) => [
          <Link to={`/programmingproject/${programmingProjectItem.idProject}`}>
            <Button
              id="_paw5MF2PEfGZyZcHNmogjQ"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default ProgrammingProjectTable;
