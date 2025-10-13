import React, {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";

//ChoiceBoxItemsContext
type ChoiceBoxItemsContext = {
  items: ChoiceItem[];
};

const ChoiceBoxItemsContext = createContext<ChoiceBoxItemsContext | undefined>(
  undefined
);

function useChoiceBoxItemsContext() {
  const context = useContext(ChoiceBoxItemsContext);
  if (!context)
    throw new Error(
      "The useChoiceBoxItemsContext Context must be declared within the ChoiceBox"
    );
  return context;
}

//ChoiceBoxItemContext
type ChoiceBoxItemContext = PropsWithChildren & {
  item?: ChoiceItem;
  toggleSelection: (item: ChoiceItem) => void;
  isChecked: boolean;
  selectedItem?: ChoiceItem;
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<ChoiceItem | undefined>
  >;
};

const ChoiceBoxItemContext = createContext<ChoiceBoxItemContext | undefined>(
  undefined
);

function useChoiceBoxItemContext() {
  const context = useContext(ChoiceBoxItemContext);
  if (!context)
    throw new Error(
      "The useChoiceBoxItemContext Context must be declared within the ChoiceBox"
    );
  return context;
}

type ChoiceItem = {
  id: number;
  title: string;
  description: string;
};

type ChoiceBoxProps = PropsWithChildren & {
  items: ChoiceItem[];
};

export default function ChoiceBox({ items, children }: ChoiceBoxProps) {
  return (
    <ChoiceBoxItemsContext.Provider
      value={{
        items,
      }}
    >
      <div className="min-h-screen flex justify-center items-center">
        {children}
      </div>
    </ChoiceBoxItemsContext.Provider>
  );
}

ChoiceBox.Content = function ChoiceBoxContent({ children }: PropsWithChildren) {
  const { items } = useChoiceBoxItemsContext();
  const [selectedItem, setSelectedItem] = useState<ChoiceItem | undefined>(
    undefined
  );
  const toggleSelection = (item: ChoiceItem) => {
    setSelectedItem((prev) => (prev?.id === item.id ? undefined : item));
  };
  return (
    <div className="border border-black rounded-2xl">
      {items.map((item) => {
        const isChecked = selectedItem?.id === item.id;
        return (
          <ChoiceBoxItemContext.Provider
            value={{
              item,
              selectedItem,
              setSelectedItem,
              isChecked,
              toggleSelection,
            }}
            key={item.id}
          >
            <div
              key={item.id}
              className="flex flex-col bg-amber-100 m-4 rounded-2xl border-2 border-amber-400 max-w-[400px] p-4 hover:bg-amber-200 cursor-pointer gap-2"
              onClick={() => {
                toggleSelection(item);
                console.log(item);
              }}
            >
              {children}
            </div>
          </ChoiceBoxItemContext.Provider>
        );
      })}
    </div>
  );
};

type ChoiceBoxCheckboxProps = {
  className?: string;
};

ChoiceBox.Checkbox = function ChoiceBoxCheckbox({
  className,
}: ChoiceBoxCheckboxProps) {
  const { isChecked } = useChoiceBoxItemContext();

  return (
    <div className="flex justify-end">
      <Checkbox
        className={cn("rounded-full border-amber-400 ", className)}
        checked={isChecked}
      />
    </div>
  );
};

type ChoiceBoxTitleProps = {
  className?: string;
};

ChoiceBox.Title = function ChoiceBoxTitle({ className }: ChoiceBoxTitleProps) {
  const { item } = useChoiceBoxItemContext();
  return (
    <h1 className={cn("text-3xl font-extrabold", className)}>{item?.title}</h1>
  );
};

type ChoiceBoxDescriptionProps = {
  className?: string;
};

ChoiceBox.Description = function ChoiceBoxDescription({
  className,
}: ChoiceBoxDescriptionProps) {
  const { item } = useChoiceBoxItemContext();
  return <p className={cn("", className)}>{item?.description}</p>;
};
