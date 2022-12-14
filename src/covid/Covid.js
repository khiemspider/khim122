import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";


const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const FORMAT_DATE= "DD/MM/YYYY";
  const formatItem = (item) => {
    return {
      ...item,
      Date: moment(item?.Date).format(FORMAT_DATE),
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(() => true);
      const res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2022-10-01T00%3A00%3A00Z&to=2022-10-20T00%3A00%3A00Z"
      );
      const data = (res?.data || [])?.map(formatItem)?.reverse();
      setDataCovid(data);
      setTimeout(() => {
        setIsLoading(() => false);
      }, 1000);
    };
    fetchData();
  }, []);
  return (
    <>
    {isLoading ? <span className="loading-wrapper"><div class="lds-hourglass"/></span>
    : <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>{dataCovid?.length > 0 &&
          dataCovid?.map((item) => {
            return (
              <tr key={item?.ID}>
                <td>{item?.Date} </td>
                <td>{item?.Confirmed} </td>
                <td>{item?.Active} </td>
                <td>{item?.Deaths} </td>
                <td>{item?.Recovered} </td>
              </tr>
            );
          })}
      </tbody>
    </table>}
    </>
    
  );
};
export default Covid;
