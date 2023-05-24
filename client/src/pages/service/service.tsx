import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components";
import { servicesApi } from "../../store/services";

import { IconArrowBackUp } from "@tabler/icons-react";

import "./service.css";
import { Text, Title } from "@mantine/core";

export const ServicePage: FC = () => {
  const { service: serviceId } = useParams();
  const { data: serviceData } = servicesApi.useGetServiceByIdQuery(
    +(serviceId as string),
    { skip: !serviceId }
  );

  return (
    <>
      <Header />
      <main className="service_page__wrapper">
        <div className="service_page__container">
          <Text className="service_page__link print_removable">
            <IconArrowBackUp
              size={16}
              style={{ transform: "translateY(2px)", marginRight: "5px" }}
            />
            <Link to={"/"}>Вернуться ко всем услугам</Link>
          </Text>

          <section className="service_page__service">
            <div className="service">
              <div className="service__text">
                <Title order={1}>{serviceData?.name}</Title>
                <Text>{serviceData?.description}</Text>
                <Text className="service__price">
                  Цена: {serviceData?.price}₽
                </Text>
              </div>
              <img
                width="400"
                className="service__image"
                src={serviceData?.imageUrl}
                alt={serviceData?.name}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
