import PhotoCard from "@/Components/PhotoCard/PhotoCard";
import { getPhotosData } from "@/lib/getData";

const AllPhotosPage = async () => {
  const allPhotos = await getPhotosData();

  return (
    <div className="my-6 md:my-10 px-2">
      <h2 className="text-2xl font-bold">All Photos</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
