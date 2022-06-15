import SortingTypes from "./SortingTypes";

export type SortingOption = {
   value: SortingTypes,
   text: string,
}

const SortingOptions: SortingOption[] = [
   { value: SortingTypes.Default, text: "Обычный" },
   { value: SortingTypes.ByPriceAscendig, text: "Цена по возрастанию" },
   { value: SortingTypes.ByPriceDescending, text: "Цена по убыванию" },
   { value: SortingTypes.OnlySales, text: "Акции" },
]

export default SortingOptions;
