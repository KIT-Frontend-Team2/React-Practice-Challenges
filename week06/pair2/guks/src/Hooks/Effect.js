import React, { useState, useEffect } from "react";

const mockFetchData = () => {
  return new Promise((resolve) => {
    // 임의의 데이터 반환 (예시를 위해 지연시간 추가)
    setTimeout(() => {
      resolve([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ]);
    }, 1000);
  });
};

const Effect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await mockFetchData();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Effect;
