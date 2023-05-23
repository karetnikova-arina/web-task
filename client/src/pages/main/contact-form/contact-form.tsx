import { FC, FormEventHandler } from "react";

import { Button, Input, MultiSelect } from "@mantine/core";

import "./contact-form.css";
import { IconAt } from "@tabler/icons-react";
import { DateInput, TimeInput } from "@mantine/dates";
import { servicesApi } from "../../../store/services";
import { notifications } from "@mantine/notifications";

export const ContactForm: FC = () => {
  const { data: servicesData, isLoading } = servicesApi.useGetServicesQuery();

  if (!servicesData?.services || isLoading) {
    return null;
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    notifications.show({
      title: "Вы успешно записались",
      message: "Мы скоро свяжемся с вами для уточнения деталей",
    });
  };

  return (
    <form className="contact_form__wrapper" onSubmit={handleSubmit}>
      <Input.Wrapper id="name" label="Ваше имя" withAsterisk>
        <Input id="name" placeholder="Jane Dow" required />
      </Input.Wrapper>
      <Input.Wrapper id="name" label="Ник в instagram" withAsterisk>
        <Input
          icon={<IconAt />}
          id="name"
          placeholder="lana_rhoades"
          required
        />
      </Input.Wrapper>
      <DateInput
        className="contact_form__date"
        label="Дата приема"
        minDate={new Date()}
        placeholder="Выберите дату..."
        mx="auto"
        required
      />
      <TimeInput
        label="Время приема"
        withAsterisk
        defaultValue="16:00"
        required
      />
      <MultiSelect
        data={servicesData.services.map((service) => ({
          value: service.id.toString(),
          label: service.name,
        }))}
        label="Выберите услугу (услуги)"
        required
        placeholder="Выберите..."
      />
      <Button variant="filled" color="dark" type="submit">
        Записаться
      </Button>
    </form>
  );
};
