import React from 'react';
import { Link, useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";

const MeetingTable = ({ listMeeting }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (item) => {
    isMobile() && navigate(`/meeting-management/${item.idMeeting}`);
  };

  return (
    <>
      <Layouts.ListComponentTableLayout
        items={[listMeeting]}
        detail={detail}
        itemsAttrs={[
          { id: "idMeeting", condition: "", label: "Id Meeting", featureName: "idMeeting", editable: false },
          { id: "name", condition: "", label: "Nama Meeting", featureName: "name", editable: false },
          { id: "startDate", condition: "", label: "Start Date", featureName: "startDate", editable: false },
          { id: "endDate", condition: "", label: "End Date", featureName: "endDate", editable: false },
          { id: "location", condition: "", label: "Lokasi", featureName: "location", editable: false },
          { id: "project.name", condition: "", label: "Project", featureName: "project.name", editable: false },
        ]}
        itemsEvents={(item) => [
          <Link to={`/meeting-management/${item.idMeeting}`}>
            <Button size="sm" variant="primary">Detail</Button>
          </Link>
        ]}
      />
    </>
  )
};

export default MeetingTable;
