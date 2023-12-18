import Authentication from "./authentication.ts";

//wrapper so you'll always go through the apiHelper (which makes it readable you're using an API) to specific api's
class Apihelper {
  authentication = Authentication;
}
export default new Apihelper();
