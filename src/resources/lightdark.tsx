import { Colors } from "./colors/Colors";

export const getBackgroundColor = (theme: string) => {
  return theme == "LIGHT" ? Colors.white : Colors.backgroundblack;
};

export const getBtnColor = (theme: string) => {
  return theme == "LIGHT" ? Colors.black : Colors.white;
};

;
export const getBtnTxtColor = (theme: string) => {
    return theme == "LIGHT" ? Colors.white : Colors.black;
  };

  
  export const getNormalTxtColor = (theme: string) => {
    return theme == "LIGHT" ? Colors.black : Colors.white;
  };

  
  export const getPlaceHolderBackgroundColor = (theme: string) => {
    return theme == "LIGHT" ? Colors.white : Colors.placeholderdark;
  };
