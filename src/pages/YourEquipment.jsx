import React, { useEffect, useState } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { getEquipmentByCompnyId } from '../services/actionCreator'
import { toaster } from '../services/toaster'
import { getlocalStorage, equipmentCategories } from '../services/helper'
import EquipmentCard from '../components/EquipmentCard'

export const YourEquipment = () => {

    const [equipment, setEquipment] = useState([])
    const get = () => {
        const loggedUser = getlocalStorage('loggedUser');
        const params = {
            userId: loggedUser?._id
        }
        getEquipmentByCompnyId(params).then((data) => {
            setEquipment(data)
        }).catch((err) => {
            toaster(err?.response?.data, 'error');
            console.log("err -=-= ", err)
        })
    }
    useEffect(() =>{
        get()
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
