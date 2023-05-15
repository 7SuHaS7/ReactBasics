import "./Card.css";

export default function Card(prop) {
  const classes = "Card " + prop.className;
  return <div className={classes}>{prop.children}</div>;
}
