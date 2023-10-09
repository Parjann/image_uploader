import logo from './logo.svg';
import './App.css';
import plus_icon from "./assets/icons/plus_icon.png";
import {useRef, useState} from 'react';

function App() {

  const inputRef = useRef(null);
  const [selectedImages, setSelectedImage] = useState([]);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const onImageSelected = (event) => {
    console.log(`Selected Image ${event}`);
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    setSelectedImage([URL.createObjectURL(event.target.files[0]), ...selectedImages]);
  }

  return (
    <div className="App">
      <h1 className='Header-text'>Image Uploader</h1>
      <div className='Image-choosing-container' onClick={handleClick}>
        <img width={70} height={70} src={plus_icon} />
      </div>
      <h6>Click the box to choose an image</h6>
      <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onImageSelected}
      />
      <br />
      <div className='grid-container'>
        {
          selectedImages.map((value, index) => {
            return (<div className='grid-item'>
                <img src={value} style={{width: "100%", height: "100%"}} />
              </div>)
          })
        }
      </div>
      <button className='submit-btn'>Submit</button>
    </div>
  );
}

export default App;
