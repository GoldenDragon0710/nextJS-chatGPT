import { ChatBox } from "../components/chat-box";

function Home() {
  return (
    <div className="wrapper">
      <section>
        <div style={{textAlign: "center"}}>
          <h1>You are welcome.</h1>
        </div>
      </section>
      <section>
        <ChatBox />
      </section>
    </div>
  );
}

export default Home;
