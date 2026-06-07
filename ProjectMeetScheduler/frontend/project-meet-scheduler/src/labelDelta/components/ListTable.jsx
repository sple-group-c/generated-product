
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const ListTable = ({ 
    modifiedDataBinding}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[modifiedDataBinding]}
  	  itemsAttrs={[
          {
            id: "name",
            condition: "",
            label: "name",
            featureName: "name",
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
            id: "color",
            condition: "isColor",
            label: "color",
            featureName: "color",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default ListTable;
