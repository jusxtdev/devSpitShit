import BlogCard from "../components/BlogCard";

const MOCK_DATA = [
  {
    title: "The Evolution of Modern Web Development",
    content: `Modern web development has undergone a remarkable transformation over the last decade. What once consisted primarily of static HTML pages has evolved into a sophisticated ecosystem of frameworks, build tools, cloud platforms, and APIs. Developers today have access to technologies that allow them to create applications rivaling traditional desktop software in both functionality and performance.

One of the biggest shifts has been the rise of JavaScript frameworks such as React, Vue, and Angular. These tools introduced component-based architectures, enabling developers to build reusable pieces of UI and maintain large codebases more effectively. Combined with TypeScript, they have significantly improved developer productivity and code reliability.

Backend development has also changed dramatically. Rather than managing physical servers, teams increasingly deploy applications using cloud providers and serverless platforms. Services such as AWS, Google Cloud, and Azure allow businesses to scale applications automatically while paying only for the resources they consume. This has lowered the barrier to entry for startups and independent developers alike.

Databases have expanded beyond traditional relational systems. While PostgreSQL and MySQL remain popular, NoSQL databases such as MongoDB and Redis have become essential tools for handling large volumes of semi-structured data and high-performance caching requirements.

Another major trend is the adoption of DevOps practices. Continuous integration and continuous deployment pipelines help teams release software more frequently and with greater confidence. Automated testing, infrastructure as code, and monitoring tools have become standard components of professional software development workflows.

Security has grown increasingly important as applications handle sensitive user data. Modern developers must understand authentication, authorization, encryption, and secure coding practices. Frameworks now provide many built-in protections, but developers remain responsible for implementing them correctly.

Looking ahead, artificial intelligence is beginning to influence every aspect of development. AI-assisted coding tools can generate boilerplate code, identify bugs, and even suggest architectural improvements. While these tools will not replace engineers, they are likely to become standard parts of the development toolkit.

The future of web development will continue to prioritize user experience, scalability, and maintainability. Developers who understand both foundational principles and emerging technologies will be best positioned to build successful applications in the years to come.`,
    imageURL: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    createdAt: Date.now(),
  },
  {
    title: "Understanding Database Design Fundamentals",
    content: `Database design remains one of the most important skills for software engineers. Regardless of the framework or programming language being used, nearly every application relies on storing and retrieving data efficiently. A poorly designed database can create performance bottlenecks, increase maintenance costs, and complicate future development efforts.

The first step in database design is understanding the business domain. Engineers must identify the entities involved, their relationships, and the types of information that need to be stored. For example, an e-commerce application might include customers, products, orders, and payments.

Normalization is a common technique used to reduce redundancy and improve data consistency. By organizing information into separate tables and defining relationships between them, developers can avoid duplicated data and maintain integrity more easily. However, excessive normalization can sometimes lead to complex queries and performance issues.

Primary keys and foreign keys are essential concepts in relational databases. A primary key uniquely identifies each record in a table, while foreign keys establish relationships between tables. Together, they form the backbone of relational data modeling.

Indexing is another critical consideration. Indexes improve query performance by allowing databases to locate records more efficiently. However, indexes consume storage space and can slow down write operations, so they should be applied strategically.

Scalability requirements should influence design decisions from the beginning. Applications expected to handle large volumes of traffic may require partitioning, replication, or caching strategies. Understanding anticipated workloads helps developers make informed architectural choices.

Security is equally important. Sensitive information such as passwords should never be stored in plain text. Instead, developers should use strong hashing algorithms and follow established security practices.

Good database design is not just about technology; it is about creating a structure that accurately represents business requirements while remaining flexible enough to evolve. Investing time in thoughtful design early in a project can save countless hours of troubleshooting and refactoring later.`,
    imageURL: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    createdAt: Date.now() - 86400000,
  },
  {
    title: "A Beginner's Guide to REST APIs",
    content: `REST APIs have become one of the most common methods for communication between software systems. Whether building a mobile app, a web application, or integrating with third-party services, developers frequently interact with RESTful interfaces.

REST stands for Representational State Transfer. It is an architectural style that uses standard HTTP methods to perform operations on resources. Common methods include GET, POST, PUT, PATCH, and DELETE. Each method corresponds to a specific action, making APIs intuitive and predictable.

Resources are typically represented by URLs. For example, a blog application might expose endpoints such as /posts, /posts/1, and /users. Clients interact with these resources by sending HTTP requests and receiving structured responses, often in JSON format.

One reason REST APIs are popular is their simplicity. Since they build upon the existing HTTP protocol, they can be consumed by virtually any programming language or platform. This interoperability has made REST a foundational technology for modern software development.

Error handling is an important aspect of API design. Developers should return meaningful status codes and descriptive error messages. This helps consumers of the API understand what went wrong and how to fix it.

Authentication and authorization are also essential. APIs often use technologies such as JWT tokens, OAuth, or API keys to ensure that only authorized users can access protected resources.

Documentation plays a significant role in API usability. Tools such as Swagger and OpenAPI help developers generate interactive documentation that simplifies integration for consumers.

While newer technologies such as GraphQL have gained popularity, REST remains widely used due to its maturity, simplicity, and extensive ecosystem. Understanding REST principles is therefore a valuable skill for any aspiring software engineer.`,
    imageURL: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    createdAt: Date.now() - 172800000,
  },
  {
    title: "The Evolution of Modern Web Development",
    content: `Modern web development has undergone a remarkable transformation over the last decade. What once consisted primarily of static HTML pages has evolved into a sophisticated ecosystem of frameworks, build tools, cloud platforms, and APIs. Developers today have access to technologies that allow them to create applications rivaling traditional desktop software in both functionality and performance.

One of the biggest shifts has been the rise of JavaScript frameworks such as React, Vue, and Angular. These tools introduced component-based architectures, enabling developers to build reusable pieces of UI and maintain large codebases more effectively. Combined with TypeScript, they have significantly improved developer productivity and code reliability.

Backend development has also changed dramatically. Rather than managing physical servers, teams increasingly deploy applications using cloud providers and serverless platforms. Services such as AWS, Google Cloud, and Azure allow businesses to scale applications automatically while paying only for the resources they consume. This has lowered the barrier to entry for startups and independent developers alike.

Databases have expanded beyond traditional relational systems. While PostgreSQL and MySQL remain popular, NoSQL databases such as MongoDB and Redis have become essential tools for handling large volumes of semi-structured data and high-performance caching requirements.

Another major trend is the adoption of DevOps practices. Continuous integration and continuous deployment pipelines help teams release software more frequently and with greater confidence. Automated testing, infrastructure as code, and monitoring tools have become standard components of professional software development workflows.

Security has grown increasingly important as applications handle sensitive user data. Modern developers must understand authentication, authorization, encryption, and secure coding practices. Frameworks now provide many built-in protections, but developers remain responsible for implementing them correctly.

Looking ahead, artificial intelligence is beginning to influence every aspect of development. AI-assisted coding tools can generate boilerplate code, identify bugs, and even suggest architectural improvements. While these tools will not replace engineers, they are likely to become standard parts of the development toolkit.

The future of web development will continue to prioritize user experience, scalability, and maintainability. Developers who understand both foundational principles and emerging technologies will be best positioned to build successful applications in the years to come.`,
    imageURL: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    createdAt: Date.now(),
  },
  {
    title: "Understanding Database Design Fundamentals",
    content: `Database design remains one of the most important skills for software engineers. Regardless of the framework or programming language being used, nearly every application relies on storing and retrieving data efficiently. A poorly designed database can create performance bottlenecks, increase maintenance costs, and complicate future development efforts.

The first step in database design is understanding the business domain. Engineers must identify the entities involved, their relationships, and the types of information that need to be stored. For example, an e-commerce application might include customers, products, orders, and payments.

Normalization is a common technique used to reduce redundancy and improve data consistency. By organizing information into separate tables and defining relationships between them, developers can avoid duplicated data and maintain integrity more easily. However, excessive normalization can sometimes lead to complex queries and performance issues.

Primary keys and foreign keys are essential concepts in relational databases. A primary key uniquely identifies each record in a table, while foreign keys establish relationships between tables. Together, they form the backbone of relational data modeling.

Indexing is another critical consideration. Indexes improve query performance by allowing databases to locate records more efficiently. However, indexes consume storage space and can slow down write operations, so they should be applied strategically.

Scalability requirements should influence design decisions from the beginning. Applications expected to handle large volumes of traffic may require partitioning, replication, or caching strategies. Understanding anticipated workloads helps developers make informed architectural choices.

Security is equally important. Sensitive information such as passwords should never be stored in plain text. Instead, developers should use strong hashing algorithms and follow established security practices.

Good database design is not just about technology; it is about creating a structure that accurately represents business requirements while remaining flexible enough to evolve. Investing time in thoughtful design early in a project can save countless hours of troubleshooting and refactoring later.`,
    imageURL: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    createdAt: Date.now() - 86400000,
  },
  {
    title: "A Beginner's Guide to REST APIs",
    content: `REST APIs have become one of the most common methods for communication between software systems. Whether building a mobile app, a web application, or integrating with third-party services, developers frequently interact with RESTful interfaces.

REST stands for Representational State Transfer. It is an architectural style that uses standard HTTP methods to perform operations on resources. Common methods include GET, POST, PUT, PATCH, and DELETE. Each method corresponds to a specific action, making APIs intuitive and predictable.

Resources are typically represented by URLs. For example, a blog application might expose endpoints such as /posts, /posts/1, and /users. Clients interact with these resources by sending HTTP requests and receiving structured responses, often in JSON format.

One reason REST APIs are popular is their simplicity. Since they build upon the existing HTTP protocol, they can be consumed by virtually any programming language or platform. This interoperability has made REST a foundational technology for modern software development.

Error handling is an important aspect of API design. Developers should return meaningful status codes and descriptive error messages. This helps consumers of the API understand what went wrong and how to fix it.

Authentication and authorization are also essential. APIs often use technologies such as JWT tokens, OAuth, or API keys to ensure that only authorized users can access protected resources.

Documentation plays a significant role in API usability. Tools such as Swagger and OpenAPI help developers generate interactive documentation that simplifies integration for consumers.

While newer technologies such as GraphQL have gained popularity, REST remains widely used due to its maturity, simplicity, and extensive ecosystem. Understanding REST principles is therefore a valuable skill for any aspiring software engineer.`,
    imageURL: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    createdAt: Date.now() - 172800000,
  },
  {
    title: "The Evolution of Modern Web Development",
    content: `Modern web development has undergone a remarkable transformation over the last decade. What once consisted primarily of static HTML pages has evolved into a sophisticated ecosystem of frameworks, build tools, cloud platforms, and APIs. Developers today have access to technologies that allow them to create applications rivaling traditional desktop software in both functionality and performance.

One of the biggest shifts has been the rise of JavaScript frameworks such as React, Vue, and Angular. These tools introduced component-based architectures, enabling developers to build reusable pieces of UI and maintain large codebases more effectively. Combined with TypeScript, they have significantly improved developer productivity and code reliability.

Backend development has also changed dramatically. Rather than managing physical servers, teams increasingly deploy applications using cloud providers and serverless platforms. Services such as AWS, Google Cloud, and Azure allow businesses to scale applications automatically while paying only for the resources they consume. This has lowered the barrier to entry for startups and independent developers alike.

Databases have expanded beyond traditional relational systems. While PostgreSQL and MySQL remain popular, NoSQL databases such as MongoDB and Redis have become essential tools for handling large volumes of semi-structured data and high-performance caching requirements.

Another major trend is the adoption of DevOps practices. Continuous integration and continuous deployment pipelines help teams release software more frequently and with greater confidence. Automated testing, infrastructure as code, and monitoring tools have become standard components of professional software development workflows.

Security has grown increasingly important as applications handle sensitive user data. Modern developers must understand authentication, authorization, encryption, and secure coding practices. Frameworks now provide many built-in protections, but developers remain responsible for implementing them correctly.

Looking ahead, artificial intelligence is beginning to influence every aspect of development. AI-assisted coding tools can generate boilerplate code, identify bugs, and even suggest architectural improvements. While these tools will not replace engineers, they are likely to become standard parts of the development toolkit.

The future of web development will continue to prioritize user experience, scalability, and maintainability. Developers who understand both foundational principles and emerging technologies will be best positioned to build successful applications in the years to come.`,
    imageURL: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    createdAt: Date.now(),
  },
  {
    title: "Understanding Database Design Fundamentals",
    content: `Database design remains one of the most important skills for software engineers. Regardless of the framework or programming language being used, nearly every application relies on storing and retrieving data efficiently. A poorly designed database can create performance bottlenecks, increase maintenance costs, and complicate future development efforts.

The first step in database design is understanding the business domain. Engineers must identify the entities involved, their relationships, and the types of information that need to be stored. For example, an e-commerce application might include customers, products, orders, and payments.

Normalization is a common technique used to reduce redundancy and improve data consistency. By organizing information into separate tables and defining relationships between them, developers can avoid duplicated data and maintain integrity more easily. However, excessive normalization can sometimes lead to complex queries and performance issues.

Primary keys and foreign keys are essential concepts in relational databases. A primary key uniquely identifies each record in a table, while foreign keys establish relationships between tables. Together, they form the backbone of relational data modeling.

Indexing is another critical consideration. Indexes improve query performance by allowing databases to locate records more efficiently. However, indexes consume storage space and can slow down write operations, so they should be applied strategically.

Scalability requirements should influence design decisions from the beginning. Applications expected to handle large volumes of traffic may require partitioning, replication, or caching strategies. Understanding anticipated workloads helps developers make informed architectural choices.

Security is equally important. Sensitive information such as passwords should never be stored in text. Instead, developers should use strong hashing algorithms and follow established security practices.

Good database design is not just about technology; it is about creating a structure that accurately represents business requirements while remaining flexible enough to evolve. Investing time in thoughtful design early in a project can save countless hours of troubleshooting and refactoring later.`,
    imageURL: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    createdAt: Date.now() - 86400000,
  },
  {
    title: "A Beginner's Guide to REST APIs",
    content: `REST APIs have become one of the most common methods for communication between software systems. Whether building a mobile app, a web application, or integrating with third-party services, developers frequently interact with RESTful interfaces.

REST stands for Representational State Transfer. It is an architectural style that uses standard HTTP methods to perform operations on resources. Common methods include GET, POST, PUT, PATCH, and DELETE. Each method corresponds to a specific action, making APIs intuitive and predictable.

Resources are typically represented by URLs. For example, a blog application might expose endpoints such as /posts, /posts/1, and /users. Clients interact with these resources by sending HTTP requests and receiving structured responses, often in JSON format.

One reason REST APIs are popular is their simplicity. Since they build upon the existing HTTP protocol, they can be consumed by virtually any programming language or platform. This interoperability has made REST a foundational technology for modern software development.

Error handling is an important aspect of API design. Developers should return meaningful status codes and descriptive error messages. This helps consumers of the API understand what went wrong and how to fix it.

Authentication and authorization are also essential. APIs often use technologies such as JWT tokens, OAuth, or API keys to ensure that only authorized users can access protected resources.

Documentation plays a significant role in API usability. Tools such as Swagger and OpenAPI help developers generate interactive documentation that simplifies integration for consumers.

While newer technologies such as GraphQL have gained popularity, REST remains widely used due to its maturity, simplicity, and extensive ecosystem. Understanding REST principles is therefore a valuable skill for any aspiring software engineer.`,
    imageURL: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    createdAt: Date.now() - 172800000,
  },
];

function Blogs() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl py-24 px-16">
        {/* Section heading */}
        <div className="flex flex-col items-center mb-16 animate-fade-in-up">
          <p className="font-iosveka text-5xl tracking-tight text-[#171717]">
            Blogs
          </p>
          <div className="mt-3 w-10 h-px bg-[#171717]" />
        </div>

        {/* Blog grid */}
        <div
          id="allBlogs"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-14"
        >
          {MOCK_DATA.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <BlogCard
                title={item.title}
                createdAt={item.createdAt}
                coverURL={item.imageURL}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
