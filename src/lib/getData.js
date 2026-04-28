export const getPhotosData = async () => {
  const res = await fetch("https://pix-gen-self.vercel.app/data.json");
  const data = await res.json();
  return data;
};
