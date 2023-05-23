import { FC, useState } from "react";
import { Title } from "@mantine/core";

import "./main.css";
import { categoriesApi } from "../../store/categories";
import { SegmentedControl } from "@mantine/core";
import { servicesApi } from "../../store/services";
import { Header } from "../../components";

const categoriesDictionary = {
  all: "Все",
  face: "Лицо",
  hair: "Волосы",
  body: "Тело",
  hands: "Руки",
  foot: "Ноги",
};

export const MainPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("0");
  const { data: categoriesData } = categoriesApi.useGetCategoriesQuery();
  const { data: servicesData } = servicesApi.useGetServicesQuery();

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <Header />
      <main className="main__container">
        <section className="main__promo">
          <Title order={1}>
            Успейте побывать в <u>лучшем</u> <br /> салоне красоты Москвы
          </Title>
          <img
            width="320"
            className="promo__image"
            src="https://beautyflow.com.au/wp-content/uploads/2021/06/Home-Beauty-Flow-Hair-Nails-and-Beauty-Salon.jpeg"
            alt="Beauty Salon"
          />
        </section>
        <section className="main__services">
          <Title order={2} align="center">
            Наши услуги
          </Title>
          <div className="services">
            {categoriesData?.categories && (
              <SegmentedControl
                className="services__categories"
                value={selectedCategory}
                onChange={handleCategoryChange}
                orientation="vertical"
                data={categoriesData.categories.map((category) => ({
                  label:
                    categoriesDictionary[
                      category.name as keyof typeof categoriesDictionary
                    ],
                  value: category.id.toString(),
                }))}
              />
            )}

            <ul className="services__list">
              {servicesData?.services
                .filter(
                  (service) =>
                    service.categoryId.toString() === selectedCategory ||
                    selectedCategory === "0"
                )
                .map((service) => (
                  <li key={service.id}>
                    <Title order={4}>{service.name}</Title>
                    <p>{service.description}</p>
                  </li>
                ))}
            </ul>
          </div>
        </section>
        <section className="main__services"></section>
      </main>
    </>
  );
};
