import { getPhotosData } from "@/lib/getData";
import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;

  const allPhotos = await getPhotosData();

  const targetPhoto = allPhotos.find((photo) => photo.id == id);

  return (
    <Card className="max-w-160 my-20 border rounded-lg mx-auto">
      <div className="">
        <Image
          src={targetPhoto.imageUrl}
          alt={targetPhoto.title}
          width={400}
          height={400}
          className="w-full aspect-square object-cover rounded-lg"
        ></Image>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="font-semibold text-xl">
            {targetPhoto.title}
          </Card.Title>
          <Card.Description>{targetPhoto.prompt}</Card.Description>
        </Card.Header>
        <Card.Footer className=""></Card.Footer>
      </div>
    </Card>
  );
};

export default PhotoDetails;
