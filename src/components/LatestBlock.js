import React from "react";
import "./LatestBlock.css";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import BlockPost from "./BlockPost";

const LatestBlock = () => {
  return (
    <div className="latest__block">
      <div className="head">
        <h1>LATEST BLOGS</h1>
        <LinearScaleIcon />
        <p>
          Read our blogs written by our experts, you will know many interesting
          facts about divine science.
        </p>
        <p>
          Also, you will get glimpses how AstroKapoor works, and how people have
          been benefited by availing AstroKapoor services.
        </p>
      </div>

      <div className="posts">
        <BlockPost />
        <BlockPost />
        <BlockPost />
        <BlockPost />
      </div>
    </div>
  );
};

export default LatestBlock;
