import React, { useEffect, useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import EquipmentCard from "../components/EquipmentCard";
import { getAllEquipment } from "../services/actionCreator";
import { toaster } from "../services/toaster";
import { equipmentCategories } from "../services/helper";


const Explore = () => {

  const [equipment, setEquipment] = useState([])

  const getEquipment = () => {

    getAllEquipment().then((data) => {
      setEquipment(data)
    }).catch((error) => {
      toaster(error?.response?.data, 'error');
      console.log("err -=-= ", error)
    })
  }
  useEffect(() => {
    getEquipment()
  }, [])


  return (
    <>
      <div
        className="page explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="top flex-col">
          <b>Showing Results of : {"All"}</b>

          <div className="categories">
            <div className={`pill blue filterpill`}>
              <FilterAltIcon sx={{ fontSize: 30 }} />
            </div>
            <button
              className={`pill yellow`}
              onClick={() => {
              }}
            >
              All
            </button>
            {equipmentCategories.map((op) => (
              <button
                className={`pill yellow`}
              >
                {op.label}
              </button>
            ))}
          </div>
        </div>

        <div className="listProduct">
          {equipment.length > 0 ? equipment.map((info, index) => {
            return <EquipmentCard info={info} key={index} />
          }) :
            <div className="flex-col">
              No Equipment
            </div>}
        </div>
      </div>
    </>
  )
}

export default Explore;
