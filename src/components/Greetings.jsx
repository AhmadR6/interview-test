export default function Greetings() {
  const time = new Date();
  let hours = time.getHours();
  let AMPM = hours >= 12 ? "PM" : "AM";

  let greeting = "Good Morning";
  if (hours < 12 && AMPM === "AM") {
    greeting = "Good Morning";
  } else if (hours < 18 && AMPM === "PM") {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <h1 className="greetings">
      Time: {hours} {AMPM} Message: {greeting}
    </h1>
  );
}
