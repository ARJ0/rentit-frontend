export const setlocalStorage = (name, data) => {
    localStorage.setItem(name, data)
}

export const getlocalStorage = (name) => {
    const data = JSON.parse(localStorage.getItem(`${name}`));
    return(data ?? {})
}

export const accountType = () => {
    const getUserData = getlocalStorage("loggedUser");
    return({
        company: getUserData.account_type === "company" ? true : false,
        user: getUserData.account_type === "user" ? true : false
    })
}
export const equipmentCategoriesTypeName = {
    heavy_machinery:"Heavy Machinery",
    tools:"Tools",
    construction: "Construction",
    aerial:"Aerial",
    air_compressors_tools:"Air Compressors and Tools"
}
export const equipmentCategories = [
    { label: "Heavy Machinery", value: "heavy_machinery" },
    { label: "Tools", value: "tools" },
    { label: "Construction", value: "construction" },
    { label: "Aerial", value: "aerial" },
    { label: "Air Compressors and Tools", value: "air_compressors_tools" },
  ];