import React from "react";

const Article = ({ article, index }) => {
	return (
		<article>
			<a
				href={`https://reddit.com${article.permalink}`}
				target='_blank'
				rel='noopener noreferrer'>
				<h4>{article.title}</h4>
			</a>
		</article>
	);
};

export default Article;
