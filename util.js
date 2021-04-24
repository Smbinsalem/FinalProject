import env from "./env";

export const completeImgPath = (imgurl) => {
  if (imgurl.toLowerCase().startsWith("http")) return imgurl;

  return `${env.SERVER}${imgurl}`;
};
