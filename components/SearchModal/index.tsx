import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import { fetcher } from "../../helpers";
import AutosuggestInput from "../AutosuggestInput";
import { CloseIcon } from "../Icons";
import styles from "./SearchModal.module.css";
import debounce from "lodash.debounce";
import { mapProductsToSuggestions } from "../../helpers/dataTransform";
import { useRouter } from "next/dist/client/router";

type Props = {
  isOpen: boolean;
};

const SearchModal = ({ isOpen }: Props) => {
  const router = useRouter();
  const urlParams = new URLSearchParams(router?.asPath.split("?")[1]);
  const searchQuery = urlParams.get("query");
  const [value, setValue] = useState(searchQuery || "");
  const [options, setOptions] = useState<Products | []>([]);
  const [isLoading, setLoading] = useState(false);

  const onOptionsLoad = async ({ value }: { value: string }) => {
    setLoading(true);

    const data = await fetcher(`/api/products?query=${value}`);
    const optionsFromQuery = mapProductsToSuggestions(data);

    if (data && data.length > 0) setOptions(optionsFromQuery);
    else setOptions([]);

    setLoading(false);
  };

  const debouncedLoad = useMemo(() => debounce(onOptionsLoad, 250), []);
  const onClear = () => setOptions([]);
  const handleChange = (
    event: React.FormEvent<HTMLInputElement>,
    { newValue }: { newValue: string }
  ) => {    
    router.push({
      pathname: router.pathname,
      query: { query: newValue }
    }, 
    undefined, { shallow: true })
    setValue(newValue)
  };

  const inputProps = {
    value,
    placeholder: "Machine name",
    onChange: handleChange,
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.searchModalContainer}
      className={styles.searchModal}
      ariaHideApp={false}
    >
      <div className="d-flex justify-content-between align-content-center bg-light px-4 py-3">
        <h2 className="mb-0">DIRECT REQUEST</h2>
        <Link href="/">
          <a data-testid="closeModalButton">
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
