import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const DatabaseContext = createContext();

const Dataprovider = ({ children }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const [isLoggedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const value = await axios.get(
        "https://60d5a2c2943aa60017768b01.mockapi.io/candidate"
      );
      setUserDetails(value.data);
      if (value.data.length) setSelectedData(value.data[0]);
    }
    fetchData();
  }, []);

  async function deleteUserDetail(singleUserDetail, wholeData) {
    const selectedUserId = singleUserDetail.id;
    await axios.delete(
      `https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${selectedUserId}`
    );

    const updatedData = wholeData.filter(({ id }) => id !== selectedUserId);
    if (updatedData.length === 0) {
      setSelectedData({});
    }

    if (selectedUserId === selectedData.id) {
      setSelectedData(updatedData[0]);
    }

    setUserDetails(updatedData);
  }

  return (
    <DatabaseContext.Provider
      value={{
        userDetails,
        selectedData,
        setUserDetails,
        setSelectedData,
        deleteUserDetail,
        isLoggedIn,
        setIsLogedIn,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

const useData = () => useContext(DatabaseContext);

export { Dataprovider, useData };
