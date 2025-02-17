
import colors from "./colors";
import typography from "./typography";
import fontFamily from "./fontFamily"; 
import fontWeight from "./fontWeight";
import gradient from "./gradient";
import lineHeight from "./lineHeight";
import boxShadow from "./boxShadow";


export default {
    theme: {
      extend: {
        colors : colors,
        fontSize: typography,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        backgroundImage: gradient,
        lineHeight: lineHeight,
        boxShadow : boxShadow
      },
    },
  };