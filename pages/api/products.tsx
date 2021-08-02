import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../mocks/data.json";

function randomDelay() {
  return 300 + Math.random() * 1000;
}

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const { search } = req.query;
  let responseData: Products = [];
  
  data.forEach((group: ProductGroup) => {
    const foundItems = group.products.filter((el) =>
      el.name
        .toLowerCase()
        .includes(typeof search === "string" ? search : search[0])
    );
    const newGroup = { ...group, products: foundItems };
    if (foundItems && foundItems.length > 0) {
      responseData.push(newGroup);
    }
  });

  return setTimeout(() => res.json(responseData), randomDelay());
};
