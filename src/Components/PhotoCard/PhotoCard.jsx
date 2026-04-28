import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const PhotoCard = ({ photo }) => {
  return (
    <div>
      <Card className="border rounded-md space-y-2">
        <Card.Header>
          <div>
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              height={400}
              width={400}
              className="rounded-md relative"
            ></Image>

            <Chip className="absolute top-6 right-6">{photo.category}</Chip>
          </div>

          <Card.Title className="font-semibold text-lg mt-4">
            {photo.title}
          </Card.Title>
          <Card.Description className="mt-2">
            Visit the Acme Creator Hub to sign up today and start earning
            credits from your fans and followers.
          </Card.Description>
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
