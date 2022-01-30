import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

const axios = require("axios");
function App() {
  //twitch
  const [user, setUser] = useState();
  const [broadcasterType, setBroadcasterType] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [description, setDescription] = useState();
  const [id, setId] = useState();
  const [pfp, setPfp] = useState();
  const [viewCount, setViewCount] = useState(0);

  const apiUrl = `https://api.twitch.tv/helix/users?login=`;
  const options = {
    headers: {
      Authorization: `Bearer wr8rv5mi6jwi1lnbk4zzon07apv1al`,
      "Client-ID": "s4bjei687t2i62337akk2h3sbo4fq6",
    },
  };
  const handleUserChange = (newUser) => {
    // useEffect(() => {

    setUser();
    setId();
    setBroadcasterType();
    setCreatedAt();
    setDescription();
    setPfp();
    setViewCount();

    axios
      .get(apiUrl + newUser, options)
      .then((response) => {
        const data = response.data.data[0];
        setUser(newUser);
        if (data) {
          setId(data.id);
          setBroadcasterType(data.broadcaster_type);
          setCreatedAt(data.created_at);
          setDescription(data.description);
          setPfp(data.profile_image_url);
          setViewCount(data.view_count);
        } else {
          console.log("user not found");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Header />
      <Content
        user={user}
        id={id}
        createdAt={createdAt}
        description={description}
        pfp={pfp}
        viewCount={viewCount}
        broadcasterType={broadcasterType}
        handleUserChange={handleUserChange}
      />

      <Footer />
    </div>
  );
}
export default App;
