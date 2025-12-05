interface MessageProps {
  message: string;
}

function Message({ message }: MessageProps): React.ReactElement {
  return (
    <p>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
