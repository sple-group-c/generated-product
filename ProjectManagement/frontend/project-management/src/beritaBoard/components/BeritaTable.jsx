
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const BeritaTable = ({ listBerita,
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (beritaItem) => {
    isMobile() && navigate(`/berita/${beritaItem.beritaid}`);
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listBerita]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "idBerita",
            condition: "",
            label: "Id Berita",
            featureName: "beritaid",
            editable: false
          }
  ,        {
            id: "content",
            condition: "",
            label: "Content",
            featureName: "content",
            editable: false
          }
  ]}
        itemsEvents={(beritaItem) => [
          <Link to={`/berita/${beritaItem.beritaid}`}>
            <Button
              id="_lhDwcEw7EfG1qvAbnuoO6w"
              size="sm"
              variant=
                  "primary"
            >
              Detail Berita
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default BeritaTable;
