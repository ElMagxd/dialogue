import styled from 'styled-components';

const UserInfoWrapper = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;

const UserName = styled.div`
	text-align: center;
`;

const UserStatus = styled.div`
	text-align: center;

	.circle {
		border-radius: 50%;
		width: 7px;
		height: 7px;
		background: var(--primary);
		margin-right: 5px;
	}
`;

const UserInfo = () => (
	<UserInfoWrapper className="user-info">
		<UserName>Admin</UserName>
		<UserStatus>
			<span className="circle" />
			Online
		</UserStatus>
	</UserInfoWrapper>
);

export default UserInfo;
