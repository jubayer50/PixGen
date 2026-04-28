import { Button, Card, Chip } from "@heroui/react";
import { Heart, ArrowDownToLine } from "@gravity-ui/icons";
import Image from "next/image";

const PhotoCard = ({ photo }) => {
  return (
    <div>
      <Card className="border rounded-md space-y-2">
        <Card.Header>
          <div className="">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              height={400}
              width={400}
              className="rounded-md relative aspect-square object-cover"
            ></Image>

            <Chip className="absolute top-6 right-6">{photo.category}</Chip>
          </div>

          <Card.Title className="font-semibold text-lg mt-4">
            {photo.title}
          </Card.Title>

          <div className="flex justify-between items-center  mt-2">
            <div>
              <p className="flex items-center gap-2">
                {" "}
                <Heart></Heart> {photo.likes}
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2">
                {" "}
                <ArrowDownToLine></ArrowDownToLine> {photo.downloads}
              </p>
            </div>
          </div>
        </Card.Header>
        <Card.Footer>
          <Button variant="outline" className={"w-full"}>
            View Details
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PhotoCard;
