import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { blue } from "@ant-design/colors";

console.log(blue);

const App = () => (
  <div
    style={{ backgroundColor: blue[7] }}
    className="flex items-center justify-between"
  >
    <p>Helloo</p>
    <Menu
      style={{ backgroundColor: "transparent", color: "white !important" }}
      mode="horizontal"
      defaultSelectedKeys={["mail"]}
    >
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.SubMenu
        key="SubMenu"
        title="Navigation Two - Submenu"
        icon={<SettingOutlined />}
      >
        <Menu.Item key="two" icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="three" icon={<AppstoreOutlined />}>
          Navigation Three
        </Menu.Item>
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Navigation Four
          </Menu.Item>
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Navigation Five
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  </div>
);

export default App;
