const mapProductsToSuggestions = (data: Products) =>
  data.map((group) => ({
    ...group,
    title: group.name,
    suggestions: group.products.map((prod) => ({
      ...prod,
      title: prod.name,
      id: prod.typeId,
    })),
  }));

export { mapProductsToSuggestions };
