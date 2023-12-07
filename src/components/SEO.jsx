import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { seoData } from "../data/data.json";

function SEO() {
	return (
		<Head>
			<title>JIM Music Producer</title>
			<meta name="title" content="JIM Music Producer" />
			<meta name="author" content="Juan Ignacio Mascarenhas" />
			<meta name="description" content="Musician, composer, producer, and sound designer displaying my portfolio and professional background" />
			<meta name="keywords" content={seoData.keywords.join(", ")} />
			<link rel="canonical" href={seoData.url} />
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={seoData.url} />
			<meta property="og:title" content={seoData.title} />
			<meta property="og:description" content={seoData.description} />
			<meta property="og:image" content={seoData.image} />
			<meta property="og:site_name" content={seoData.title} />
			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={seoData.url} />
			<meta property="twitter:title" content={seoData.title} />
			<meta property="twitter:description" content={seoData.description} />
			<meta property="twitter:image" content={seoData.image} />
			<meta name="robots" content="Index" />
			<link rel="manifest" href="/manifest.json" />
			{/* Favicon */}
			<link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="./favicon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="./favicon.png"
			/>
		</Head>
	);
}

SEO.prototype = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		author: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
		url: PropTypes.string,
		keywords: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

export default SEO;
