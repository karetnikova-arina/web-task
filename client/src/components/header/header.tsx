import { FC } from "react";

import { Text, Title } from "@mantine/core";

import "./header.css";
export const Header: FC = () => {
  return (
    <header className="header__container">
      <Title className="header__logo" order={3}>
        Beauty Salon
      </Title>

      <div className="header__contact">
        <a className="contact__link" href="tel:+7 (999) 999-99-99">
          <Text>+7 (999) 999-99-99</Text>
        </a>
      </div>
    </header>
  );
};
