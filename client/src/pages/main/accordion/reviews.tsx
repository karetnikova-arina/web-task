import {
  Group,
  Avatar,
  Text,
  Accordion,
  Title,
  Input,
  Textarea,
  Button,
} from "@mantine/core";
import { FC } from "react";
import { ReviewsSlice, selectReviews } from "../../../store/reviews";
import { useAppSelector } from "../../../hooks/useAppSelector";

import { useForm } from "@mantine/form";

import "./reviews.css";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export const Reviews: FC = () => {
  const reviews = useAppSelector(selectReviews);
  const { addReview } = ReviewsSlice.actions;
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      label: "",
      description: "",
      content: "",
    },
    validate: {
      label: (value) => !value,
      content: (value) => !value,
      description: (value) => !value,
    },
    validateInputOnChange: true,
  });
  const handleSubmit = (values: {
    label: string;
    description: string;
    content: string;
  }) => {
    dispatch(
      addReview({ ...values, id: reviews.length.toString(), image: "" })
    );
  };

  const items = reviews.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>

      <Title order={2} align="center" className="add_review__heading">
        Добавить отзыв
      </Title>

      <form className="reviews__form" onSubmit={form.onSubmit(handleSubmit)}>
        <Input.Wrapper label="Ваше имя" withAsterisk>
          <Input
            placeholder="Jane Dow"
            required
            {...form.getInputProps("label")}
          />
        </Input.Wrapper>
        <Input.Wrapper label="Тема отзыва" withAsterisk>
          <Input
            placeholder="Придумайте тему..."
            required
            {...form.getInputProps("description")}
          />
        </Input.Wrapper>
        <Textarea
          required
          {...form.getInputProps("content")}
          label="Ваш отзыв"
          placeholder="Напишите отзыв..."
          withAsterisk
        />
        <Button disabled={!form.isValid()} type="submit" color="dark">
          Добавить отзыв
        </Button>
      </form>
    </>
  );
};
