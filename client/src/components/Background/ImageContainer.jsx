import { useDropzone } from "react-dropzone";
import { useState } from "react";

const ImageContainer = ({ file, setFile }) => {
  const [assets, setAssets] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        setFile(file);
      });
    },
  });

  return (
    <div className="image__container">
      {file ? (
        <div className="file__cont">
          <img src={URL.createObjectURL(file)} alt="" />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={isDragActive ? "active imagedrop" : "imagedrop"}
        >
          <input {...getInputProps()} accept=".jpg,.png,.svg,.gif" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="dropandbrowse">
              <p>
                Drag & drop or <span>browse</span>
              </p>

              <span>jpg, png, svg or gif</span>
            </div>
          )}
        </div>
      )}
      <div className="option__container">
        <button onClick={() => setAssets((prev) => !prev)}>Use assets</button>
        <select>
          <option value="">Cover</option>
          <option value="">Contain</option>
          <option value="">Fit</option>
        </select>

        {assets && (
          <div className="assets__container">
            {[...new Array(6)].map((_, index) => (
              <div className="asset" key={index}>
                asset
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageContainer;
