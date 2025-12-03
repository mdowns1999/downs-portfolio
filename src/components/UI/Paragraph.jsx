import PropTypes from "prop-types";
import classes from "./Paragraph.module.css";

export default function Paragraph({
  children,
  className,
  style,
  size = "medium",
  bold = false,
}) {
  const paragraphClasses = [classes.text];

  // Apply size classes
  if (size === "small") {
    paragraphClasses.push(classes.small);
  } else if (size === "large") {
    paragraphClasses.push(classes.large);
  } else {
    paragraphClasses.push(classes.medium);
  }

  // Apply bold class
  if (bold) {
    paragraphClasses.push(classes.bold);
  }

  // Add any external class names
  if (className) {
    paragraphClasses.push(className);
  }

  // Join all active class names
  const finalClasses = paragraphClasses.join(" ");

  return (
    <p className={finalClasses} style={style}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  bold: PropTypes.bool,
};
