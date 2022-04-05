import styled from "styled-components";

export const StyledItem = styled.div`
	display: flex;
	margin: 10px 0;
	${({ isReverse }) => (isReverse && 'flex-direction: row-reverse')};

	.avatar {
		flex-shrink: 0;
		height: 35px;
		width: 35px;
		border-radius: 50%;
		object-fit: cover;
		margin-top: auto;
		margin-right: 10px;

		${({ isReverse }) => (isReverse && `
			margin-right: 0;
			margin-left: 10px;
		`)};
	}

	.list {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.list-item {
		display: flex;
		align-items: center;
		margin-top: 5px;
		${({ isReverse }) => (isReverse && 'flex-direction: row-reverse')};

		&:hover, &:last-child {
			.time {
				opacity: 1;
				visibility: visible;
			}
		}

		.text {
			max-width: 400px;
			padding: 5px 8px;
			border-radius: 5px;
			word-break: break-word;
			background: var(--accent-1);

			${({ isReverse }) => (isReverse && `
				color: var(--primary-color);
				background: var(--primary);
			`)};
		}

		&:first-child .text {
			padding-top: 7px;
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;
		}

		&:last-child {
			.text {
				padding-bottom: 7px;
				border-bottom-left-radius: 20px;
				border-bottom-right-radius: 20px;
			}

			svg.message-status {
				display: block;

				${({ isReverse }) => (isReverse && `
					opacity: 1;
					visibility: visible;
				`)};
			}
		}

		.time {
			font-size: 13px;
			color: var(--accent-2);
			margin-left: 10px;
			opacity: 0;
			visibility: hidden;

			${({ isReverse }) => (isReverse && `
				margin-left: 0;
				margin-right: 10px;
			`)};
		}
	}

	svg {
		&.message-status {
			margin-left: 10px;
			cursor: pointer;
			opacity: 0;
			visibility: hidden;
			flex-shrink: 0;
			display: none;

			${({ isReverse }) => (isReverse && `
				margin-left: 0;
				margin-right: 10px;
			`)};

			path {
				fill: var(--primary);
			}
		}

		&.remove-message {
			margin-left: 10px;
			cursor: pointer;
			opacity: 0;
			visibility: hidden;
			flex-shrink: 0;
		}
	}
`;
