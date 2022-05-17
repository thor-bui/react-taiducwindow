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
	.p5 {
		padding: ${(props) => props.theme.spacing.padding.p5};
	}
	.p10 {
		padding: ${(props) => props.theme.spacing.padding.p10};
	}
	.p15 {
		padding: ${(props) => props.theme.spacing.padding.p15};
	}
	.p20 {
		padding: ${(props) => props.theme.spacing.padding.p20};
	}
	.p25 {
		padding: ${(props) => props.theme.spacing.padding.p25};
	}
	.p30 {
		padding: ${(props) => props.theme.spacing.padding.p30};
	}
	.p48 {
		padding: ${(props) => props.theme.spacing.padding.p48};
	}

	.pt0 {
		padding: ${(props) => props.theme.spacing.padding.pt0};
	}
	.pt5 {
		padding: ${(props) => props.theme.spacing.padding.pt5};
	}
	.pt10 {
		padding: ${(props) => props.theme.spacing.padding.pt10};
	}
	.pt15 {
		padding: ${(props) => props.theme.spacing.padding.pt15};
	}
	.pt20 {
		padding: ${(props) => props.theme.spacing.padding.pt20};
	}
	.pt25 {
		padding: ${(props) => props.theme.spacing.padding.pt25};
	}
	.pt30 {
		padding: ${(props) => props.theme.spacing.padding.pt30};
	}
	.pt48 {
		padding: ${(props) => props.theme.spacing.padding.pt48};
	}

	.pb0 {
		padding: ${(props) => props.theme.spacing.padding.pb0};
	}
	.pb5 {
		padding: ${(props) => props.theme.spacing.padding.pb5};
	}
	.pb10 {
		padding: ${(props) => props.theme.spacing.padding.pb10};
	}
	.pb15 {
		padding: ${(props) => props.theme.spacing.padding.pb15};
	}
	.pb20 {
		padding: ${(props) => props.theme.spacing.padding.pb20};
	}
	.pb25 {
		padding: ${(props) => props.theme.spacing.padding.pb25};
	}
	.pb30 {
		padding: ${(props) => props.theme.spacing.padding.pb30};
	}
	.pb48 {
		padding: ${(props) => props.theme.spacing.padding.pt48};
	}

	.pl0 {
		padding: ${(props) => props.theme.spacing.padding.pl0};
	}
	.pl5 {
		padding: ${(props) => props.theme.spacing.padding.pl5};
	}
	.pl10 {
		padding: ${(props) => props.theme.spacing.padding.pl10};
	}
	.pl15 {
		padding: ${(props) => props.theme.spacing.padding.pl15};
	}
	.pl20 {
		padding: ${(props) => props.theme.spacing.padding.pl20};
	}
	.pl25 {
		padding: ${(props) => props.theme.spacing.padding.pl25};
	}
	.pl30 {
		padding: ${(props) => props.theme.spacing.padding.pl30};
	}
	.pl48 {
		padding: ${(props) => props.theme.spacing.padding.pl48};
	}

	.pr0 {
		padding: ${(props) => props.theme.spacing.padding.pr0};
	}
	.pr5 {
		padding: ${(props) => props.theme.spacing.padding.pr5};
	}
	.pr10 {
		padding: ${(props) => props.theme.spacing.padding.pr10};
	}
	.pr15 {
		padding: ${(props) => props.theme.spacing.padding.pr15};
	}
	.pr20 {
		padding: ${(props) => props.theme.spacing.padding.pr20};
	}
	.pr25 {
		padding: ${(props) => props.theme.spacing.padding.pr25};
	}
	.pr30 {
		padding: ${(props) => props.theme.spacing.padding.pr30};
	}
	.pr48 {
		padding: ${(props) => props.theme.spacing.padding.pt48};
	}

	.m0 {
		margin: ${(props) => props.theme.spacing.margin.m0};
	}
	.m5 {
		margin: ${(props) => props.theme.spacing.margin.m5};
	}
	.m10 {
		margin: ${(props) => props.theme.spacing.margin.m10};
	}
	.m15 {
		margin: ${(props) => props.theme.spacing.margin.m15};
	}
	.m20 {
		margin: ${(props) => props.theme.spacing.margin.m20};
	}
	.m25 {
		margin: ${(props) => props.theme.spacing.margin.m25};
	}
	.m30 {
		margin: ${(props) => props.theme.spacing.margin.m30};
	}
	.m48 {
		margin: ${(props) => props.theme.spacing.margin.m48};
	}

	.mt0 {
		margin: ${(props) => props.theme.spacing.margin.mt0};
	}
	.mt5 {
		margin: ${(props) => props.theme.spacing.margin.mt5};
	}
	.mt10 {
		margin: ${(props) => props.theme.spacing.margin.mt10};
	}
	.mt15 {
		margin: ${(props) => props.theme.spacing.margin.mt15};
	}
	.mt20 {
		margin: ${(props) => props.theme.spacing.margin.mt20};
	}
	.mt25 {
		margin: ${(props) => props.theme.spacing.margin.mt25};
	}
	.mt30 {
		margin: ${(props) => props.theme.spacing.margin.mt30};
	}
	.mt48 {
		margin: ${(props) => props.theme.spacing.margin.mt48};
	}

	.mb0 {
		margin: ${(props) => props.theme.spacing.margin.mb0};
	}
	.mb5 {
		margin: ${(props) => props.theme.spacing.margin.mb5};
	}
	.mb10 {
		margin: ${(props) => props.theme.spacing.margin.mb10};
	}
	.mb15 {
		margin: ${(props) => props.theme.spacing.margin.mb15};
	}
	.mb20 {
		margin: ${(props) => props.theme.spacing.margin.mb20};
	}
	.mb25 {
		margin: ${(props) => props.theme.spacing.margin.mb25};
	}
	.mb30 {
		margin: ${(props) => props.theme.spacing.margin.mb30};
	}
	.mb48 {
		margin: ${(props) => props.theme.spacing.margin.mb48};
	}

	.ml0 {
		margin: ${(props) => props.theme.spacing.margin.ml0};
	}
	.ml5 {
		margin: ${(props) => props.theme.spacing.margin.ml5};
	}
	.ml10 {
		margin: ${(props) => props.theme.spacing.margin.ml10};
	}
	.ml15 {
		margin: ${(props) => props.theme.spacing.margin.ml15};
	}
	.ml20 {
		margin: ${(props) => props.theme.spacing.margin.ml20};
	}
	.ml25 {
		margin: ${(props) => props.theme.spacing.margin.ml25};
	}
	.ml30 {
		margin: ${(props) => props.theme.spacing.margin.ml30};
	}
	.ml48 {
		margin: ${(props) => props.theme.spacing.margin.mt48};
	}

	.mr0 {
		margin: ${(props) => props.theme.spacing.margin.mr0};
	}
	.mr5 {
		margin: ${(props) => props.theme.spacing.margin.mr5};
	}
	.mr10 {
		margin: ${(props) => props.theme.spacing.margin.mr10};
	}
	.mr15 {
		margin: ${(props) => props.theme.spacing.margin.mr15};
	}
	.mr20 {
		margin: ${(props) => props.theme.spacing.margin.mr20};
	}
	.mr25 {
		margin: ${(props) => props.theme.spacing.margin.mr25};
	}
	.mr30 {
		margin: ${(props) => props.theme.spacing.margin.mr30};
	}
	.mr48 {
		margin: ${(props) => props.theme.spacing.margin.mr48};
	}
`;
