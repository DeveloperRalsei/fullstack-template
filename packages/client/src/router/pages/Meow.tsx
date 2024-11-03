import { meow } from "@common";
import { Loader, Space, Stack } from "@mantine/core";
import { useEffect, useState } from "react";

export const Meow = () => {
  const [data, setData] = useState<meow>();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/meow");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <Stack h={"100%"}>
      {data[":3"] + " from server"}
      <Space h={"30vh"} />
    </Stack>
  );
};
