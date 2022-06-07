import { css } from 'styled-components';

export const GlobalClasses = css`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

	// reset
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	* {
		margin: 0;
		padding: 0;
	}

	html,
	body {
		height: 100%;
	}
	body {
		line-height: 1.5;
	}

	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}
	input,
	button,
	textarea,
	select {
		font: inherit;
		outline: none;
	}
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}

	body {
		font-family: 'Roboto', sans-serif;
		background: ${(props) => props.theme.colors.backgroundColorPrimary};
	}

	#root {
		width: 100%;
		height: 100%;
	}

	.p0 {
		padding: ${(props) => props.theme.spacing.padding.p0};
	}
	.p2 {
		padding: ${(props) => props.theme.spacing.padding.p2};
	}
	.p4 {
		padding: ${(props) => props.theme.spacing.padding.p4};
	}
	.p8 {
		padding: ${(props) => props.theme.spacing.padding.p8};
	}
	.p16 {
		padding: ${(props) => props.theme.spacing.padding.p16};
	}
	.p32 {
		padding: ${(props) => props.theme.spacing.padding.p32};
	}
	.p48 {
		padding: ${(props) => props.theme.spacing.padding.p48};
	}

	.pt0 {
		padding: ${(props) => props.theme.spacing.padding.pt0};
	}
	.pt2 {
		padding: ${(props) => props.theme.spacing.padding.pt2};
	}
	.pt4 {
		padding: ${(props) => props.theme.spacing.padding.pt4};
	}
	.pt8 {
		padding: ${(props) => props.theme.spacing.padding.pt8};
	}
	.pt16 {
		padding: ${(props) => props.theme.spacing.padding.pt16};
	}
	.pt32 {
		padding: ${(props) => props.theme.spacing.padding.pt32};
	}
	.pt48 {
		padding: ${(props) => props.theme.spacing.padding.pt48};
	}

	.pb0 {
		padding: ${(props) => props.theme.spacing.padding.pb0};
	}
	.pb2 {
		padding: ${(props) => props.theme.spacing.padding.pb2};
	}
	.pb4 {
		padding: ${(props) => props.theme.spacing.padding.pb4};
	}
	.pb8 {
		padding: ${(props) => props.theme.spacing.padding.pb8};
	}
	.pb16 {
		padding: ${(props) => props.theme.spacing.padding.pb16};
	}
	.pb32 {
		padding: ${(props) => props.theme.spacing.padding.pb32};
	}
	.pb48 {
		padding: ${(props) => props.theme.spacing.padding.pb48};
	}

	.pl0 {
		padding: ${(props) => props.theme.spacing.padding.pl0};
	}
	.pl2 {
		padding: ${(props) => props.theme.spacing.padding.pl2};
	}
	.pl4 {
		padding: ${(props) => props.theme.spacing.padding.pl4};
	}
	.pl8 {
		padding: ${(props) => props.theme.spacing.padding.pl8};
	}
	.pl16 {
		padding: ${(props) => props.theme.spacing.padding.pl16};
	}
	.pl32 {
		padding: ${(props) => props.theme.spacing.padding.pl32};
	}
	.pl48 {
		padding: ${(props) => props.theme.spacing.padding.pl48};
	}

	.pr0 {
		padding: ${(props) => props.theme.spacing.padding.pr0};
	}
	.pr2 {
		padding: ${(props) => props.theme.spacing.padding.pr2};
	}
	.pr4 {
		padding: ${(props) => props.theme.spacing.padding.pr4};
	}
	.pr8 {
		padding: ${(props) => props.theme.spacing.padding.pr8};
	}
	.pr16 {
		padding: ${(props) => props.theme.spacing.padding.pr16};
	}
	.pr32 {
		padding: ${(props) => props.theme.spacing.padding.pr32};
	}
	.pr48 {
		padding: ${(props) => props.theme.spacing.padding.pr48};
	}

	.m0 {
		padding: ${(props) => props.theme.spacing.padding.m0};
	}
	.m2 {
		padding: ${(props) => props.theme.spacing.padding.m2};
	}
	.m4 {
		padding: ${(props) => props.theme.spacing.padding.m4};
	}
	.m8 {
		padding: ${(props) => props.theme.spacing.padding.m8};
	}
	.m16 {
		padding: ${(props) => props.theme.spacing.padding.m16};
	}
	.m32 {
		padding: ${(props) => props.theme.spacing.padding.m32};
	}
	.m48 {
		padding: ${(props) => props.theme.spacing.padding.m48};
	}

	.mt0 {
		padding: ${(props) => props.theme.spacing.padding.mt0};
	}
	.mt2 {
		padding: ${(props) => props.theme.spacing.padding.mt2};
	}
	.mt4 {
		padding: ${(props) => props.theme.spacing.padding.mt4};
	}
	.mt8 {
		padding: ${(props) => props.theme.spacing.padding.mt8};
	}
	.mt16 {
		padding: ${(props) => props.theme.spacing.padding.mt16};
	}
	.mt32 {
		padding: ${(props) => props.theme.spacing.padding.mt32};
	}
	.mt48 {
		padding: ${(props) => props.theme.spacing.padding.mt48};
	}

	.mb0 {
		padding: ${(props) => props.theme.spacing.padding.mb0};
	}
	.mb2 {
		padding: ${(props) => props.theme.spacing.padding.mb2};
	}
	.mb4 {
		padding: ${(props) => props.theme.spacing.padding.mb4};
	}
	.mb8 {
		padding: ${(props) => props.theme.spacing.padding.mb8};
	}
	.mb16 {
		padding: ${(props) => props.theme.spacing.padding.mb16};
	}
	.mb32 {
		padding: ${(props) => props.theme.spacing.padding.mb32};
	}
	.mb48 {
		padding: ${(props) => props.theme.spacing.padding.mb48};
	}

	.ml0 {
		padding: ${(props) => props.theme.spacing.padding.ml0};
	}
	.ml2 {
		padding: ${(props) => props.theme.spacing.padding.ml2};
	}
	.ml4 {
		padding: ${(props) => props.theme.spacing.padding.ml4};
	}
	.ml8 {
		padding: ${(props) => props.theme.spacing.padding.ml8};
	}
	.ml16 {
		padding: ${(props) => props.theme.spacing.padding.ml16};
	}
	.ml32 {
		padding: ${(props) => props.theme.spacing.padding.ml32};
	}
	.ml48 {
		padding: ${(props) => props.theme.spacing.padding.ml48};
	}

	.mr0 {
		padding: ${(props) => props.theme.spacing.padding.mr0};
	}
	.mr2 {
		padding: ${(props) => props.theme.spacing.padding.mr2};
	}
	.mr4 {
		padding: ${(props) => props.theme.spacing.padding.mr4};
	}
	.mr8 {
		padding: ${(props) => props.theme.spacing.padding.mr8};
	}
	.mr16 {
		padding: ${(props) => props.theme.spacing.padding.mr16};
	}
	.mr32 {
		padding: ${(props) => props.theme.spacing.padding.mr32};
	}
	.mr48 {
		padding: ${(props) => props.theme.spacing.padding.mr48};
	}
`;
