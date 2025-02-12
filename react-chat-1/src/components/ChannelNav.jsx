export function ChannelNav(props) {

  //['','']
  const channelNameArray = ['general', 'social', 'birds', 'channel-4', 'birthdays'];

  //[<>, <>]
  const liElemArray = channelNameArray.map((nameStr) => {
    const transformed = <li key={nameStr}>{nameStr}</li>
    return transformed;
  })

  return (
    <nav className="bg-secondary text-light">
      <ul>
        {liElemArray}
      </ul>
    </nav>
  )
}