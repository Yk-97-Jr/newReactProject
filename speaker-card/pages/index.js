import { data } from "../SpeakerData";
import Speaker from "../src/component/speaker";


const IndexPage = () => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          return <Speaker key={speaker.id} speaker={speaker} />;
        })}
      </div>
    </div>
  );
};

export default IndexPage;
