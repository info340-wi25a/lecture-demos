
import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {

  //have [{}{}]
  console.log(INITIAL_CHAT_LOG);

  const messageElemArray = INITIAL_CHAT_LOG.map((chatObj) => {
    const transformed =  (
      <MessageItem key={chatObj.timestamp} messageData={chatObj} />
    );
    return transformed;

  });

  //want: [<>,<>,<>]
  // const messageElemArray = [
  //   <MessageItem messageData={INITIAL_CHAT_LOG[0]}  />,
  //   <MessageItem messageData={INITIAL_CHAT_LOG[1]} />,
  //   <MessageItem messageData={INITIAL_CHAT_LOG[2]} />,
  // ]

  return (
    <div>
      {messageElemArray}
      {/* <ComposeForm /> */}
    </div>
  )
}

function MessageItem(props) {
  const {messageData} = props;
  const {text, userName, userImg } = messageData;

  const handleClick = function(event) {
    console.log("You clicked on " + userName);
  }

  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
      {/* img.addEventListener('click', someFunction) */}
        <img onClick={handleClick} src={userImg} />
      </div>
      <div>
        <p className="user-name">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}
