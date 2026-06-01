import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import projectRoutes from "@/project/routes";
import labelRoutes from "@/label/routes";
import meetingManagementRoutes from "@/meetingManagement/routes";
import taskManagementRoutes from "@/taskManagement/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
    ...commonRoutes,
    ...staticPageRoutes,
    ...userRoutes,
    ...roleRoutes,
    ...homeRoutes,
    ...projectRoutes,
    ...labelRoutes,
    ...meetingManagementRoutes,
    ...taskManagementRoutes,
  ])
  return router
}

const MobileRoutes = () => {
  const router = useRoutes([
    ...commonMobileRoutes,
  ])
  return router
}

export { GlobalRoutes, MobileRoutes }
