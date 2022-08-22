import { useEffect, useState } from "react";

/**
 *  Create a a custom hook to fetch the data from an url
 * @Params url: where is stored the data in the server
 * @Params Factory: a factory patterns to be able to use constructor patterns,
 *  to get the data so they are ready to use
 * @Params type: corresponds to the type of the api (in case, the backend's API change in the future)
 * @return the desired activity data
 * @return isLoaded, it will be true until fetch() has finished to load the data
 * @return error: if there is any
 */
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
  }, [url, Factory, type]);

  return [activityData, isLoaded, error];
}
