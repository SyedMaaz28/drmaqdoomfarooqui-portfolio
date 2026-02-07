"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const namespace = "drmaqdoomfarooqui";
    const key = "portfolio";

    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
      .then(res => res.json())
      .then(data => setCount(data.value))
      .catch(() => {
        console.log("Counter failed");
        setCount(0);
      });
  }, []);

  return (
    <p className="text-center text-sm text-white-500">
      {count !== null
        ? `🌍 ${count.toLocaleString()} visitors explored this profile`
        : "Loading..."}
    </p>
  );
}
