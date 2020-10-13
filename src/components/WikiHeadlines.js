import React, { useState, useEffect } from "react";
// https://cors-anywhere.herokuapp.com not needed it turns out

const WikiHeadlines = () => {
	const [wikiArticle, setwikiArticle] = useState([]);
	const [wikicategory, setWikiCategory] = useState("rainbow");

	useEffect(() => {
		handleWiki(wikicategory);
	}, [wikicategory]);

	const handleWiki = async (wikicategory) => {
		try {
			const wiki = await fetch(
				`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${wikicategory}`
			);
			let data = await wiki.json();
			setwikiArticle(data[1]);
			setWikiCategory(data[0]);
		} catch (err) {
			console.log(err);
			return;
		}
	};

	return (
		<>
			<header className='wikiHeader'>
				<input
					type='text'
					className='inputWiki'
					value={wikicategory}
					onChange={(e) => setWikiCategory(e.target.value)}
				/>
			</header>
			<div className='articles'>
				{wikiArticle &&
					wikiArticle.map((article, index) => (
						<article key={index}>
							<a href={`https://en.wikipedia.org/wiki/${article}`}>
								<h3>{article}</h3>
							</a>
						</article>
					))}
			</div>
		</>
	);
};

export default WikiHeadlines;
