import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAnimateContainer } from "../redux/slice/annimations";
import { directions, types } from "../constants";

const Code = ({ mode }) => {
  const [code, setCode] = useState(() => "");

  const animateContainer = useSelector(selectAnimateContainer);
  const { annimType, delay, direction, duration, type } = animateContainer;
  const name = useSelector((state) => state.headerName.name);

  console.log(name);
  const directionOptions = directions.map((direction, index) => (
    <option value={direction.name} key={index}>
      {direction.name}
    </option>
  ));
  const typeOptions = types.map((type, index) => (
    <option value={type.name} key={index}>
      {type.name}
    </option>
  ));

  useEffect(() => {
    // Build the code block based on the animation options
    let code = "";

    if (annimType === "text") {
      code = `
    import { motion } from "framer-motion";

    const ${name} = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: ${delay / 1000} } }}
        >
        
          This is a text

        </motion.div>
      );
    };

    export default ${name};
  `;
    } else if (annimType === "zoom") {
      code = `
    import { motion } from "framer-motion";

    const ${name} = () => {
      return (
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { delay: ${delay / 1000}, duration: ${
        duration / 1000
      }, ease: "easeIn" },
          }}
        >
        
          This is a text

        </motion.div>
      );
    };

    export default ${name};
  `;
    } else if (annimType === "fade") {
      let directionValue = "";

      if (direction === "Up") {
        directionValue = "-100%";
      } else if (direction === "Down") {
        directionValue = "100%";
      } else if (direction === "Left") {
        directionValue = "-100%";
      } else if (direction === "Right") {
        directionValue = "100%";
      }

      code = `
    import { motion } from "framer-motion";

    const ${name} = () => {
      return (
        <motion.div
          initial={{
            opacity: 0,
            ${direction}: "${directionValue}",
          }}
          animate={{
            opacity: 1,
            ${direction}: 0,
            transition: { type: "${type}", delay: ${delay / 1000}, duration: ${
        duration / 1000
      } },
          }}
        >
        
          This is a text

        </motion.div>
      );
    };

    export default ${name};
  `;
    } else if (annimType === "slide") {
      let directionValue = "";

      if (direction === "Up") {
        directionValue = "-100%";
      } else if (direction === "Down") {
        directionValue = "100%";
      } else if (direction === "Left") {
        directionValue = "-100%";
      } else if (direction === "Right") {
        directionValue = "100%";
      }

      code = `
    import { motion } from "framer-motion";

    const ${name} = () => {
      return (
        <motion.div
          initial={{ ${direction}: "${directionValue}" }}
          animate={{
            ${direction}: 0,
            transition: { type: "${type}", delay: ${delay / 1000}, duration: ${
        duration / 1000
      } },
          }}
        >
        
          This is a text

        </motion.div>
      );
    };

    export default ${name};
  `;
    }

    if (code !== "") {
      code = `
        ${code}
      `;
    }

    setCode(code);
  }, [annimType, delay, direction, duration, type]);

  if (mode === "code") {
    return (
      <pre>
        <code>{code}</code>
      </pre>
    );
  } else {
    return null;
  }
};
export default Code;
