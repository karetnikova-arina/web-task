import { FC } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components";
import { servicesApi } from "../../store/services";

export const ServicePage: FC = () => {
  const { service: serviceId } = useParams();
  const { data: serviceData, isLoading } = servicesApi.useGetServiceByIdQuery(
    +(serviceId ?? "0")
  );

  return (
    <>
      <Header />
      <main>service {serviceData?.name}</main>
    </>
  );
};
