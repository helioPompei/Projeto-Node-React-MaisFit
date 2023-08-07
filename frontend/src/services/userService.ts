import { AxiosError } from "axios";
import { apiPrivate } from "./api";

const getMyProfile = async () => {
  try {
    const response = await apiPrivate.get("/user/profile");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }

    console.log("Handle Get My Profile Error: ", error);
  }
};

const getOneProfile = async (id: string) => {
  try {
    const response = await apiPrivate.get(`/user/profile/${id}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }

    console.log("Handle Get My Profile Error: ", error);
  }
};

const getAllProfiles = async () => {
  try {
    const response = await apiPrivate.get("/user/profiles");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }

    console.log("Handle Get My Profile Error: ", error);
  }
};

export const userService = {
  getMyProfile,
  getOneProfile,
  getAllProfiles,
};
