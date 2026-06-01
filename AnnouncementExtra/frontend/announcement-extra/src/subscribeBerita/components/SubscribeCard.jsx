
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const SubscribeCard = ({ listSubscribe }) => {
  const { checkPermission } = useAuth();

  return (
  <>
    <Layouts.ListComponentTableLayout
      items={[listSubscribe]}
      itemsAttrs={[
          {
            id: "content",
            condition: "",
            label: "Content",
            featureName: "content",
            editable: false
          }
  ,        {
            id: "subscription",
            condition: "",
            label: "Subscription",
            featureName: "subscription",
            editable: false
          }
  ]}
    />
  </>
  )
};

export default SubscribeCard;
