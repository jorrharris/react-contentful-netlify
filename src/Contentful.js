import { createClient } from "contentful";

export default createClient({
  //found in settings -> API Keys
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
