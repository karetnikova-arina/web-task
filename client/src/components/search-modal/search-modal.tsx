import { ChangeEventHandler, FC, useState } from "react";
import { Input, Modal, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import "./search-modal.css";
import { servicesApi } from "../../store/services";
import { Link } from "react-router-dom";

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};
export const SearchModal: FC<SearchModalProps> = ({ open, onClose }) => {
  const { data: servicesData } = servicesApi.useGetServicesQuery();

  const [search, setSearch] = useState("");

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Modal
      className="search_modal"
      onClose={onClose}
      opened={open}
      withCloseButton={false}
    >
      <Input
        value={search}
        onChange={handleSearchChange}
        className="search_modal__input"
        icon={<IconSearch size={16} />}
        placeholder="Поиск услуг"
        inputMode="search"
        radius="md"
      />
      <ul className="search_modal__list">
        {servicesData?.services
          ?.filter((service) => {
            return service.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((service) => {
            return (
              <li key={service.id}>
                <Text className="search_modal__link">
                  <Link to={`service/${service.id}`}>{service.name}</Link>
                </Text>
              </li>
            );
          })}
      </ul>
    </Modal>
  );
};
