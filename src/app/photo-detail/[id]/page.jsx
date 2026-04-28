import { getPhotosData } from "@/lib/getData";
import { ArrowDownToLine, Heart } from "@gravity-ui/icons";
import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;

  const allPhotos = await getPhotosData();

  const targetPhoto = allPhotos.find((photo) => photo.id == id);

  return (
    <Card className="max-w-160 my-10 md:my-20 border rounded-lg mx-auto">
      <div className="">
        <Image
          src={targetPhoto.imageUrl}
          alt={targetPhoto.title}
          width={400}
          height={400}
          className="w-full aspect-square object-cover rounded-lg"
        ></Image>
      </div>
      <div className="flex flex-1 flex-col gap-3 mt-4">
        <Card.Header className="gap-1">
          <Card.Title className="font-semibold text-xl">
            {targetPhoto.title}
          </Card.Title>
          <Card.Description className="mt-2">
            {targetPhoto.prompt}
          </Card.Description>

          <div className="flex justify-between items-center mt-2">
            <p>Category: {targetPhoto.category}</p>
            <p>Model: {targetPhoto.model}</p>
          </div>

          <div className="flex justify-between items-center  mt-2">
            <div>
              <p className="flex items-center gap-2">
                {" "}
                <Heart></Heart> {targetPhoto.likes}
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2">
                {" "}
                <ArrowDownToLine></ArrowDownToLine> {targetPhoto.downloads}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-medium text-[14px] mr-2">Tags:</span>{" "}
            {targetPhoto.tags.map((tag, i) => (
              <Chip className="mr-2.5" key={i}>
                {tag}
              </Chip>
            ))}
          </div>
        </Card.Header>
        <Card.Footer className=""></Card.Footer>
      </div>
    </Card>
  );
};

export default PhotoDetails;
