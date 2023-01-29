import dayjs from "dayjs";

class BlogPost {
  constructor(title, description, datePublished) {
    this.title = title;
    this.description = description;
    this.datePublished = datePublished;
  }

  print() {
    console.log("Title: " + this.title);
    console.log("Description: " + this.description);
    console.log("Published: " + this.datePublished);
  }
}

const title = "Clean Code Is Great!";
const description =
  "Actually, writing Clean Code can be pretty fun. You'll see!";
const newDate = dayjs();
const formattedPublishedDate = newDate.format("YYYY-MM-D H:mm");

const blogPost = new BlogPost(title, description, formattedPublishedDate);

blogPost.print();
