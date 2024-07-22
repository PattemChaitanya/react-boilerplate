import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Layout(props) {
  const {
    headerTags: { title, description, keywords, titleTemplate },
    children,
  } = props;
  const [allTags, setAllTags] = useState([]);

  const getTitles = useCallback(() => {
    const titles = [];
    if (title) {
      titles.push(<title key="head_title">{title}</title>);
      titles.push(<meta key="og_title" property="og:title" content={title} />);
      titles.push(
        <meta
          key="og_description"
          property="og:description"
          content={description}
        />
      );
      titles.push(
        <meta key="twitter_title" name="twitter:title" content={title} />
      );
    }
    return titles;
  }, [title, description]);

  const getKeyWords = useCallback(() => {
    const collection = [];
    if (keywords) {
      collection.push(
        <meta key="head_keywords" name="keywords" content={keywords} />
      );
    }
    return collection;
  }, [keywords]);

  useEffect(() => {
    const titles = getTitles();
    const keyWords = getKeyWords();

    const tags = [...titles, ...keyWords];
    setAllTags(tags);
  }, [title, keywords, getTitles, getKeyWords]);

  return (
    <>
      {allTags.length && (
        <Helmet titleTemplate={titleTemplate}>{allTags}</Helmet>
      )}
      {children}
    </>
  );
}

export default Layout;
