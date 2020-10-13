import React, { useState, useEffect } from "react";
import Article from "./Article";

const RedditHeadlines = () => {
	const [articles, setArticles] = useState([]);
	const [subreddit, setSubreddit] = useState("webdev");

	useEffect(() => {
		handleGetArticles(subreddit);
	}, [subreddit]);

	const handleGetArticles = async (subreddit) => {
		try {
			let response = await fetch(
				`https://www.reddit.com/r/${subreddit}.json?limit=8`
			);
			let data = await response.json();
			setArticles(data.data.children);
		} catch (err) {
			console.log(err);
			return;
		}
	};

	return (
		<>
			<header className='redditHeader'>
				<input
					type='text'
					className='input'
					value={subreddit}
					onChange={(e) => setSubreddit(e.target.value)}
				/>
			</header>
			<div className='articles'>
				{articles &&
					articles.map((article, index) => (
						<Article key={index} article={article.data} index={index} />
					))}
			</div>
		</>
	);
};

export default RedditHeadlines;
