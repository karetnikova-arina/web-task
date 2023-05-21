import { FC } from "react";
import { useParams } from "react-router-dom";

export const ServicePage: FC = () => {
  const { service } = useParams();
  return <div>service {service}</div>;
};
