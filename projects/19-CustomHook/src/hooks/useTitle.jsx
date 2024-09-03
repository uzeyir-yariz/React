import { useEffect } from "react";

const useTitle = (Count) => {
  useEffect(() => {
    document.title = `count - ${Count}`
  }, [Count]);
}

export default useTitle
