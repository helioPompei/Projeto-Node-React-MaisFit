import { AxiosError } from "axios";
import { IPhysical } from "../store/slices/physicalSlice/physicalDataType";
import { apiPrivate } from "./api";

const createPhysical = async (data: IPhysical) => {
  try {
    const response = await apiPrivate.post("/physical/create", data);
    console.log(response);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }

    console.log("Handle Get My Profile Error: ", error);
  }
};

const getAllUserPhysicals = async (id: string) => {
  try {
    const response = await apiPrivate.get(`/physical/all/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }

    console.log("Handle Get My Profile Error: ", error);
  }
};

export const physicalService = {
  createPhysical,
  getAllUserPhysicals,
};
