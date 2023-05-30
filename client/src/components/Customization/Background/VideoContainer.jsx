import { useState } from "react";

const VidoeContainer = () => {
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(link);
  };

  return (
    <form onSubmit={handleSubmit} className="video__container">
      <input
        type="text"
        onChange={(e) => setLink(e.target.value)}
        placeholder="Vimeo or youtube video link"
      />
      <button type="submit" style={{ display: "none" }}>
        submit
      </button>
    </form>
  );
};

export default VidoeContainer;
