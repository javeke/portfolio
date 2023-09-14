import instance from "./axios.instance";
import { portfolioApi, ipApi } from "../config";

export const getIpAddress = async ()=>{
  try {
    const res = await instance.get(ipApi);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export const userVisits = async visitor => {
  try {
    const res = await instance.post(`${portfolioApi}/visitors`, visitor);
    return res.data;
  } catch (error) {
    throw error;
  }
}

// Added Api call to get visitors
export const getVisits = async visitor => {
  try {
    const res = await instance.get(`${portfolioApi}/visitors`, visitor);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export default {
  userVisits,
  getIpAddress
};