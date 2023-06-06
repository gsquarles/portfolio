import { useEffect } from "react";

export function Resume() {
  useEffect(() => {
    document.title = "Resume";
  }, []);

  return <h1>Resume</h1>;
}
