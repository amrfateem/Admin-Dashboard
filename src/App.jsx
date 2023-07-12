import { Admin, Resource, defaultLightTheme } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { userList, userEdit, userShow, userCreate } from "./components/users.jsx";
import { postCreate, postEdit, postList, postShow } from "./components/posts.jsx";
import PersonIcon from "@mui/icons-material/Person";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { albumsEdit, albumsList, albumsShow } from "./components/albums.jsx";
import { Card, CardContent, CardHeader } from "@mui/material";
import { authProvider } from "./authProvider";

function App() {
  const dashboard = () => (
    <Card>
      <CardHeader title="Welcome to my dashboard" />
      <CardContent>
        This is a dashboard created by React-Admin Library
      </CardContent>
    </Card>
  );

  return (
    <Admin
      theme={defaultLightTheme}
      dataProvider={jsonServerProvider("https://jsonplaceholder.typicode.com")}
      authProvider={authProvider}
      dashboard={dashboard}
      darkTheme={{ palette: { mode: "dark" } }}
      disableTelemetry
      title="AmrFateem Test Admin Panel"
    >
      <Resource
        name="users"
        icon={PersonIcon}
        list={userList}
        show={userShow}
        edit={userEdit}
        create={userCreate}
        recordRepresentation="name"
      />
      <Resource name="posts" list={postList} show={postShow} edit={postEdit}  create={postCreate}/>
      <Resource
        name="albums"
        icon={InsertPhotoIcon}
        list={albumsList}
        show={albumsShow}
        edit={albumsEdit}
      />
    </Admin>
  );
}

export default App;
