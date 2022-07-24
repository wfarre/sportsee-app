import { useEffect, useState } from "react";

export function useFetch(url, Factory, type) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          const sessionData = new Factory(result.data, type);
          setActivityData(sessionData);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
  }, [url]);

  console.log("poui");
  console.log({ activityData, isLoaded, error });

  // return { activityData, isLoaded, error };
  return [activityData, isLoaded, error];
}
