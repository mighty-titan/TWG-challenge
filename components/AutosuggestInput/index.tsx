import React, { useEffect, useRef } from "react";
import Autosuggest from "react-autosuggest";
import Loader from "../Loader";
import theme from "./InputTheme.module.css";

type Suggestion = {
  name: string;
};

type Section = {
  title: string;
  suggestions: Suggestion[];
};

type Props = {
  options: Suggestion[];
  inputProps: {
    value: string;
    onChange: (
      e: React.FormEvent<HTMLInputElement>,
      { newValue }: { newValue: string }
    ) => void;
    placeholder: string;
  };
  onClear: () => void;
  onOptionsLoad: ({ value }: { value: string }) => void;
  isLoading: boolean;
};

const getSuggestionValue = ({ name }: Suggestion) => name;

const renderSuggestion = ({ name }: Suggestion) => <span>{name}</span>;

const renderSectionTitle = (section: Section) => (
  <strong>{section.title}</strong>
);

const getSectionSuggestions = (section: Section) => section.suggestions;

const AutosuggestInput = ({
  options,
  inputProps,
  onClear,
  onOptionsLoad,
  isLoading,
}: Props) => {
  const inputRef = useRef<any>(null);

  const renderSuggestionContainer = ({
    containerProps,
    children,
  }: {
    containerProps: React.HTMLProps<HTMLDivElement>;
    children: React.ReactChild;
  }) => {
    return isLoading ? (
      <div {...containerProps}>
        <Loader />
      </div>
    ) : (
      <div {...containerProps}>{children}</div>
    );
  };

  useEffect(() => {
    if (inputProps.value && inputRef.current) {
      inputRef.current.input.focus();
    }
  });

  return (
    <Autosuggest
      theme={theme}
      suggestions={options}
      multiSection={true}
      onSuggestionsFetchRequested={onOptionsLoad}
      onSuggestionsClearRequested={onClear}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderSectionTitle={renderSectionTitle}
      renderSuggestionsContainer={renderSuggestionContainer}
      getSectionSuggestions={getSectionSuggestions}
      inputProps={inputProps}
      ref={inputRef}
    />
  );
};

export default AutosuggestInput;
