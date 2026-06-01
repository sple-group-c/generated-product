
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const DetailProgrammingProject = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "description",
                  condition: "",
                  label: "description",
                  featureName: "description",
                }
        ,        {
                  id: "name",
                  condition: "",
                  label: "name",
                  featureName: "name",
                }
        ,        {
                  id: "onlineRepository",
                  condition: "",
                  label: "onlineRepository",
                  featureName: "onlineRepository",
                }
        ,        {
                  id: "defaultBranch",
                  condition: "",
                  label: "defaultBranch",
                  featureName: "defaultBranch",
                }
        ,        {
                  id: "repositoryLink",
                  condition: "",
                  label: "repositoryLink",
                  featureName: "repositoryLink",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailProgrammingProject;
