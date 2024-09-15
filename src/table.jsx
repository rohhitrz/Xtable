import React, { useState } from "react";

const intitalData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export function Xtable() {
  const [data, setData] = useState(intitalData);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      dateA = new Date(a.date);
      dateB = new Date(b.date);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;

      return b.views - a.views;
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views > b.views) return -1;
      if (a.views < b.views) return 1;

      return new Date(b.date) - new Date(a.data);
    });

    setData(sortedData);
  };
}
