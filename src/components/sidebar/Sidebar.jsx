import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <InventoryIcon className="icon" />
                        <span>Product</span>
                    </li>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className="icon" />
                        <span>Deliveries</span>
                    </li>
                    <hr />
                    <p className="title">INFO</p>
                    <li>
                        <AnalyticsIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <hr />
                    <p className="title">SYSTEM</p>
                    <li>
                        <MonitorHeartIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <TextSnippetIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <hr />
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <PowerSettingsNewIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}
