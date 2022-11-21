import request from "../request";

export const getHomeGoodPriceData = () =>
  request.get({ url: "/home/goodprice" });
