import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const useComponentId = () => {
  const [id, setId] = useState(null);

  useEffect(() => {
    if (id === null) {
      setId(uuid());
    }
  }, [id]);

  return id;
};
