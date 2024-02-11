import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { SidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const role = "admin";
  let sidebartItems;

  switch (role) {
    case userRole.ADMIN:
      sidebartItems = SidebarItemsGenerator(adminPaths, userRole.ADMIN);

      break;
    case userRole.FACULTY:
      sidebartItems = SidebarItemsGenerator(adminPaths, userRole.FACULTY);

      break;
    case userRole.STUDENT:
      sidebartItems = SidebarItemsGenerator(adminPaths, userRole.STUDENT);

      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        style={{ color: "white" }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebartItems}
      />
    </Sider>
  );
};

export default Sidebar;
