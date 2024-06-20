import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PrettyChatWindow } from "react-chat-engine-pretty";
const Chatpage = (props) => {
 
  const[gotname, setname] = useState('')
  const[gotpass, setpass] = useState('')
  console.log(props.email)
  //console.log('Project ID:', process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID);
  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const response = await axios.post("http://localhost:3001/chats/getname", { email: props.email.email });
        console.log(response.data)
        setname(response.data.name)
        setpass(response.data.secretPass)

      } catch (err) {
        console.error(err)
      }
    };

    fetchCredentials();
  }, [props.email]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
    <PrettyChatWindow
      projectId={"6d66e682-b2a0-4196-8638-402c79852da0"}
      username={gotname} // adam
      secret={gotpass} // pass1234
      style={{ height: "100%" }}
    />
  </div>
);

};

export default Chatpage;
