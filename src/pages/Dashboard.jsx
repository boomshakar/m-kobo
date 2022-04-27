import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import {
	AccoutDetailsContainer,
	AccoutOptContainer,
	AnalyticCardContainer,
	AnalyticCardItem,
	CardInfo,
	CardSubtitle,
	CardTitle,
	DashboardContainer,
	QuickActionsCardContainer,
	QuickActionsCardDiv,
	QuickActionsCardItem,
	QuickActionsContainer,
	UpgradeAccount,
	UpgradeAccountSubContent,
} from "../components/styled/DashBoard,style";
import Colour from "../utils/Color";
import {
	eyeClosed,
	eyeClosed2,
	mkoboSlant,
	progressLoading,
	sendMoney,
	fundAccount,
	buyAirtime,
	payBills2,
	saveMoney,
	cashBack,
	arrowRight,
} from "../utils/importIcons";

const AnalyticCustomCard = ({ title, bg, secondary }) => (
	<AnalyticCardItem bg={bg}>
		<CardTitle secondary={secondary}>
			<span className="card__title-text">{title}</span>
			{secondary ? (
				<div>
					<span>75% Achieved</span>
					<img src={progressLoading} alt="" />
				</div>
			) : (
				<span className="card__title-tier">Tier 1</span>
			)}
		</CardTitle>
		<CardInfo secondary={secondary}>
			<sup>₦</sup>
			<span>6,390.68</span>
			<img src={secondary ? eyeClosed2 : eyeClosed} alt="" />
		</CardInfo>
		{secondary && (
			<CardSubtitle>
				<span>Interest as at today: </span>
				<span> : ₦20,000</span>
			</CardSubtitle>
		)}

		<img src={mkoboSlant} alt="" />
	</AnalyticCardItem>
);

const Dashboard = () => {
	return (
		<DashboardContainer>
			<span>Hello Bennedict,</span>
			<AnalyticCardContainer>
				<Swiper
					slidesPerView={3}
					spaceBetween={0}
					pagination={{
						clickable: true,
					}}
					// autoplay={{
					// 	delay: 4500,
					// 	disableOnInteraction: false,
					// }}
					speed={200}
					navigation={true}
					modules={[Navigation, Autoplay]}
					className="mySwiper"
				>
					<SwiperSlide>
						<AnalyticCustomCard title="Available Balance" bg={Colour.deepBlue} />
					</SwiperSlide>
					<SwiperSlide>
						<AnalyticCustomCard secondary title="Car Purchase Plan" bg={Colour.bgGrey} />
					</SwiperSlide>
					<SwiperSlide>
						<AnalyticCustomCard secondary title="Birthday Plan" bg={Colour.bgPink} />
					</SwiperSlide>
					<SwiperSlide>
						<AnalyticCustomCard title="Available Balance" bg={Colour.deepBlue} />
					</SwiperSlide>
				</Swiper>
				{/* <AnalyticCardItem bg={Colour.deepBlue}></AnalyticCardItem> */}
			</AnalyticCardContainer>
			<AccoutOptContainer>
				<AccoutDetailsContainer>Details</AccoutDetailsContainer>
				<QuickActionsContainer>
					<h6>Quick Actions</h6>
					<QuickActionsCardContainer>
						<QuickActionsCardItem>
							<QuickActionsCardDiv>
								<img src={sendMoney} alt="" />
								<span>Send Money</span>
							</QuickActionsCardDiv>
						</QuickActionsCardItem>
						<QuickActionsCardItem>
							<QuickActionsCardDiv>
								<img src={fundAccount} alt="" />
								<span>Fund Account</span>
							</QuickActionsCardDiv>
						</QuickActionsCardItem>
						<QuickActionsCardItem>
							<QuickActionsCardDiv>
								<img src={buyAirtime} alt="" />
								<span>Buy Airtime</span>
							</QuickActionsCardDiv>
						</QuickActionsCardItem>
						<QuickActionsCardItem>
							<QuickActionsCardDiv>
								<img src={payBills2} alt="" />
								<span>Pay Bills</span>
							</QuickActionsCardDiv>
						</QuickActionsCardItem>
						<QuickActionsCardItem>
							<QuickActionsCardDiv>
								<img src={saveMoney} alt="" />
								<span>Save Money</span>
							</QuickActionsCardDiv>
						</QuickActionsCardItem>
						<QuickActionsCardItem>
							<QuickActionsCardDiv>
								<img src={cashBack} alt="" />
								<span>Cashback</span>
							</QuickActionsCardDiv>
						</QuickActionsCardItem>
					</QuickActionsCardContainer>
					<UpgradeAccount>
						<span>Upgrade your account</span>
						<UpgradeAccountSubContent>
							<span>Upgrade your account to increase your account limits.</span>
							<img src={arrowRight} alt="" />
						</UpgradeAccountSubContent>
					</UpgradeAccount>
				</QuickActionsContainer>
			</AccoutOptContainer>
		</DashboardContainer>
	);
};

export default Dashboard;
