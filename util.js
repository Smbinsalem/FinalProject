import env from "./env";

export const completeImgPath = (imgurl) => {
  console.log(imgurl.toLowerCase().startsWith("http"));
  if (imgurl.toLowerCase().startsWith("http")) return imgurl;

  return `${env.SERVER}${imgurl}`;
};
