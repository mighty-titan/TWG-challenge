import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import { fetcher } from "../../helpers";
import AutosuggestInput from "../AutosuggestInput";
import { CloseIcon } from "../Icons";
import styles from "./SearchModal.module.css";
import debounce from 'lodash.debounce';

const customStyles = {
  groupHeading: () => ({
    fontSize: 18,
    fontWeight: 700,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    background: "#ededed",
  }),
  option: () => ({
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  }),
};
type Props = {
  isOpen: boolean;
};

const SearchModal = ({ isOpen }: Props) => {
  const [option, setOption] = useState("");
  const [options, setOptions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onOptionsLoad = async ({ value }: { value: string }) => {
    setLoading(true)

    const data = await fetcher(`/api/products?search=${value}`);
    console.log(data);
    
    const optionsFromQuery = data.map((group) => ({
      ...group,
      title: group.name,
      suggestions: group.products.map((prod) => ({
        ...prod,
        title: prod.name,
        id: prod.typeId,
      })),
    }));

    if(data && data.length > 0) setOptions(optionsFromQuery);
    else setOptions([])
    
    setLoading(false)
  };

  const debouncedLoad = useMemo(() =>  debounce(onOptionsLoad, 150), [])
  const onClear = () => setOptions([]);

  const inputProps = {
    value: option,
    placeholder: "Machine name",
    onChange: (
      event: React.FormEvent<HTMLInputElement>,
      { newValue }: { newValue: string }
    ) => setOption(newValue),
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.searchModalContainer}
      className={styles.searchModal}
    >
      <div className="d-flex justify-content-between align-content-center bg-light px-4 py-3">
        <h2 className="mb-0">DIRECT REQUEST</h2>
        <Link href="/">
          <a>
            <CloseIcon />
          </a>
        </Link>
      </div>
      <div className="px-4 py-2">
        <AutosuggestInput
          options={options}
          onClear={onClear}
          onOptionsLoad={debouncedLoad}
          inputProps={inputProps}
          isLoading={isLoading}
        />
      </div>
    </Modal>
  );
};

export default SearchModal;
