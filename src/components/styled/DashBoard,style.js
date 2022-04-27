import styled from "styled-components";
import Colour from "../../utils/Color";

export const DashboardContainer = styled.section`
	padding: 1.3rem 0 1.3rem 1.3rem;

	& > span {
		font-weight: 700;
		font-size: 22px;
		line-height: 36px;
	}
`;

export const AnalyticCardContainer = styled.section`
	padding: 1.3rem 0;
	border-bottom: 1px solid ${Colour.deepBlue};
	.swiper {
		width: 100%;
		height: 100%;
		background: transperent;
		overflow: hidden;
	}
`;

export const AnalyticCardItem = styled.div`
	position: relative;
	width: 325px;
	height: 140px;
	border-radius: 4px;
	background-color: ${({ bg }) => bg};
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

	& > img {
		position: absolute;
		top: 7px;
		right: 0;
	}
`;

export const CardTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.3rem 0.8rem;

	& > .card__title-text {
		color: ${({ secondary }) => (secondary ? Colour.writeGrey2 : "rgba(255, 255, 255, 0.5)")};
		display: block;
		font-weight: 400;
		font-size: 12px;
		line-height: 24px;
	}
	& > .card__title-tier {
		background-color: ${Colour.textWhite};
		border-radius: 4px;
		color: ${Colour.deepBlue};
		padding: 0.1rem 0.5rem;
	}
	& > div {
		display: flex;
		align-items: center;

		span {
			font-weight: 400;
			font-size: 12px;
			line-height: 19px;
		}
	}
`;
export const CardInfo = styled.div`
	display: flex;
	align-items: center;
	color: ${({ secondary }) => (secondary ? Colour.textBlack : Colour.textWhite)};
	padding: 0.1rem 0.5rem;

	span {
		font-weight: 700;
		font-size: 36px;
		line-height: 59px;
		margin-right: 0.7rem;
	}
`;
export const CardSubtitle = styled.div`
	padding: 0.1rem 0.5rem;
	span {
		font-weight: 600;
		font-size: 12px;
		line-height: 24px;
		color: ${Colour.writeGrey2};
	}
`;
export const AccoutOptContainer = styled.section`
	display: flex;
	padding: 1rem 0;
`;

export const AccoutDetailsContainer = styled.section`
	width: 67%;
`;

export const QuickActionsContainer = styled.section`
	width: 33%;
	border-left: 1px solid ${Colour.deepBlue};
	h6 {
		color: ${Colour.writeGrey3};
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		margin-left: 1rem;
	}
`;

export const QuickActionsCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const QuickActionsCardItem = styled.div`
	max-width: 155px;
	width: 100%;
	height: 94px;
	border-radius: 4px;
	background-color: ${Colour.primaryBg};
	margin: 0.5rem auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const QuickActionsCardDiv = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;

	img {
		width: 100%;
		max-width: 20px;
		margin: 0 auto;
	}

	span {
		font-weight: 700;
		font-size: 14px;
		line-height: 23px;
	}
`;

export const UpgradeAccount = styled.div`
	background: ${Colour.deepBlue};
	width: 342px;
	height: 85px;
	box-shadow: 0px 4px 16px rgba(32, 32, 35, 0.1);
	border-radius: 4px;
	padding: 0.4rem 1rem;
	margin: 1rem;
	& > span {
		font-weight: 700;
		font-size: 14px;
		line-height: 23px;
		color: ${Colour.textWhite};
	}
`;
export const UpgradeAccountSubContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	span {
		color: ${Colour.fadeSkyBlue};
		width: 90%;
	}
`;
