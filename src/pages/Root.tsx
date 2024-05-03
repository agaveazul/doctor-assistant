import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Root() {
  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
}
