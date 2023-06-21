import { axios } from "@/lib/axios";

export const getProperties = async (num) => {
  try {
    const { data } = await axios.get("/properties/list", {
      params: {
        locationExternalIDs: "5002,6020",
        purpose: "for-sale",
        hitsPerPage: num,
        lang: "en",
        sort: "city-level-score",
        hasVideo: true,
        hasFloorPlan: true,
        hasPanorama: true,
      },
    });
    return data.hits;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};
