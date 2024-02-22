import React, { useEffect, useState } from 'react'
import Select from "react-select";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toaster } from '../services/toaster';
import { addEquipment } from '../services/actionCreator';
import firebaseUpload from '../services/firbaseUpload';
import { equipmentCategories } from '../services/helper';
import { useNavigate } from 'react-router-dom';

const AddEquipment = () => {
  const [img, setImg] = useState();
  const [preview, setPreview] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [category, setcategory] = useState();
  const [rent, setrent] = useState();
  const [timeduration, settimeduration] = useState("Per Day");
  const [dop, setdop] = useState();
  const [city, setCity] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (e) => {
    setImg(e.target.files[0]);
  };
  const fileSelect = () => {
    if (typeof img == "object") setPreview(URL.createObjectURL(img));
    else setPreview(img);
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {


    if (
      name && description && category && rent && timeduration && dop && img
    ) {
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      setIsLoading(true);

      await firebaseUpload(img, name, async (img_url) => {

        const reqBody = {
          title: name,
          description,
          age: dop,
          rent,
          timeperiod: timeduration,
          category,
          image: img_url.data,
          location: city,
          currUserId: loggedUser?._id ?? ""
        };
        addEquipment(reqBody).then((data) => {
          navigate('/your-equipment')
          toaster(data?.message, "success")
        }).catch((error) => {
          toaster(error?.response?.data, 'error');
          console.log("🚀 ~ addEquipment ~ error:", error)
        })

      }, () => {
        toaster("Image not uploaded", "error");
      });
    }
    else {
      toaster("Please fill all the details.", "error")
      setError("Please fill all the details.")
    }
    setIsLoading(false)

  };

  useEffect(() => {
    fileSelect();
  }, [img]);
  return (
    <>
      <div className="addproduct page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .2 }}
      >
        <h2>Add Product</h2>
        <p className="red" style={{ background: "none" }}>{error}</p>
        <div className="form">
          <div className="left">
            <div className="avatarWrap">
              <p>Image :</p>
              {!preview ? (
                <div className="avatar"></div>
              ) : (
                <img src={preview || ""} className="avatar" alt="" />
              )}

              <label for="avatarimg" className="blue">
                <CloudUploadIcon sx={{ fontSize: 30 }} />
              </label>
              <input id="avatarimg" type="file"
                onChange={(e) => handleFile(e)}
              />
            </div>
          </div>
          <div className="right">
            <div className="title">
              <p>Name : </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="description">
              <p>Description : </p>
              <textarea
                type="text"
                rows={5}
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              ></textarea>
            </div>

            <div className="title">
              <p>Location : </p>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="category">
              <p>Catergory : </p>
              <Select
                className="select"
                options={equipmentCategories}
                onChange={(selectedOptions) => setcategory(selectedOptions.value)}
              />
            </div>

            <div className="rent">
              <p>Rent : </p>
              <div className="rentInp">
                <input
                  type="number"
                  value={rent}
                  onChange={(e) => setrent(e.target.value)}
                ></input>
                <select
                  name="per"
                  className="yellow"
                  id=""
                  value={timeduration}
                  onChange={(e) => {
                    console.log(e);
                    settimeduration(e.target.value);
                  }}
                >
                  <option value="Per Day">Per Day</option>
                  <option value="Per Month">Per Month</option>
                  <option value="Per Year">Per Year</option>
                </select>
              </div>
            </div>

            <div className="title">
              <p>Date of Purchase : </p>
              <input
                type="date"
                value={dop}
                onChange={(e) => setdop(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="blue" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Loading ..." : "Add Product"}
          </button>
        </div>
      </div>

    </>
  )
}

export default AddEquipment