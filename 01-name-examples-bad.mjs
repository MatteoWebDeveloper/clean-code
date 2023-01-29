import dayjs from "dayjs";

class Entity {
  constructor(title, description, ymdhm) {
    this.title = title;
    this.description = description;
    this.ymdhm = ymdhm;
  }
}

function output(item) {
  console.log("Title: " + item.title);
  console.log("Description: " + item.description);
  console.log("Published: " + item.ymdhm);
}

const summary = "Clean Code Is Great!";
const desc = "Actually, writing Clean Code can be pretty fun. You'll see!";
const newDate = dayjs();
const publish = newDate.format("YYYY-MM-D H:mm");

const item = new Entity(summary, desc, publish);

output(item);
