
import React, { useState, useEffect } from "react";

// React Dropzone
import { useDropzone } from "react-dropzone";

// Based on the default React Dropzone image thumbnail example
// The `thumbButton` style positions the edit button in the bottom right corner of the thumbnail
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
  padding: 20
};

const thumb = {
  position: "relative",
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};

const thumbButton = {
  position: "absolute",
  right: 10,
  bottom: 10
};

// This function is called when the user taps the edit button.
// It opens the editor and returns the modified file when done
const editImage = (image, done) => {
  const imageFile = image ? image.file : image;
  const imageState = image ? image.data : {};

  const editor = {
    src: imageFile,
    imageState
  };

  editor.on("close", () => {
    // the user cancelled editing the image
  });

  editor.on("process", ({ dest, imageState }) => {
    Object.assign(dest, {
      pintura: { file: imageFile, data: imageState }
    });
    done(dest);
  });
};

export function Download() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
      <button
        style={thumbButton}
        onClick={() =>
          editImage(file, (output) => {
            const updatedFiles = [...files];

            // replace original image with new image
            updatedFiles[index] = output;

            // revoke preview URL for old image
            if (file.preview) URL.revokeObjectURL(file.preview);

            // set new preview URL
            Object.assign(output, {
              preview: URL.createObjectURL(output)
            });

            // update view
            setFiles(updatedFiles);
          })
        }
      >
        Edit
      </button>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the Object URL to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <button>select files</button>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}



//  export function Download() {
//   const onDrop = useCallback(acceptedFiles => {
//     // Do something with the files
//   }, [])
//   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       {
//         isDragActive ?
//           <p>Drop the files here ...</p> :
//           <button>select files</button>
//       }
//     </div>
//   )
// }
