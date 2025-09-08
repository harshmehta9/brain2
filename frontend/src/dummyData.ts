// Dummy data for ContentSchema
export const dummyContentData = [
  {
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    photourl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
    title: "Amazing React Tutorial",
    note: "This is a comprehensive guide to learning React from scratch. Covers components, hooks, state management, and more.",
    tages: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439012"], // Sample ObjectIds for tags
    userId: "507f1f77bcf86cd799439013", // Sample ObjectId for user
    createdAt: new Date("2024-01-15T10:30:00Z")
  },
  {
    link: "https://github.com/facebook/reactkjalksdjflkajlkdsjflkajslkdjflkajsdlkfjalskjdflkjaslkdjflkajdlfkj;aljdsf;lkjas;ldjf;lasjkd;lfja;ldsjf;lkajsd;lkfjas;ldjf;lkasjdf",
    photourl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
    title: "React GitHub Repository",
    note: "Official React repository on GitHub. Great resource for contributing and understanding React's source code.",
    tages: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439014"],
    userId: "507f1f77bcf86cd799439013",
    createdAt: new Date("2024-02-20T14:45:00Z")
  },
//   {
//     link: "https://reactjs.org/docs/getting-started.html",
//     photourl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
//     title: "React Documentation",
//     note: "Official React documentation with all the APIs, guides, and tutorials you need.",
//     tages: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439015"],
//     userId: "507f1f77bcf86cd799439016",
//     createdAt: new Date("2024-03-10T09:15:00Z")
//   },
//   {
//     link: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
//     photourl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
//     title: "FreeCodeCamp Frontend Libraries",
//     note: "Complete course on frontend libraries including React, Redux, and more. Perfect for beginners.",
//     tages: ["507f1f77bcf86cd799439012", "507f1f77bcf86cd799439017"],
//     userId: "507f1f77bcf86cd799439018",
//     createdAt: new Date("2024-04-05T16:20:00Z")
//   },
//   {
//     link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
//     photourl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
//     title: "CSS Flexbox Guide",
//     note: "Complete guide to CSS Flexbox layout. Essential for modern web development and responsive design.",
//     tages: ["507f1f77bcf86cd799439019", "507f1f77bcf86cd799439020"],
//     userId: "507f1f77bcf86cd799439013",
//     createdAt: new Date("2024-05-12T11:30:00Z")
//   },
//   {
//     link: null, // Testing optional field
//     photourl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400",
//     title: "No-title", // Testing default value
//     note: "Personal notes about JavaScript best practices and coding standards for maintainable code.",
//     tages: ["507f1f77bcf86cd799439021"],
//     userId: "507f1f77bcf86cd799439016",
//     createdAt: new Date("2024-06-18T13:45:00Z")
//   },
//   {
//     link: "https://tailwindcss.com/docs",
//     photourl: null, // Testing optional field
//     title: "Tailwind CSS Documentation",
//     note: "Utility-first CSS framework documentation. Great for rapid UI development.",
//     tages: ["507f1f77bcf86cd799439019", "507f1f77bcf86cd799439022"],
//     userId: "507f1f77bcf86cd799439018",
//     createdAt: new Date("2024-07-25T08:10:00Z")
//   },
//   {
//     link: "https://www.mongodb.com/docs/",
//     photourl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
//     title: "MongoDB Documentation",
//     note: "Complete MongoDB documentation covering database operations, aggregation, indexing, and more.",
//     tages: ["507f1f77bcf86cd799439023", "507f1f77bcf86cd799439024"],
//     userId: "507f1f77bcf86cd799439013",
//     createdAt: new Date("2024-08-30T15:55:00Z")
//   }
];

// Individual dummy content item for testing
export const singleDummyContent = {
  link: "https://nodejs.org/en/docs/",
  photourl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
  title: "Node.js Documentation",
  note: "Official Node.js documentation with guides, API references, and tutorials for server-side JavaScript.",
  tages: ["507f1f77bcf86cd799439025", "507f1f77bcf86cd799439026"],
  userId: "507f1f77bcf86cd799439027",
  createdAt: new Date()
};

// Sample tag data that corresponds to the ObjectIds used above
export const dummyTagsData = [
  { _id: "507f1f77bcf86cd799439011", name: "React", color: "#61DAFB" },
  { _id: "507f1f77bcf86cd799439012", name: "JavaScript", color: "#F7DF1E" },
  { _id: "507f1f77bcf86cd799439014", name: "GitHub", color: "#181717" },
  { _id: "507f1f77bcf86cd799439015", name: "Documentation", color: "#4CAF50" },
  { _id: "507f1f77bcf86cd799439017", name: "Tutorial", color: "#FF9800" },
  { _id: "507f1f77bcf86cd799439019", name: "CSS", color: "#1572B6" },
  { _id: "507f1f77bcf86cd799439020", name: "Flexbox", color: "#663399" },
  { _id: "507f1f77bcf86cd799439021", name: "Best Practices", color: "#9C27B0" },
  { _id: "507f1f77bcf86cd799439022", name: "TailwindCSS", color: "#06B6D4" },
  { _id: "507f1f77bcf86cd799439023", name: "MongoDB", color: "#47A248" },
  { _id: "507f1f77bcf86cd799439024", name: "Database", color: "#E91E63" },
  { _id: "507f1f77bcf86cd799439025", name: "Node.js", color: "#339933" },
  { _id: "507f1f77bcf86cd799439026", name: "Backend", color: "#795548" }
];

// Sample user data that corresponds to the ObjectIds used above
export const dummyUsersData = [
  { _id: "507f1f77bcf86cd799439013", name: "John Doe", email: "john@example.com" },
  { _id: "507f1f77bcf86cd799439016", name: "Jane Smith", email: "jane@example.com" },
  { _id: "507f1f77bcf86cd799439018", name: "Bob Johnson", email: "bob@example.com" },
  { _id: "507f1f77bcf86cd799439027", name: "Alice Brown", email: "alice@example.com" }
];
