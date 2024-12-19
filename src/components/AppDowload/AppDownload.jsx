import { assets } from "../../assets/assets";
import "./AppDownload.css";

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Chili & Mint App
      </p>
      <div className="app-dowload-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
