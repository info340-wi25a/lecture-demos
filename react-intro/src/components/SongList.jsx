
export function SongList(props) {

  //have an [{},{}]
  const songArray = [
    { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
    { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
    },
    { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"
    }, 
    { artist: "Somebody", title: "Something"}
  ];

  const elementArray = songArray.map((songObj) => {
    const transformed = <SongItem artist={songObj.artist} title={songObj.title} />;
    return transformed;
  });
  
//   //want: [<>,<>]
//   const elementArray = [
//     <SongItem artist={songArray[0].artist} title={songArray[0].title} />,
//     <SongItem artist={songArray[1].artist} title={songArray[1].title} />
// ]

  return (
    <div className="cardList">
      {elementArray}
    </div>
  )
}

function SongItem(props) {
  //props is an OBJECT that has multiple values
  // console.log(props);
  const {artist, title} = props;
  // const artist = props.artist;
  // const title = props.title;

  return (
      <div className="card">
        {artist} - {title}
      </div>
  )
}