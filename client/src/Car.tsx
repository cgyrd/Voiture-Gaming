import React, { useRef, useEffect, useState } from "react";
import { Image as KonvaImage } from "react-konva";

interface CarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  imageUrl: string; // Nouvelle prop pour passer l'URL de l'image
}

const Car = ({ x, y, width, height, imageUrl }: CarProps) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = imageUrl;
    img.onload = () => {
      setImage(img);
    };
  }, [imageUrl]);

  return image ? (
    <KonvaImage x={x} y={y} width={width} height={height} image={image} />
  ) : null;
};

export default Car;
