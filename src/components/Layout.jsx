import { Link } from "react-router-dom";
import {
	LayoutContainer,
	MainContentChlidren,
	MainContentContainer,
	MainContentHeader,
	MainContentHeaderContain,
	MkoboLogo,
	MkoboLogoContain,
	ProfileDropdown,
	SideBarContainer,
	SideBarContent,
	SideBarNavItem,
	SideBarNavLink,
	SideBarNavLogo,
	SideBarSupport,
} from "./styled/Layout.styled";
import { routes } from "../utils/routes";
import {
	mkoboLogo,
	homelink,
	chat,
	faq,
	profile,
	earlyPay,
	debitCard,
	settings,
	mkolo,
	payBills,
	profilePicture,
	notifyBell,
	arrowDown,
} from "../utils/importIcons";

const SideBarNavigation = ({ to = {}, isActive, src, title = "", contactSupport }) => (
	<Link to={to}>
		<SideBarNavItem contactSupport={contactSupport} isActive={isActive} title={title}>
			<img src={src} alt={title} />
			<span>{title}</span>
		</SideBarNavItem>
	</Link>
);

const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<SideBarContainer>
				<MkoboLogoContain>
					<MkoboLogo src={mkoboLogo} />
				</MkoboLogoContain>
				<SideBarContent>
					<SideBarNavLink>
						<SideBarNavigation isActive src={homelink} to={routes.dashboard} title="Dashboard" />
						<SideBarNavigation src={mkolo} to={routes.dashboard} title="Mkolo" />
						<SideBarNavigation src={earlyPay} to={routes.dashboard} title="EarlyPay" />
						<SideBarNavigation src={payBills} to={routes.dashboard} title="Pay Bills" />
						<SideBarNavigation src={debitCard} to={routes.dashboard} title="Debit Cards" />
						<SideBarNavigation src={profile} to={routes.dashboard} title="Profile" />
						<SideBarNavigation src={settings} to={routes.dashboard} title="Settings" />
					</SideBarNavLink>
					<SideBarSupport>
						<span>Help & Support</span>
						<SideBarNavigation contactSupport src={faq} to={routes.dashboard} title="FAQ's" />
						<SideBarNavigation contactSupport src={chat} to={routes.dashboard} title="Talk to someone" />
					</SideBarSupport>
				</SideBarContent>
			</SideBarContainer>
			<MainContentContainer>
				<MainContentHeaderContain>
					<MainContentHeader>My Dashboard</MainContentHeader>
					<ProfileDropdown>
						<img src={notifyBell} alt="" />
						<img className="profile-picture" src={profilePicture} alt="" />
						<span>Benedict Ulinfo</span>
						<img src={arrowDown} alt="" />
					</ProfileDropdown>
				</MainContentHeaderContain>
				<MainContentChlidren>{children}</MainContentChlidren>
			</MainContentContainer>
		</LayoutContainer>
	);
};

export default Layout;
