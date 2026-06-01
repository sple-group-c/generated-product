const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

const addSubMenu = (label, subMenu, menu = menus) => {
  for (const item of menu) {
    if (item.label === label) {
      item.subMenus.push(subMenu);
      return;
    }
    if (item.subMenus) {
      addSubMenu(label, subMenu, item.subMenus);
    }
  }
};

export const settingsMenu = [
  {
    id: "pengaturan",
    route: "#",
    label: "Pengaturan",
    permission: "administrator",
    subMenus: [
      {
        id: "pengaturan-tampilan",
        route: "/settings/appearance",
        label: "Pengaturan Tampilan",
        permission: "administrator",
      },
      {
        id: "pengaturan-role",
        route: "/settings/role",
        label: "Pengaturan Role",
        permission: "administrator",
      },
      {
        id: "pengaturan-user",
        route: "/settings/user",
        label: "Pengaturan User",
        permission: "administrator",
      },
    ],
  },
];

export default menus;

addMenu({
  id: "taskManagement",
  route: "/taskmanagement",
  label: "Task Management",
  permission: "",
  subMenus: [],
});

addMenu({
  id: "beritaBoard",
  route: "/berita",
  label: "Berita",
  permission: "",
  subMenus: [],
});


addMenu({
  id: "meetingManagement",
  route: "/meeting-management",
  label: "Meeting Management",
  permission: "",
  subMenus: [],
});

addMenu({
  id: "coba",
  route: "/coba",
  label: "Coba",
  permission: "",
  subMenus: [],
});

addMenu({
  id: "subscribeBerita",
  route: "/subscribe",
  label: "Subscribe Berita",
  permission: "",
  subMenus: [],
});
