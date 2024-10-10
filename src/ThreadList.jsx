import "./ThreadList.css";
import React, { useState, useEffect } from "react";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetchThreads();
  }, []);

  const fetchThreads = async () => {
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setThreads(data);
    } catch (error) {
      console.error("読み込みに失敗しました", error);
    }
  };

  const renderThreadList = () => {
    return threads.map((thread) => <li key={thread.id}>{thread.title}</li>);
  };

  return (
    <div className="Main">
      <header className="ThreadsHeader">
        <h1>掲示板</h1>
        <button onClick>スレッドをたてる</button>
      </header>
      <div className="NewThreads">
        <h3>新着スレッド</h3>
        <ul className="NewThreadList">{renderThreadList()}</ul>
      </div>
    </div>
  );
};

export default ThreadList;
