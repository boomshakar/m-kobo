import styled from "styled-components";
import Colour from "../../utils/Color";

export const LayoutContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 1.3rem;
	padding-right: 0;
`;
export const SideBarContainer = styled.div`
	width: 20%;
	max-width: 170px;
	display: flex;
	flex-direction: column;
`;
export const MkoboLogoContain = styled.header`
	width: 100px;
	height: 70px;
`;
export const MkoboLogo = styled.img`
	height: 100%;
`;
export const SideBarContent = styled.div`
	margin: 2rem 0;
`;
export const SideBarNavLink = styled.div``;
export const SideBarNavItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: ${({ contactSupport }) => (contactSupport ? "0px" : "15px")};
	padding: 0.3rem;
	border-radius: 8px 0 0 8px;
	background-color: ${(props) => (props.isActive ? Colour.textWhite : "transperent")};

	img {
		width: ${({ contactSupport }) => (contactSupport ? "18x" : "20px")};
	}

	span {
		line-height: 24px;
		font-size: ${({ contactSupport }) => (contactSupport ? "12px" : "14px")};
		font-weight: ${({ contactSupport }) => (contactSupport ? 700 : 500)};
		margin-left: 15px;
		color: ${({ isActive, contactSupport }) => (contactSupport || isActive ? Colour.deepBlue : Colour.writeGrey)};
	}
`;
export const SideBarSupport = styled.div`
	display: flex;
	flex-direction: column;

	& > span {
		font-weight: 700;
	}
`;
export const MainContentContainer = styled.div`
	width: calc(100% - 170px);
	max-width: 100%;
`;
export const MainContentHeaderContain = styled.header`
	width: 100%;
	height: 70px;
	padding: 1rem 1.5rem;
	display: flex;
	align-items: center;
`;
export const MainContentHeader = styled.div`
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 16px;
`;
export const ProfileDropdown = styled.div`
	width: max-content;
	padding: 0.5rem;
	border-radius: 5px;
	color: ${Colour.textWhite};
	background-color: ${Colour.deepBlue};
	display: flex;
	align-items: center;

	.profile-picture {
		margin: 0 1rem;
	}
	span {
		white-space: nowrap;
		margin-right: 0.5rem;
	}
`;
export const MainContentChlidren = styled.main`
	height: calc(100% - 70px);
	width: 100%;
	border-radius: 10px;
	background-color: ${Colour.textWhite};
`;
