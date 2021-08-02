import React from "react";
import Autosuggest from "react-autosuggest";
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
}: Props) => {
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
      getSectionSuggestions={getSectionSuggestions}
      inputProps={inputProps}
    />
  );
};

export default AutosuggestInput;