import Banner from "@/Components/Banner/Banner";
import PhotoCard from "@/Components/PhotoCard/PhotoCard";
import { getPhotosData } from "@/lib/getData";

const HomePage = async () => {
  const allPhotos = await getPhotosData();

  return (
    <div className="my-6 md:my-10 px-2">
      <Banner></Banner>

      <h2 className="text-2xl font-bold mt-6 md:mt-10 ">Top Generator</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allPhotos.slice(0, 8).map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
