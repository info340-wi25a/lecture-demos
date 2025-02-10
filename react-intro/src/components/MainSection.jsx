import { SongList } from "./SongList.jsx";

export function MainSection(props) {

  let messageStr = "Good morning to all";
  const puppyURL = "img/puppy.jpg";

  const isLoud = true;
  if(isLoud) {
    messageStr = messageStr.toUpperCase();
  }

  return (
    <main>
      <SongList />
      <p>Welcome to my React Demo</p>
      <p>{messageStr}</p>
      {/* This is a comment */}
      <p>
        <img src={puppyURL} alt="a cute puppy" />
      </p>
    </main>
  )
}
