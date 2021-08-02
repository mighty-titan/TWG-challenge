type ProductGroup = {
  groupId: number;
  familyId: number;
  name: string;
  products: Product[];
};

type Product = {
  groupId: number;
  typeId: number;
  name: string;
};

type Products = ProductGroup[]
